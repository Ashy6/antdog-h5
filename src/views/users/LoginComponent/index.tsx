import { useState } from 'react'
import { Button, Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import {
    FORGET_PASSWORD_PATH,
    HOME_PATH,
    REGISTER_PATH
} from '../../../routes/path'
import { LoginParams, login } from '../../../api/user'

import '../style.scss'

export default function LoginComponent() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const onFinish = async (values: LoginParams) => {
        if (values) {
            const request = await login(values)
            // 待处理： 登录成功后，通过判断 code 跳转首页
            if (request) {
                localStorage.setItem('AntdogTokenH5', request.data?.token)
                navigate(HOME_PATH)
            }
        }
    }

    return (
        <>
            <div className='user-title border'>
                <p>Hello,Welcome to Antdog</p>
            </div>
            <div>
                <p>Login by email</p>
            </div>
            <div className='user-form-card border'>
                <Form
                    className='text-align-left'
                    layout='vertical'
                    onFinish={onFinish}
                    footer={
                        <Button
                            block
                            type='submit'
                            color='primary'
                            size='large'
                            className='antdog-btn full'
                        >
                            Login
                        </Button>
                    }
                >
                    <Form.Item
                        label='email'
                        name='mail'
                        rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                        <Input placeholder='Please enter email address' clearable />
                    </Form.Item>
                    <Form.Item
                        label='password'
                        name='password'
                        rules={[{ required: true, message: 'Please enter password' }]}
                        extra={
                            <div className={'eye'}>
                                {!visible ? (
                                    <EyeInvisibleOutline onClick={() => setVisible(true)} />
                                ) : (
                                    <EyeOutline onClick={() => setVisible(false)} />
                                )}
                            </div>
                        }
                    >
                        <Input
                            placeholder='Please enter password'
                            clearable
                            type={visible ? 'text' : 'password'}
                        />
                    </Form.Item>
                </Form>
                <div className='user-bottom d-flex justify-content-between align-items-center'>
                    <div
                        className='cursor-pointer px-2-y-1 '
                        onClick={() => navigate(REGISTER_PATH)}
                    >
                        Sign up
                    </div>
                    <div
                        className='cursor-pointer px-2-y-1 '
                        onClick={() => navigate(FORGET_PASSWORD_PATH)}
                    >
                        Forget Password
                    </div>
                </div>
            </div>
        </>
    )
}
