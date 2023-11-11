import { useReactive } from "ahooks";
import { Button, Form, Input } from "antd-mobile";
import UserComponent from "../../components/UserComponent";

import './style.scss'

// TODO：组件样式待调整
export default function WithdrawComponent() {
    const formList = useReactive(FormItem)

    return (
        <div className="withdraw-container full-container">
            <UserComponent />
            <p>The withdrawal amount will be credited within 5-120 minutes</p>

            <Form requiredMarkStyle='asterisk'>
                {formList.map((form) => (
                    <Form.Item key={form.key} name={form.key} label={form.label} rules={form.rules}>
                        <Input placeholder={form.placeholder} />
                    </Form.Item>
                ))}

            </Form>
            <p>If you have problems withdrawing your points. please contact the platfrom's custormer service support.</p>


            <div className='withdraw'>
                <Button className='antdog-btn withdraw-btn'>Withdraw</Button>
            </div>
        </div>
    )
}

export const FormItem = [
    {
        label: 'Points',
        key: 'points',
        placeholder: 'Please enter the points you want to withdraw',
        rules: [{ required: true }],
    },
    {
        label: 'NGN',
        key: 'ngn',
        placeholder: 'Please will be converted based on real-time prices',
        rules: [],
        explain: '1 Point = 784.71 NGN (Current quotes)',
    },
    {
        label: 'Bank',
        key: 'bank',
        placeholder: 'Please enter your bank',
        rules: [{ required: true }],
    },
    {
        label: 'Bank Account Number',
        key: 'account',
        placeholder: 'Please enter your bank account number',
        rules: [{ required: true }],
    },
    {
        label: 'Name',
        key: 'name',
        placeholder: 'Please enter your name',
        rules: [{ required: true }],
    },
]