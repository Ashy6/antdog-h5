import { API_PREFIX, instance } from './util';


export function getCardList(page = 1) {
    return instance({
        url: `${API_PREFIX}/card/page`,
        method: 'post',
        data: {
            page
        }
    })
}
/* 
| userId | string | 是 | 接收人 |
| --- | --- | --- | --- |
| advCode | string | 是 | 广告code |
| cardNo | string | 是 | 改礼品卡编号 |
| goodsList | Array | 是 | 卡列表 |
| faceValue | number | 是 | 面值 |
| name | string | 否 | 名称 |
| memo | string | 否 | 备注信息 |
| goodsNo | string | 否 | 卡号 |
| goodsPass | string | 否 | 卡密 |
| images | Array | 是 | 图片 |
*/
export function confirmOrder(data: Record<string, unknown>) {
    return instance({
        url: `${API_PREFIX}/order/confirmOrder`,
        method: 'post',
        data: data
    });
}

export function submitOrder(orderNo: string) {
    return instance({
        url: `${API_PREFIX}/card/submit?orderNo=${orderNo}`,
        method: 'get',
    });
}

export function applyArbitration(data: { orderNo: string, images: string, description?: string }) {
    return instance({
        url: `${API_PREFIX}/order/applyArbitration`,
        method: 'post',
        data: data
    });
}

export function agreeNegotiate(orderNo: string) {
    return instance({
        url: `${API_PREFIX}/order/agreeNegotiate?orderNo=${orderNo}`,
        method: 'get'
    });
}