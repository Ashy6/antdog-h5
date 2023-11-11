import { ReactElement } from 'react'
import { NavBar } from 'antd-mobile'
import { LeftOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { useLocation, useNavigate } from 'react-router-dom'

import HeaderIcon from '../../assets/header/title-bg.png'

import { HOME_PATH } from '../../routes/path'
import { titleMap } from './type'

import './style.scss'

interface NavBarProps {
    children?: ReactElement
    sideBarOpenCallback?: () => void
}
export default function NavBarComponent(props: NavBarProps) {
    const { children, sideBarOpenCallback } = props

    const location = useLocation()
    const navigate = useNavigate()

    const onNavBarClick = () => {
        if (isHome()) {
            sideBarOpenCallback?.()
        } else {
            navigate(-1)
        }
    }

    const isHome = () => location.pathname === HOME_PATH

    return (
        <>
            <NavBar
                backArrow={isHome() ? <UnorderedListOutline /> : <LeftOutline />}
                onBack={onNavBarClick}
            >
                {titleMap[location.pathname] || (
                    <div
                        className='title-home'
                        style={{ backgroundImage: `url(${HeaderIcon})` }}
                    ></div>
                )}
            </NavBar>

            {children}
        </>
    )
}
