import { SupabaseClient } from './SupabaseClient.ts'
import { SupabaseClientOptions } from './lib/types.ts'
/**
 * Creates a new Supabase Client.
 */
const createClient = (
  supabaseUrl: string,
  supabaseKey: string,
  options?: SupabaseClientOptions
) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options)
}

export { createClient, SupabaseClient }
export * from 'https://cg219.github.io/gotrue-js/mod.ts'
export * from 'https://deno.land/x/postgrest/mod.ts'
export * from 'https://deno.land/x/realtime/mod.ts'
