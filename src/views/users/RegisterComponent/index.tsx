import { useState } from 'react'
import useTimeCount from '../../../hooks/useTimeCount'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Toast } from 'antd-mobile'
import { LOGIN_PATH } from '../../../routes/path'
import { RegisterParams, getMailCode, register } from '../../../api/user'

import '../style.scss'

export default function RegisterComponent() {
    const navigate = useNavigate()
    // 验证码默认 120s
    const [tigger, count, tiggering] = useTimeCount(120)
    const [receiver, setReceiver] = useState('')
    const [agreedTerms, setAgreedTerms] = useState(true)

    const sendCode = () => {
        getMailCode({ receiver }).then(res => {
            if (res) {
                tigger()
            }
        })
    }

    const onFinish = (values: RegisterParams) => {
        if (values) {
            register(values).then(request => {
                // 注册成功后，跳转登录
                if (request.code === 0) {
                    Toast.show({
                        icon: 'success',
                        content: request.msg,
                    })
                    navigate(LOGIN_PATH)
                } else {
                    Toast.show({
                        icon: 'fail',
                        content: request.msg,
                    })
                }
            })
        }
    }

    return (
        <>
            <div className='user-title'>
                <p>Hello,Welcome to Antdog</p>
            </div>
            <div className='user-form-card'>
                <Form
                    className='text-align-left'
                    layout='vertical'
                    onFinish={onFinish}
                    footer={
                        <Button
                            type='submit'
                            className='antdog-btn full'
                            disabled={!agreedTerms}
                        >
                            Register
                        </Button>
                    }
                >
                    <Form.Item
                        label='email'
                        name='mail'
                        rules={[{ required: true, message: 'Please enter email address' }]}
                    >
                        <Input
                            placeholder='Please enter email address'
                            clearable
                            onChange={setReceiver}
                        />
                    </Form.Item>
                    <Form.Item
                        label='code'
                        name='verifyCode'
                        rules={[
                            { required: true, message: 'Please enter verification code' }
                        ]}
                        extra={
                            <Button
                                disabled={tiggering}
                                className='send-btn'
                                onClick={sendCode}
                            >
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
                            type='password'
                            placeholder='Password (6-16 characters,only letter and numbers)'
                            clearable
                        />
                    </Form.Item>
                    <div className='user-agreede-service mt-4'>
                        <Checkbox
                            className='mr-2'
                            checked={agreedTerms}
                            onChange={v => setAgreedTerms(v)}
                        />
                        <div>
                            By creating an account. you indicate that you have read and agreed
                            to Antdog's Privacy Policy and Terms of Service.
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}
