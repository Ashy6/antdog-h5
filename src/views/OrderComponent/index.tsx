import React, { useState, useEffect } from 'react';
import { Avatar, Image, Divider, } from 'antd-mobile';
import messageIcon from '../../assets/png/message.png';
import { AntOutline, SoundOutline } from 'antd-mobile-icons'

import { getCardList } from '../../api/card';
import "./order.scss";

export default function OrderComponent(props: { data: any }) {

    const whatappUrl = 'http://baidu.com';

    const avatar = 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
    const points = 1000;
    const rate = 784.71;

    useEffect(() => {
        getCardList().then(response => {
            // TODO: props 传进来后，删除接口调用 
        });
    }, [])

    return <div className='order pl-12 pr-12'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <div>
                    <Avatar src={avatar} />
                    <div style={{ textAlign: 'center' }}>Youka</div>
                </div>
                <div className='text-align-left' style={{ marginLeft: '16rem' }}>
                    <div>Group:Game Card</div>
                    <div style={{ fontWeight: 'bold', color: '#fa8c16' }}>Deposit {points} Points</div>
                </div>
            </div>
            <div onClick={() => window.open(whatappUrl)}>
                <Image src={messageIcon} height='56rem' width='80rem' />
            </div>
        </div>
        <Divider />
        <div className='pl-8 pr-8'>
            <div className='d-flex' style={{ fontWeight: 'bold', paddingBottom: '4rem' }}>
                <div style={{ color: '#2f54eb', marginRight: '8rem' }}><SoundOutline style={{ marginRight: '2rem' }} /><span style={{ fontSize: '13rem' }}>Notice</span></div>
                <div style={{ color: '#fa8c16' }}>1 Point{rate}NGN(Current quotes)</div>
            </div>
            <div className='text-align-left'>1. Your card price auto calculate by below forms.don't waste time ask "how much?</div>
            <div className='text-align-left'>2. Click "Send More Cards" to paste all cards once.only form can lock price</div>
            <div className='text-align-left'>3. Chat use for interactive.Submit this form is onl way to trade.Your card redeem byAntdog intelligent machine.</div>
        </div>
        <Divider />
    </div>
}