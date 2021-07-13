import { GoTrueClient } from 'https://deno.land/x/gotrue/mod.ts'

export class SupabaseAuthClient extends GoTrueClient {
  constructor(options: {
    url?: string
    headers?: { [key: string]: string }
    detectSessionInUrl?: boolean
    autoRefreshToken?: boolean
    persistSession?: boolean
    localStorage?: Storage
  }) {
    super(options)
  }
}
