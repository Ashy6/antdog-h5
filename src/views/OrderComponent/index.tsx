import React, { useState, useEffect } from 'react';
import { Avatar, Image, Divider, List, Card, ImageUploader, Input, Button, Space } from 'antd-mobile';
import messageIcon from '../../assets/png/message.png';
import USD from '../../assets/png/USD.png';
import AUD from '../../assets/png/AUD.png';
import CAD from '../../assets/png/CAD.png';
import EUR from '../../assets/png/EUR.png';
import GBP from '../../assets/png/GBP.png';
import FlagListComponent from '../../components/FlagListComponent';
import { AntOutline, SoundOutline, AddOutline, CloseCircleFill } from 'antd-mobile-icons'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { uploadFile } from '../../api/upload';
import { confirmOrder, getCardList, submitOrder } from '../../api/card';
import { idCreator } from '../../utils';

import "./order.scss";


async function uploadHandle(file: File) {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    await uploadFile(formData);
    return {
        url: URL.createObjectURL(file),
    }
}

const flagList = [
    {
        flag: 'USD',
        img: '',
        rateList: [
            {
                amount: '10-49',
                rate: '$1=500'
            },
            {
                amount: '51-499',
                rate: '$1=503'
            },
            {
                amount: '50/100/150',
                rate: '$1=503'
            },
            {
                amount: '200/300/400',
                rate: '$1=503'
            },
            {
                amount: '500',
                rate: '$1=503'
            }
        ]
    },
    {
        flag: 'GBP',
        img: '',
        rateList: [
            {
                amount: '10-49',
                rate: '$1=500'
            },
            {
                amount: '51-499',
                rate: '$1=503'
            },
            {
                amount: '50/100/150',
                rate: '$1=503'
            }
        ]
    },
    {
        flag: 'EUR',
        img: '',
        rateList: [
            {
                amount: '10-49',
                rate: '$1=500'
            },
            {
                amount: '51-499',
                rate: '$1=503'
            },
            {
                amount: '50/100/150',
                rate: '$1=503'
            },
            {
                amount: '200/300/400',
                rate: '$1=503'
            },
            {
                amount: '500',
                rate: '$1=503'
            }
        ]
    },
    {
        flag: 'CAD',
        img: '',
        rateList: [
            {
                amount: '10-49',
                rate: '$1=500'
            },
            {
                amount: '51-499',
                rate: '$1=503'
            },
            {
                amount: '50/100/150',
                rate: '$1=503'
            }
        ]
    }
]

interface Card {
    key: string;
    cardFrontUrl: string;
    cardBackUrl: string;
    receipt: string;
    amount: string;
    code: string;
}
function cardFactory(): Card {
    return { key: idCreator(), cardFrontUrl: '', cardBackUrl: '', receipt: '', amount: '', code: '' };
}

export default function OrderComponent(props: { data: any }) {

    const whatappUrl = 'http://baidu.com';

    const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
    const points = 1000;
    const rate = 784.71;

    useEffect(() => {
        getCardList().then(response => {
            // TODO: props 传进来后，删除接口调用 
        });
    }, []);

    const [cards, setCards] = useState([
        cardFactory()
    ]);

    const [canSubmit, setCanSubmit] = useState(false);

    const [cardFrontFileList, setCardFrontFileList] = useState<ImageUploadItem[]>([]);

    const [cardBackFileList, setCardBackFileList] = useState<ImageUploadItem[]>([]);

    const [receiptFileList, setReceiptFileList] = useState<ImageUploadItem[]>([]);

    const menus = [
        { key: "usd", label: "USD", url: USD, },
        { key: "gbp", label: "GBP", url: GBP, },
        { key: "eur", label: "EUR", url: EUR, },
        { key: "cad", label: "CAD", url: CAD }
    ];

    const [activeMenu, setActiveMenu] = useState(menus[0].key);

    const propChange = (key: string, prop: keyof Card, value: string) => {
        cards.forEach(card => {
            if (card.key === key) {
                card[prop] = value;
            }
        })
        setCards([...cards]);
    }

    const addCard = () => {
        const card = cardFactory();
        setCards([...cards, card]);
    }

    const deleteCard = (key: string) => {
        setCards(cards.filter(x => x.key !== key));
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
    const calcOrder = () => {
        confirmOrder({
            "userId": 0,
            "productId": 0,
            "rate": 0.00,
            "goodsList": [
                {
                    "faceValue": 20.00,
                    "finalAmount": 0.00,
                    "name": "name_c020fddea94f",
                    "memo": "memo_4194ad4bf40b",
                    "goodsNo": "goodsNo_d77b020e8e7e",
                    "goodsPass": "goodsPass_adc4c541d179",
                    "goodsType": "goodsType_99fd24edb8b7",
                    "images": [
                        "images_f236f3bf482e"
                    ]
                },
                {
                    "faceValue": 20.00,
                    "finalAmount": 0.00,
                    "name": "name_c020fddea94f",
                    "memo": "memo_4194ad4bf40b",
                    "goodsNo": "goodsNo_d77b020e8e7e",
                    "goodsPass": "goodsPass_adc4c541d179",
                    "goodsType": "goodsType_99fd24edb8b7",
                    "images": [
                        "images_f236f3bf482e"
                    ]
                }
            ],
            "advCode": "Steam",
            "cardNo": "1"
        }).then(response => {
            console.log(response);
        });
    }

    const submit = () => {
        submitOrder('C921198938706808832').then(response => {
            console.log(response);
        })
    }

    return <div className='order full-container'>

        <div className='scroll-container'>
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
            <div className='pl-5 pr-5'>
                <div className='d-flex' style={{ fontWeight: 'bold', paddingBottom: '4rem' }}>
                    <div style={{ color: '#2f54eb', marginRight: '8rem' }}><SoundOutline style={{ marginRight: '2rem' }} /><span style={{ fontSize: '13rem' }}>Notice</span></div>
                    <div style={{ color: '#fa8c16' }}>1 Point{rate}NGN(Current quotes)</div>
                </div>
                <div className='text-align-left'>1. Your card price auto calculate by below forms.don't waste time ask "how much?</div>
                <div className='text-align-left'>2. Click "Send More Cards" to paste all cards once.only form can lock price</div>
                <div className='text-align-left'>3. Chat use for interactive.Submit this form is onl way to trade.Your card redeem byAntdog intelligent machine.</div>
            </div>
            <Divider />
            <FlagListComponent flagList={flagList} />
            <Divider />
            <div>
                {
                    cards.map((card, idx) => {
                        return <div className='d-flex' key={card.key}>
                            <Card onClick={() => { null }}>
                                {idx > 0 && <div className='close-btn mr-1' style={{ textAlign: 'right', fontSize: '20rem', height: '20rem' }} onClick={() => deleteCard(card.key)}>
                                    <CloseCircleFill />
                                </div>}
                                <div className='d-flex justify-content-around mb-2'>
                                    <div>
                                        <ImageUploader
                                            value={cardFrontFileList}
                                            maxCount={1}
                                            onChange={setCardFrontFileList}
                                            upload={uploadHandle as any}
                                        />
                                        <div className='mt-1'>
                                            <span className='required'>*</span>Card Front
                                        </div>
                                    </div>
                                    <div>
                                        <ImageUploader
                                            value={cardBackFileList}
                                            maxCount={1}
                                            onChange={setCardBackFileList}
                                            upload={uploadHandle as any}
                                        />
                                        <div className='mt-1'>
                                            <span className='required'>*</span>Card Back
                                        </div>
                                    </div>
                                    <div>
                                        <ImageUploader
                                            value={receiptFileList}
                                            maxCount={1}
                                            onChange={setReceiptFileList}
                                            upload={uploadHandle as any}
                                        />
                                        <div className='mt-1'>
                                            <span className='required'>*</span>Receipt
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around pl-2 pr-2'>
                                    <div style={{ width: '20%' }}>
                                        <Input
                                            placeholder='100'
                                            className='pl-2'
                                            style={{ border: '1px solid #d9d9d9', borderRadius: '8px' }}
                                            type='number'
                                            value={card.amount}
                                            onChange={value => { propChange(card.key, 'amount', value) }}
                                        />
                                        <div className='mt-1 pl-1 text-align-left'>
                                            <span className='required'>*</span>Amount
                                        </div>
                                    </div>
                                    <div className='pr-2' style={{ width: '65%' }}>
                                        <Input
                                            placeholder='377935542715729 05/31 6207'
                                            className='pl-2'
                                            style={{ border: '1px solid #d9d9d9', borderRadius: '8px' }}
                                            type='number'
                                            value={card.code}
                                            onChange={value => { propChange(card.key, 'code', value) }}
                                        />
                                        <div className='mt-1 pl-1 text-align-left'>
                                            <span className='required'>*</span>Code (lf card code can't seen or ane-code order)
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    })
                }

                <div className='more-btn' onClick={() => addCard()}>
                    <AddOutline className='plus-btn' />Send More Cards
                </div>
            </div>
        </div>
        <div className='footer'>
            {
                !canSubmit ?
                    <div className='submit-btn' onClick={() => calcOrder()}>
                        Submit
                    </div> :
                    <div className='submit-btn d-flex' onClick={() => calcOrder()}>
                        <div style={{ fontSize: '14rem' }}>Earn 987654321.98 Points≈987654321.98 NGN</div>
                        <Divider direction='vertical' />
                        <div className='pr-3' onClick={() => submit()}>Submit</div>
                    </div>
            }
        </div>
    </div>
}