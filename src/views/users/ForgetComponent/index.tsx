import { useState } from 'react'
import { Button, Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

import '../style.scss'

export default function ForgetComponent() {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className='user-title'>
                <p>Forgot Password</p>
            </div>
            <div>
                <p>by email</p>
            </div>
            <div className='user-form-card'>
                <Form className='text-align-left' layout='vertical'>
                    <Form.Item
                        label='email'
                        name='mail'
                        rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                        <Input placeholder='Please enter email address' clearable />
                    </Form.Item>
                    <Form.Item
                        label='code'
                        name='verifyCode'
                        rules={[{ required: true, message: 'Please enter verification code' }]}
                        extra={
                            <Button className='send-btn'>Send code</Button>
                        }
                    >
                        <Input placeholder='Please enter verification code' clearable />
                    </Form.Item>
                    <Form.Item
                        label='passward'
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
                            placeholder='New Password (6-16 characters,only letters and numbers)'
                            clearable
                            type={visible ? 'text' : 'password'}
                        />
                    </Form.Item>
                </Form>
            </div>
            <div className='px-2-y-1'>
                <Button className='antdog-btn full'>Confirm</Button>
            </div>
        </>
    )
}
