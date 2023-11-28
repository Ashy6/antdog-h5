import { useState } from 'react'
import useTimeCount from '../../../hooks/useTimeCount'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd-mobile'
import { LOGIN_PATH } from '../../../routes/path'
import { RegisterParams, getMailCode, register } from '../../../api/user'

import '../style.scss'

export default function RegisterComponent() {
    const navigate = useNavigate()
    const [tigger, count, tiggering] = useTimeCount(120)

    const [code, setCode] = useState('');

    const sendCode = () => {
        getMailCode({ receiver: code }).then(res => {
            if (res) {
                tigger()
            }
        })
    }

    const onFinish = async (values: RegisterParams) => {
        console.log('values', values);
        if (values) {
            const request = await register(values)
            console.log('注册', request);
            // 注册成功后，跳转登录
            if (request) {
                navigate(LOGIN_PATH)
            }
        }
    }

    return (
        <>
            <div className='user-title'>
                <p>Hello,Welcome to Antdog</p>
            </div>
            <div className='user-form-card'>
                <Form className='text-align-left' layout='vertical' onFinish={onFinish}>
                    <Form.Item
                        label='email'
                        name='email'
                        rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                        <Input onChange={setCode} placeholder='Please enter email address' clearable />
                    </Form.Item>
                    <Form.Item
                        label='code'
                        name='verifyCode'
                        rules={[
                            { required: true, message: 'Please enter verification code' }
                        ]}
                        extra={
                            <Button disabled={tiggering} className='send-btn' onClick={sendCode}>
                                {tiggering ? `${count}s` : 'Send code'}
                            </Button>
                        }
                    >
                        <Input placeholder='Please enter verification code' clearable />
                    </Form.Item>
                    <Form.Item
                        label='username'
                        name='username'
                        rules={[{ required: true, message: 'Please enter username' }]}
                    >
                        <Input
                            placeholder='Username (only letters and numbers)'
                            clearable
                        />
                    </Form.Item>
                    <Form.Item label='nickname' name='nickname'>
                        <Input
                            placeholder='Nickname (only letters and numbers)'
                            clearable
                        />
                    </Form.Item>
                    {/* TODO：处理表单校验规则 */}
                    <Form.Item
                        label='password'
                        name='password'
                        rules={[
                            { required: true, message: 'Please enter password' },
                            {
                                max: 16,
                                min: 6,
                                message: 'Please enter password 6-16 characters'
                            }
                        ]}
                    >
                        <Input
                            placeholder='Password (6-16 characters,only letter and numbers)'
                            clearable
                        />
                    </Form.Item>
                </Form>
            </div>
            <div className='user-agreede-service mb-4'>
                <Checkbox className='mr-1' />
                <div>
                    By creating an account. you indicate that you have read and agreed to
                    Antdog's Privacy Policy and Terms of Service.
                </div>
            </div>
            <div className=''>
                <Button className='antdog-btn full'>Register</Button>
            </div>
        </>
    )
}
