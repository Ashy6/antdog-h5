import FlagListComponent from '../../../components/FlagListComponent'
import defaultCardImg from '../../../assets/home/default-card.png'
import { Button } from 'antd-mobile'

interface Card {
    title: string
    describe: string
    rate: string
    time: string
    img: string
    flagList: {
        flag: string
        img: string
        rateList: {
            amount: string
            rate: string
        }[]
    }[]
}
export default function CardItemComponent({ card }: { card: Card }) {

    return (
        <div className='lists-item'>
            <div className='info'>
                <div className='describe'>
                    <label htmlFor=''>{card.title}</label>
                    <div className='describe-text'>{card.describe}</div>
                    <div className='describe-time'>
                        <span>Rate:{card.rate} </span>
                        <span>{card.time}</span>
                    </div>
                </div>
                <img src={card.img || defaultCardImg} alt='' />
            </div>
            <FlagListComponent flagList={card.flagList} />
            <div className='sell'>
                <Button className='antdog-btn sell-btn'>Sell</Button>
            </div>
        </div>
    )
}
