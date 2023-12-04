
import { Avatar, Image, Divider, Button, ImageUploadItem } from 'antd-mobile';
import messageIcon from '../../../assets/png/message.png';
import steamIcon from '../../../assets/png/steam.png';
import image1 from '../../../assets/png/upload-bg-img-1.jpg';
import image2 from '../../../assets/png/upload-bg-img-2.jpg';
import image3 from '../../../assets/png/upload-bg-img-3.jpg';
import { OrderStatus } from '../../../types/order-status';
import { useState } from 'react';
import { formatTime } from '../../../utils/time';

import './OrderDetail.scss';
import InitiateArbitration from './InitiateArbitration';

export default function OrderDetailComponent(props: { value: AnyObject }) {

    const whatappUrl = 'http://baidu.com';
    const points = 1000;
    const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
    const { value = {} } = props || {};
    const {
        detailList = [], // 详情
        advCode, //
        amount, // 总金额
        orderNo = 1234567890, // 订单编号
        currency, // 币种
        createTime = '2023-11-19 22:03', // 创建时间
        //updateTime, // 更新时间
        seller,      // 售卖人
        rate = 784.71,        // 汇率
        // cardType,
        buyer, // 买家
        status,
        merchNo, // 商户号
        userId, // 用户
        faceValue // 总面值
    } = value;
    const [orderStatus, setOrderStatus] = useState(status || OrderStatus.inTrade);
    const [imageList, setImageList] = useState([image1, image2, image3]);

    const descriptions: { key: number, label: string; value: string }[] = [
        { key: 1, label: 'Username submit the order', value: '2023.8.15 23:29:58' },
        { key: 2, label: 'Buyer take order', value: '2023.8.15 23:29:58' },
        { key: 3, label: 'Buyer initiated negotiation', value: '2023.8.15 23:29:58' },
        { key: 4, label: 'Seller initiated arbitration', value: '2023.8.15 23:29:58' },
        { key: 5, label: 'Platform is in arbitration', value: '2023.8.15 23:29:58' },
        { key: 6, label: 'The platform ruled that the buyer was justifiedConclusion: Not USD,MXN Card,rate is lower', value: '2023.8.15 23:29:58' },
        { key: 7, label: 'Seller +10 Points', value: '2023.8.15 23:29:58' },
        { key: 8, label: 'Order Completed', value: '2023.8.15 23:29:58' },
    ]

    const [fileList, setFileList] = useState<ImageUploadItem[]>([])

    const [descriptionValue, setDescriptionValue] = useState('');


    return <div className='order card-item'>
        <div className='d-flex justify-content-between  pl-3 pr-3'>
            <div className='d-flex align-items-center'>
                <div>
                    <Avatar src={avatar} />
                    <div style={{ textAlign: 'center' }}>Youka</div>
                </div>
                <div className='text-align-left' style={{ marginLeft: '16rem' }}>
                    <div>Group:Game Card</div>
                    <div style={{ fontWeight: 'bold', color: '#fa8c16' }}>Deposit {points} Points</div>
                </div>
            </div>
            <div onClick={() => window.open(whatappUrl)}>
                <Image src={messageIcon} height='56rem' width='80rem' />
            </div>
        </div>
        <Divider />
        {/* amount */}
        <div className={`card-item-amount cursor-pointer pl-4 pr-4 `}>
            <img className='card-item-icon left' src={steamIcon} alt='' />
            <div className='amount'>
                <label className='amount-title'>{'Steam'}</label>
                <div className='amount-line'>
                    <span>Amount</span>
                    <span>{'amount'}</span>
                    <span>{'currency'}USD</span>
                </div>
                <div className='amount-line'>
                    <span>Rate</span>
                    <span>9999999</span>
                    <span>Points</span>
                </div>
            </div>
        </div>

        {/* order info */}
        <div className={`card-item-order  pl-4 pr-4`} >
            <div className='card-item-order-info'>
                <span>Order Number</span>
                <span>{orderNo || '1234567890'}</span>
            </div>
            <div className='card-item-order-info'>
                <span>Order Time</span>
                <span>{formatTime(createTime)}</span>
            </div>
            <div className='card-item-order-info'>
                <span>Time Limit</span>
                <span>300 mins</span>
            </div>
        </div>
        <div className='d-flex justify-content-around mb-2'>
            {
                imageList.map((info, index) => {
                    return (
                        <>
                            <div key={`IMG-${index}`}>
                                {/* images */}
                                <div className='card-item-images' >
                                    <Image src={info} height='120rem' width='96rem' />
                                </div>
                            </div >
                        </>
                    )
                })
            }
        </div>
        <div className='card-item-USD'>
            <span>999999</span>
            <span>USD</span>
            <span>37793555427155729</span>
            <span>05/31</span>
            <span>6207</span>
        </div>
        <div className='pl-4 pr-4'>
            {/* In trade */}
            {orderStatus === OrderStatus.inTrade && <div className='card-item-btn p-0'>
                <Button className='antdog-btn processing' color="primary" disabled>
                    Order Processing
                </Button>
            </div>}
            {orderStatus === OrderStatus.inTrade && <div className='card-item-btn p-0'>
                <InitiateArbitration setOrderStatus={setOrderStatus} orderNo={orderNo} createTime={createTime} ></InitiateArbitration>
            </div>}

            {/* In dispute */}
            {[OrderStatus.inDisputeNegotiate].includes(orderStatus) && <div className='card-item-btn p-0 short'>
                <Button className='antdog-btn disabled' color="primary" disabled>
                    In dispute
                </Button>
            </div>}

            {/* wait */}
            {orderStatus === OrderStatus.inDisputeArbitration && <div className='card-item-btn p-0'>
                <Button className='antdog-btn disabled' color="primary" disabled>
                    Platform is in arbitration,please wait
                </Button>
            </div>}

            {/* Completed */}
            {orderStatus === OrderStatus.completed && <div className='card-item-btn p-0'>
                <Button className='antdog-btn disabled' color="primary" disabled>
                    Order Completed
                </Button>
            </div>}
        </div>
        <div className='pl-5 pr-5 card-item-order'>
            {descriptions.map(item => {
                return <div className='d-flex justify-content-between mb-3' key={item.key}>
                    <div className='text-align-left' style={{ maxWidth: '60%' }}>{item.label}</div>
                    <div>{item.value}</div>
                </div>
            })}
        </div>
    </div>
}