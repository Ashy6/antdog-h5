/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from 'react';
import { Dropdown, DropdownRef } from 'antd-mobile'
import { DataType } from '../../types/utils';
import { TitltDropDown } from './static';
import './style.scss'

export default (): JSX.Element => {
    const dropdownRef = useRef<DropdownRef>(null)
    const [listType, setListType] = useState(DataType.cards);


    const onDropdownClick = (key: DataType) => {
        setListType(key)
        dropdownRef.current?.close()
    }
    return <>
        <Dropdown ref={dropdownRef}>
            <Dropdown.Item key='sorter' title={TitltDropDown.find(it => it.key === listType)?.label}>
                <div style={{ padding: 12 }}>
                    {
                        TitltDropDown.map(({ label, key }) => (
                            <div key={key} onClick={() => onDropdownClick(key)}>{label}</div>
                        ))
                    }
                </div>
            </Dropdown.Item>
        </Dropdown>
    </>
}
