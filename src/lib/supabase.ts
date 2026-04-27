import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// TypeScript type for a restaurant application row
export type RestaurantApplication = {
  id?: string
  created_at?: string
  restaurant_name: string
  owner_name: string
  email: string
  phone: string
  address: string
  cuisine_type: string
  how_did_you_hear?: string
  status?: 'pending' | 'approved' | 'rejected'
  notes?: string
}
