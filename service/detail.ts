import EtcRequest from './index'
import type { IResultData } from './index'
import type { IProductDetail } from '@/store'
export type IDetailProductType = 'oppo' | 'air' | 'watch' | 'tablet'

export interface IDetailInfo {
  id?: number
  title?: string
  productDetailss?: IProductDetail[]
}
export const getDetailInfo = (type: IDetailProductType) => {
  return EtcRequest.get<IResultData<IDetailInfo[]>>('/oppoDetail', {
    type
  })
}
