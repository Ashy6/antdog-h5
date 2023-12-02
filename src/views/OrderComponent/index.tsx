import { useState, useEffect } from 'react';
import { Avatar, Image, Divider, Card, ImageUploader, Input, Dialog } from 'antd-mobile';
import messageIcon from '../../assets/png/message.png';
import FlagListComponent from '../../components/FlagListComponent';
import { SoundOutline, AddOutline, CloseCircleFill } from 'antd-mobile-icons'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { uploadFile } from '../../api/upload';
import { confirmOrder, getCardList, submitOrder } from '../../api/card';
import { idCreator } from '../../utils';

import "./order.scss";
import { useNavigate } from 'react-router-dom';
import { ORDER_DETAIL_PATH } from '../../routes/path';


async function uploadHandle(file: File) {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    const response = await uploadFile(formData);
    console.log('上传结果：', response.data);
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
    amount: string;
    code: string;
    cardFrontFileList: ImageUploadItem[];
    cardBackFileList: ImageUploadItem[];
    receiptFileList: ImageUploadItem[];
    finished: boolean;
}
function cardFactory(): Card {
    return {
        key: idCreator(),
        amount: '',
        code: '',
        cardFrontFileList: [],
        cardBackFileList: [],
        receiptFileList: [],
        finished: false
    };
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

    const propChange = (key: string, prop: keyof (Omit<Card, "finished">), value: any) => {
        let needCalc = false;
        cards.forEach(card => {
            if (card.key === key) {
                card[prop] = value;
                // 检查 key 不是 finished 的属性是否有空的（代表还没有填写的）
                const keys = Object.keys(card).filter(x => x !== 'finished') as (keyof (Omit<Card, "finished">))[];
                const isEmpty = (key: keyof (Omit<Card, "finished">)) => !card[key]?.length;
                const hasEmpty = keys.some(k => isEmpty(k));
                if (!card.finished) {
                    if (!hasEmpty) {
                        needCalc = true;
                        card.finished = true;
                    }
                } else {
                    if (hasEmpty) {
                        card.finished = false;
                        needCalc = true;
                    }
                }
            }
        })
        setCards([...cards]);
        const hasFinished = cards.some(x => x.finished);
        if (!hasFinished) {
            setCanSubmit(false);
        } else {
            if (needCalc) {
                calcOrder();
            }
        }
    }

    const addCard = () => {
        const card = cardFactory();
        setCards([...cards, card]);
    }

    const deleteCard = (key: string) => {
        setCards(cards.filter(x => x.key !== key));
    }

    const [cardNo, setCardNo] = useState('');

    const calcOrder = () => {
        const goodsList = cards.filter(x => x.finished).map(card => {
            return {
                faceValue: 20.00,
                goodsNo: card.code,
                amount: card.amount,
                images: [
                    /* url 是 blob:http://xxxx，所以要截掉 blob */
                    card.cardFrontFileList[0].url.slice(5),
                    card.cardBackFileList[0].url.slice(5),
                    card.receiptFileList[0].url.slice(5)
                ]
            };
        })
        confirmOrder({
            useId: "T1",
            advCode: "Steam",
            cardNo: "1",
            rate: "1",
            goodsList
        }).then(response => {
            console.log(response);
            setCardNo(response.data.orderNo);
            setCanSubmit(true);
        });
    }

    const navigate = useNavigate();

    const submit = () => {
        if (!canSubmit) {
            Dialog.show({
                className: 'verify-empty-dialog',
                closeOnAction: true,
                content: 'Please check that all required fields are correct',
                actions: [{ key: 'ok', text: 'OK', bold: true }]
            })
            return;
        }
        submitOrder(cardNo).then(response => {
            console.log(response);
            navigate(ORDER_DETAIL_PATH);
        });
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
                <div className='text-align-left'>3. Chat use for interactive.Submit this form is onl way to trade.Your card redeem by Antdog intelligent machine.</div>
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
                                            className={!card.cardFrontFileList.length ? 'upload-image-1' : ''}
                                            value={card.cardFrontFileList}
                                            maxCount={1}
                                            onChange={value => propChange(card.key, 'cardFrontFileList', value)}
                                            upload={uploadHandle}
                                        />
                                        <div className='mt-1'>
                                            <span className='required'>*</span>Card Front
                                        </div>
                                    </div>
                                    <div>
                                        <ImageUploader
                                            className={!card.cardBackFileList.length ? 'upload-image-2' : ''}
                                            value={card.cardBackFileList}
                                            maxCount={1}
                                            onChange={value => propChange(card.key, 'cardBackFileList', value)}
                                            upload={uploadHandle}
                                        />
                                        <div className='mt-1'>
                                            <span className='required'>*</span>Card Back
                                        </div>
                                    </div>
                                    <div>
                                        <ImageUploader
                                            className={!card.receiptFileList.length ? 'upload-image-3' : ''}
                                            value={card.receiptFileList}
                                            maxCount={1}
                                            onChange={value => propChange(card.key, 'receiptFileList', value)}
                                            upload={uploadHandle}
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
                    <div className='submit-btn' onClick={() => submit()}>
                        Submit
                    </div> :
                    <div className='submit-btn d-flex'>
                        <div style={{ fontSize: '14rem' }}>Earn 987654321.98 Points≈987654321.98 NGN</div>
                        <Divider direction='vertical' />
                        <div className='pr-3' onClick={() => submit()}>Submit</div>
                    </div>
            }
        </div>
    </div>
}