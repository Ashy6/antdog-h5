import { useState } from "react";
import { Avatar } from "antd-mobile";
import { flagsIcon } from "../../assets/png";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/path";

import './style.scss'

export default function UserComponent(props: { isLogin?: boolean }) {
    const isLogin = props.isLogin ?? true

    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        avatar: flagsIcon.CAD,
        userName: 'KKKXXX',
        balance: '987654321.98'
    });

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
                    onClick={() => navigate(LOGIN_PATH)}
                >
                    Login
                </div>
            )}
        </div>
    )

} 