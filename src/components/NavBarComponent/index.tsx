import { ReactElement } from 'react'
import { useReactive } from 'ahooks'
import { NavBar, Toast } from 'antd-mobile'
import { LeftOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { NavBarType } from './type'

import TitleComponent from './TitleComponent'

interface NavBarProps {
    type?: NavBarType
    children?: ReactElement
    sideBarOpenCallback?: () => void
}
export default function NavBarComponent(props: NavBarProps) {
    const { type, children, sideBarOpenCallback } = props

    const state = useReactive({ navBarType: type || NavBarType.home })

    const onNavBarClick = () => {
        switch (state.navBarType) {
            case NavBarType.home:
                sideBarOpenCallback?.()
                break

            default:
                Toast.show({
                    content: '点击了返回区域',
                    duration: 1000
                })
                break
        }
    }

    return (
        <>
            <NavBar
                backArrow={
                    state.navBarType === NavBarType.home ? (
                        <UnorderedListOutline />
                    ) : (
                        <LeftOutline />
                    )
                }
                onBack={onNavBarClick}
            >
                <TitleComponent titleType={state.navBarType} />
            </NavBar>

            {children}
        </>
    )
}
