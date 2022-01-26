import { GoTrueClient } from 'https://cg219.github.io/gotrue-js/mod.ts'
import { SupabaseAuthClientOptions } from './types.ts'

export class SupabaseAuthClient extends GoTrueClient {
  constructor(options: SupabaseAuthClientOptions) {
    super(options)
  }
}
