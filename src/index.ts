import { rpc, createRpcServer } from '@atek-cloud/node-rpc'

export const ID = 'atek.cloud/inspect-api'

export interface InspectApi {
  isReady (): Promise<boolean>
  getConfig (): Promise<object>
}

export function createClient () {
  return rpc<InspectApi>(ID)
}

export function createServer (handlers: any) {
  return createRpcServer(handlers, {
    isReady: {
      response: {type: 'boolean'}
    },
    getConfig: {
      response: {type: 'object'}
    }
  })
}

export default createClient()