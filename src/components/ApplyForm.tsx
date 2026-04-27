'use client'
import { useState } from 'react'
import { supabase, type RestaurantApplication } from '@/lib/supabase'
import styles from './ApplyForm.module.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const CUISINE_OPTIONS = [
  'Mexican / Tex-Mex',
  'American / Burgers',
  'Pizza / Italian',
  'Asian / Sushi',
  'Mediterranean / Middle Eastern',
  'BBQ / Smokehouse',
  'Breakfast / Brunch',
  'Vegan / Vegetarian',
  'Seafood',
  'Other',
]

const HEAR_OPTIONS = [
  'Google Search',
  'Social Media (Instagram / Facebook)',
  'Friend or colleague',
  'Tucson newspaper / media',
  'Flyer or postcard',
  'Other',
]

export default function ApplyForm() {
  const [form, setForm] = useState<Omit<RestaurantApplication, 'id' | 'created_at' | 'status' | 'notes'>>({
    restaurant_name: '',
    owner_name: '',
    email: '',
    phone: '',
    address: '',
    cuisine_type: '',
    how_did_you_hear: '',
  })
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setError('')

    try {
      const { error: sbError } = await supabase
        .from('restaurant_applications')
        .insert([{ ...form, status: 'pending' }])

      if (sbError) throw sbError
      setState('success')
    } catch (err: unknown) {
      console.error('Submission error:', err)
      setError('Something went wrong. Please try again or email us at hungry@tucsoneats.com')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Application received!</h2>
        <p className={styles.successBody}>
          Thanks for applying to partner with TucsonEats. We&apos;ll review your
          application and get back to you within 1–2 business days at{' '}
          <strong>{form.email}</strong>.
        </p>
        <p className={styles.successSub}>
          Questions in the meantime? Call us at{' '}
          <a href="tel:+15207005000">(520) 700-5000</a> or email{' '}
          <a href="mailto:hungry@tucsoneats.com">hungry@tucsoneats.com</a>.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="restaurant_name">Restaurant Name *</label>
          <input
            id="restaurant_name"
            name="restaurant_name"
            type="text"
            className={styles.input}
            value={form.restaurant_name}
            onChange={handleChange}
            placeholder="e.g. Casa Grande Tacos"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="owner_name">Your Name *</label>
          <input
            id="owner_name"
            name="owner_name"
            type="text"
            className={styles.input}
            value={form.owner_name}
            onChange={handleChange}
            placeholder="First and last name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourrestaurant.com"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            value={form.phone}
            onChange={handleChange}
            placeholder="(520) 000-0000"
            required
          />
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="address">Restaurant Address *</label>
          <input
            id="address"
            name="address"
            type="text"
            className={styles.input}
            value={form.address}
            onChange={handleChange}
            placeholder="Street address, Tucson, AZ"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="cuisine_type">Cuisine Type *</label>
          <select
            id="cuisine_type"
            name="cuisine_type"
            className={styles.select}
            value={form.cuisine_type}
            onChange={handleChange}
            required
          >
            <option value="">Select your cuisine</option>
            {CUISINE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="how_did_you_hear">How did you hear about us?</label>
          <select
            id="how_did_you_hear"
            name="how_did_you_hear"
            className={styles.select}
            value={form.how_did_you_hear}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            {HEAR_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {state === 'error' && (
        <p className={styles.errorMsg}>{error}</p>
      )}

      <div className={styles.footer}>
        <p className={styles.disclaimer}>
          By submitting you agree to our{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
          We&apos;ll never share your information with third parties.
        </p>
        <button
          type="submit"
          className={styles.submit}
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Submitting…' : 'Submit Application →'}
        </button>
      </div>
    </form>
  )
}
