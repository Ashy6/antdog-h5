import { Dialog, Button, ImageUploader, TextArea, Input } from 'antd-mobile';
import { formatTime } from '../../../utils/time';
import { agreeNegotiate, applyArbitration } from '../../../api/card';
import { useRef } from 'react';
import { OrderStatus } from '../../../types/order-status';
import { uploadFile } from '../../../api/upload';

export default function InitiateArbitration(props: { orderNo: string, createTime: string, setOrderStatus: (status: OrderStatus) => void }) {
    const { orderNo, createTime, setOrderStatus } = props;
    return <>
        <OpenDialog orderNo={orderNo} createTime={createTime} setOrderStatus={setOrderStatus} />
        <Button className='antdog-btn' color='primary' onClick={() => {
            agreeNegotiate(orderNo).then(response => {
                console.log('同意协商：', response);
                if (response.data) {
                    setOrderStatus(OrderStatus.completed);
                }
            });
        }}>
            Accept Negotiation
        </Button>
    </>
}

const OpenDialog = (props: { orderNo: string, createTime: string; setOrderStatus: (status: OrderStatus) => void }) => {
    const { orderNo, createTime, setOrderStatus } = props;
    const description = useRef('');
    const images = useRef('');

    const uploadHandle = async (file: File) => {
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        const response = await uploadFile(formData);
        console.log('上传结果：', response.data);
        images.current = response.data;
        return {
            url: URL.createObjectURL(file),
        }
    }

    return <Button
        className='antdog-btn'
        color="primary"
        block
        onClick={async () => {
            const result = await Dialog.confirm({
                header: <div>Initiate Arbitration</div>,
                cancelText: 'Cancel',
                confirmText: 'Confirm',
                content: (
                    <>
                        <div className={`d-flex justify-content-between odd mb-2 pl-2 pr-2`}>
                            <div>Order Number</div>
                            <div>{orderNo}</div>
                        </div>
                        <div className={`d-flex justify-content-between even mb-2 pl-2 pr-2`}>
                            <div>Order Time</div>
                            <div>{formatTime(createTime)}</div>
                        </div>
                        <div className={`d-flex justify-content-between odd mb-2 pl-2 pr-2`}>
                            <div style={{ marginRight: '12rem' }}>
                                <div className='desc-label mb-2'>Description</div>
                                {!images.current && <div className='uploader-wrapper'>
                                    <ImageUploader maxCount={1} upload={uploadHandle} />
                                </div>}
                            </div>
                            <div>
                                <TextArea
                                    onChange={(val) => description.current = val}
                                    placeholder="Please describe the matter in detail and the platform will also question the buyer.Combine all the circumstances and make a ruling."
                                    autoSize={{ minRows: 5, maxRows: 6 }} />
                            </div>
                        </div>
                    </>
                ),
            });
            if (result) {
                applyArbitration({
                    orderNo,
                    images: images.current,
                    description: description.current
                }).then(response => {
                    console.log('申请协商：', response);
                    if (response.data) {
                        setOrderStatus(OrderStatus.inDisputeArbitration);
                    }
                });
            }
            return result;
        }}
    >
        Initiate Arbitration
    </Button>
}