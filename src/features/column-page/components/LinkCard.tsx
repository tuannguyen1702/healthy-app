import React from 'react';
import styles from '../styles/ColumnPage.module.css';
import Link from 'next/link';

export interface LinkCardProps {
    title: string;
    subTitle: string;
    imageUrl?: string;
    link: string;
}

const LinkCard = (props: LinkCardProps) => {
    const { title, imageUrl, subTitle } = props;
    return <Link href="" className={'bg-dark-600 ' + styles['link-card']}>
        <div className={styles['link-card-content']}>
            <div className={`text-center p-3 w-full ${styles['link-card-label']}`}>
                <h2 className='text-primary-300 mb-1 uppercase text-xl font-thin'>{title}</h2>
                <div className={`text-md leading-1 text-light pt-3 mt-2 mx-auto ${styles['sub-title']}`}>{subTitle}</div>
            </div>
        </div>
    </Link>
};

export default LinkCard;