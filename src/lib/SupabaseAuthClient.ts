import { GoTrueClient } from 'https://deno.land/x/gotrue/mod.ts'
import { SupabaseAuthClientOptions } from './types.ts'

export class SupabaseAuthClient extends GoTrueClient {
  constructor(options: SupabaseAuthClientOptions) {
    super(options)
  }
}
