import HomeComponent from '../views/HomeComponent'
import OrderComponent from '../views/OrderComponent'
import { OrderDetailComponent } from '../views/OrderComponent/OrderDetailComponent'
import WithdrawComponent from '../views/WithdrawComponent'
import WithdrawDetailsComponent from '../views/WithdrawDetailsComponent'
import DeregisterComponent from '../views/users/DeregisterComponent'
import ForgetComponent from '../views/users/ForgetComponent'
import LoginComponent from '../views/users/LoginComponent'
import RegisterComponent from '../views/users/RegisterComponent'

import {
  CLOSE_ACCOUNT_PATH,
  FORGET_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  ORDER_DETAIL_PATH,
  ORDER_LIST_PATH,
  ORDER_PATH,
  REGISTER_PATH,
  WITHDRAW_DEPOSIT_DETAIL_PATH,
  WITHDRAW_DEPOSIT_PATH
} from './path'

interface RootRoutes {
  name: string
  path: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Ele: (props: any) => JSX.Element
}

const routes: RootRoutes[] = [
  {
    name: '主页',
    path: HOME_PATH,
    Ele: HomeComponent
  },
  {
    name: '登录',
    path: LOGIN_PATH,
    Ele: LoginComponent
  },
  {
    name: '注册',
    path: REGISTER_PATH,
    Ele: RegisterComponent
  },
  {
    name: '忘记密码',
    path: FORGET_PASSWORD_PATH,
    Ele: ForgetComponent
  },
  {
    name: '注销账户',
    path: CLOSE_ACCOUNT_PATH,
    Ele: DeregisterComponent
  },
  {
    name: '礼品卡下单',
    path: ORDER_PATH,
    Ele: OrderComponent
  },
  {
    name: '订单详情',
    path: ORDER_DETAIL_PATH,
    Ele: OrderDetailComponent
  },
  {
    name: '提现下单',
    path: WITHDRAW_DEPOSIT_PATH,
    Ele: WithdrawComponent
  },
  {
    name: '提现详情',
    path: WITHDRAW_DEPOSIT_DETAIL_PATH,
    Ele: WithdrawDetailsComponent
  },
  {
    name: '订单管理',
    path: ORDER_LIST_PATH,
    Ele: HomeComponent
  }
]

export default routes
