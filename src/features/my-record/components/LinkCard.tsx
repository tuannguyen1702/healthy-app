import React from 'react';
import styles from '../styles/MyRecord.module.css';
import Link from 'next/link';

export interface LinkCardProps {
    title: string;
    subTitle: string;
    imageUrl: string;
    link: string;
}

const LinkCard = (props: LinkCardProps) => {
    const { title, imageUrl, subTitle } = props;
    return <Link href="" className={'bg-primary-300 ' + styles['link-card']}>
        <div className={styles['link-card-content']}>
            <div className={styles['link-card-content-mask']} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className={'text-center w-full ' + styles['link-card-label']}>
                <h2 className='text-primary-300 mb-1 uppercase text-2xl font-thin'>{title}</h2>
                <div className={'bg-primary-400 text-xs text-light py-1 w-[65%] mx-auto'}>{subTitle}</div>
            </div>
        </div>
    </Link>
};

export default LinkCard;