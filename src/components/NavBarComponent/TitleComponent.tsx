import { useReactive } from "ahooks";
import { NavBarType } from "./type";
import HomeIcon from '../../assets/png/header-home.png'

import './style.scss'

export default function TitleComponent(props: { titleType: NavBarType }) {
    const state = useReactive(props)

    return <>
        {
            state.titleType === NavBarType.home &&
            <div className="title-home" style={{ backgroundImage: `url(${HomeIcon})` }}></div>
        }
    </>
}