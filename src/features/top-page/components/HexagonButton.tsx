import React from 'react';
import styles from '../styles/TopPage.module.css';
import Icon from '@/shared/components/Icons';

export interface HexagonButtonProps {
    icon: string;
    title: string;
}

const HexagonButton = (props: HexagonButtonProps) => {
    const { icon, title } = props;
    return <div className={'mx-3 w-1/2 md:w-1/4 text-center flex justify-center items-center text-light ' + styles['hexagon-button']}>
        <div>
            <Icon name={icon} />
            <label>{title}</label>
        </div>
    </div>
};

export default HexagonButton;