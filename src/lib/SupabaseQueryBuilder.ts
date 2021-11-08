import { PostgrestQueryBuilder } from 'https://deno.land/x/postgrest/mod.ts'
import { SupabaseRealtimeClient } from './SupabaseRealtimeClient.ts'
import { RealtimeClient } from 'https://deno.land/x/realtime/mod.ts'
import { SupabaseEventTypes, SupabaseRealtimePayload } from './types.ts'

export class SupabaseQueryBuilder<T> extends PostgrestQueryBuilder<T> {
  private _subscription: SupabaseRealtimeClient
  private _realtime: RealtimeClient

  constructor(
    url: string,
    {
      headers = {},
      schema,
      realtime,
      table,
    }: {
      headers?: { [key: string]: string }
      schema: string
      realtime: RealtimeClient
      table: string
    }
  ) {
    super(url, { headers, schema })

    this._subscription = new SupabaseRealtimeClient(realtime, headers, schema, table)
    this._realtime = realtime
  }

  /**
   * Subscribe to realtime changes in your databse.
   * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
   * @param callback A callback that will handle the payload that is sent whenever your database changes.
   */
  on(
    event: SupabaseEventTypes,
    callback: (payload: SupabaseRealtimePayload<T>) => void
  ): SupabaseRealtimeClient {
    if (!this._realtime.isConnected()) {
      this._realtime.connect()
    }
    return this._subscription.on(event, callback)
  }
}
