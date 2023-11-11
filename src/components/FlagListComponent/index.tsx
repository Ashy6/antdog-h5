import { useState } from 'react'
import { Avatar } from 'antd-mobile'
import { flagsIcon } from '../../assets/png'

import './style.scss'

interface RateProps {
    flagList: {
        flag?: string
        img?: string
        rateList?: { amount: string; rate: string }[]
    }[]
}
export default function FlagListComponent(props: RateProps) {
    const { flagList } = props
    const [activeFlag, setActiveFlag] = useState(flagList[0])

    return (
        <>
            <div className='rate-list d-flex'>
                <div className='rate-list-flag'>
                    {flagList.map(({ flag, img }, i) => (
                        <div
                            className={`flag-info ${activeFlag.flag === flag && 'is-active'}`}
                            key={`flag-${i}`}
                            onClick={() => setActiveFlag(flagList[i])}
                        >
                            <Avatar
                                src={img || flagsIcon[flag || ''] || ''}
                                style={{ '--size': '22rem' }}
                            />
                            <span className='flag-name'>{flag}</span>
                        </div>
                    ))}
                </div>

                <div className='rate-list-info'>
                    <div className='rate-title info-list'>
                        <div className='amount-info'>Amount</div>
                        <div className='rate-info'>Rate</div>
                    </div>
                    {(activeFlag.rateList || []).map(({ amount, rate }, i) => (
                        <div className='rate-item info-list' key={`rate-${i}`}>
                            <div className='amount-info text-space-hidden'>{amount}</div>
                            <div className='rate-info text-space-hidden'>{rate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
