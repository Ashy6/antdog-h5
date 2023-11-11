import { useEffect, useState } from 'react'
import { Button } from 'antd-mobile'
import { OrderStatus } from '../../types/order-status'

import './style.scss'

export default function WithdrawDetailsComponent() {
    const value = {} as AnyObject
    const {
        id: orderId,
        createTime,
        orderNo,
        bankName,
        bankAccount,
        detailList = [], // 详情
        status,
        amount,
        seller, // 售卖人
        buyer,
        point,
        points,
        rate,
        userId,
        merchNo
    } = value

    const [logList, setlogList] = useState([])
    const [orderStatus, setOrderStatus] = useState(status)

    useEffect(() => {
        setlogList([])
        // getPointsDetails(orderNo).then((res: any) => {
        //     setlogList(
        //         (res?.data?.statusRecordList || []).map(
        //             ({ afterStatusDesc, createTime, memo, images }) => {
        //                 const { date, time } = convertTimeString(createTime)
        //                 return {
        //                     label: afterStatusDesc,
        //                     date,
        //                     time,
        //                     desc: memo,
        //                     imageList: getImageList(images || '')
        //                 }
        //             }
        //         )
        //     )
        // })
    }, [orderNo])

    const openDetails = () => { }

    return (
        <>
            {' '}
            <div className='card-item-card cursor-pointer' onClick={openDetails}>
                Points
            </div>
            {/* Points text */}
            <div className='card-item-text'>Points</div>
            {/* points info */}
            <div className='card-item-points'>
                <div className='card-item-points-info'>
                    <span>Bank</span>
                    <span>Kuda</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Bank Account Number</span>
                    <span>{bankAccount}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Name</span>
                    <span>{bankName}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Points</span>
                    <span>{point}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Amount</span>
                    <span>{amount}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Order Number</span>
                    <span>{orderNo}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Order Time</span>
                    <span>{createTime}</span>
                </div>
                <div className='card-item-points-info'>
                    <span>Time Limit</span>
                    <span>120 min</span>
                </div>
            </div>
            {/* In trade */}
            {[OrderStatus.inTrade].includes(orderStatus) && (
                <div className='card-item-btn'>
                    {/* <Button className='antdog-btn' onClick={cancelOrder}>Cancel</Button>
            <Button className='antdog-btn' onClick={showModal}>
                Paid
            </Button> */}
                </div>
            )}
            {/* In dispute */}
            {orderStatus === OrderStatus.inDisputeArbitration && (
                <div className='card-item-btn'>
                    <Button className='antdog-btn disabled' disabled>
                        Platform is in arbitration,please wait
                    </Button>
                </div>
            )}
            {[OrderStatus.inTradeProcessing].includes(orderStatus) && (
                <div className='card-item-btn short'>
                    <Button className='antdog-btn processing' disabled>
                        Order Processing
                    </Button>
                </div>
            )}
            {/* Cancelled */}
            {orderStatus === OrderStatus.cancelled && (
                <div className='card-item-btn short'>
                    <Button className='antdog-btn disabled' disabled>
                        Cancelled
                    </Button>
                </div>
            )}
            {/* Completed */}
            {[OrderStatus.completed].includes(orderStatus) && (
                <div className='card-item-btn short'>
                    <Button className='antdog-btn disabled' disabled>
                        Order Completed
                    </Button>
                </div>
            )}
            {logList.map(({ label, date, time, desc, imageList }, i) => {
                return (
                    <div key={i} className='detail-content'>
                        <div className='detail-info'>
                            <div className='label'>{label}</div>
                            <div>
                                <p>{date}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className='detail-desc'>
                            <label htmlFor=''>Description：</label>
                            <br />
                            <span>{desc}</span>
                            <br />
                            {/* <div className='images'>
                            {imageList?.length && (
                                <Image.PreviewGroup>
                                    {imageList.map((url, i) => (
                                        <Image key={i} width={110} height={140} src={url} />
                                    ))}
                                    {imageList.length < 3 &&
                                        Array.from({ length: 3 - imageList.length }, (_, i) => (
                                            <div
                                                className='ant-image'
                                                key={`empty-${i}`}
                                                style={{ width: 110, height: 140 }}
                                            ></div>
                                        ))}
                                </Image.PreviewGroup>
                            )}
                        </div> */}
                        </div>
                    </div>
                )
            })}
        </>
    )
}
