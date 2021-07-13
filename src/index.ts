import SupabaseClient from './SupabaseClient.ts'
import { SupabaseClientOptions, SupabaseRealtimePayload } from './lib/types.ts'
import { User as AuthUser, Session as AuthSession } from 'https://deno.land/x/gotrue/mod.ts'
export * from 'https://deno.land/x/gotrue/mod.ts'
export type {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
  PostgrestError,
} from 'https://deno.land/x/postgrest/mod.ts'
export * from 'https://deno.land/x/realtime/mod.ts'

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

export type {
  createClient,
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
  AuthUser,
  AuthSession,
}
