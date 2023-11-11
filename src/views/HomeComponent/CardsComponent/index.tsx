import { useReactive } from 'ahooks'
import CardItemComponent from '../CardItemComponent'

export default function CardsListComponent() {
    const cardsList = useReactive([mock[0], mock[0]])

    return (
        <div className='home-container lists'>
            {cardsList.map((card, i) => (
                <CardItemComponent card={card} key={i} />
            ))}
        </div>
    )
}

export const mock = [
    {
        title: 'Steam(Global)',
        describe:
            'CAD5338 5339 5203 5336 511340533 334 47482 4583 6672AyDB 6723 36727 3781635CDY 5287 SEBVC TUXN 5-30 minutes Not list code chart ask CAD rate inquire',
        rate: '(Nigeria)',
        time: '11/Aug 05:48',
        img: '',
        flagList: [
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
    }
]
