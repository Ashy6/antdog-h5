import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Avatar } from "antd-mobile";

import { flagsIcon } from "../../assets/png";
import { LOGIN_PATH } from "../../routes/path";
import { closeSideBar, updateUserStore } from "../../store/reducers/userState";

import './style.scss'

export default function UserComponent(props: { isLogin?: boolean }) {
    const isLogin = props.isLogin ?? true

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        avatar: flagsIcon.CAD,
        userName: 'KKKXXX',
        balance: '987654321.98'
    });

    useEffect(() => {
        // todo: 这里应该请求用户相关接口
        // getSelectBalance().then(res => {
        //     const { data } = res
        //     if (data) {
        //         dispatch(updateUserStore(data))
        //     }
        // })
    }, [])

    return (
        <div className="user-container">
            <Avatar
                src={isLogin ? userInfo.avatar : ''}
                style={{ '--size': '42rem' }}
            />
            {isLogin ? (
                <div className='user'>
                    <div className='user-name'>
                        {userInfo.userName}
                    </div>
                    <div className='balance d-flex'>
                        <div className='number text-space-hidden'>
                            {userInfo.balance}
                        </div>
                        Points
                    </div>
                </div>
            ) : (
                <div
                    className='sidebar-item'
                    onClick={() => {
                        navigate(LOGIN_PATH)
                        dispatch(closeSideBar())
                    }}
                >
                    Login
                </div>
            )}
        </div>
    )

} 