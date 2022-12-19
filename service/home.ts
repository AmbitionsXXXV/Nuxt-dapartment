import EtcRequest from './index'
import type { IResultData } from './index'
type HomeInfoType = 'oppo' | 'onePlus' | 'intelligent'

export const getHomeInfo = (type: HomeInfoType) => {
  return EtcRequest.get<IResultData<any>>('/home/info', {
    type: type || 'oppo'
  })
}
