import EtcRequest from './index'
import type { IResultData } from './index'
import { IHomeState } from '~~/store'
export type IHomeInfoType = 'oppo' | 'onePlus' | 'intelligent'

export const getHomeInfo = (type: IHomeInfoType) => {
  return EtcRequest.get<IResultData<IHomeState>>('/home/info', {
    type: type || 'oppo'
  })
}
