import React from 'react';
import styles from '../styles/ColumnPage.module.css';

export interface FoodCardProps {
    title: string;
    imageUrl: string;
    description: string;
    tags?: string[]
}

const FoodCard = (props: FoodCardProps) => {
    const { title, description, imageUrl, tags } = props;
    return <div className='mb-2'>
        <div className={styles['food-card']}>
            <div className={'bg-gray-100 ' + styles['food-card-content']} style={{ backgroundImage: `url(${imageUrl})` }}>
                <label className={'bg-primary-300 text-light pl-3 pr-6 ' + styles['food-card-label']}>{title}</label>
            </div>
        </div>
        <div className='mt-2 line-clamp-2'>{description}</div>
        <div className='mt-1'>{
            tags?.map((item, idx) => {
               return <label className='mr-2 text-sm text-primary-400' key={idx}>#{item}</label>
            })
        }</div>
    </div>
};

export default FoodCard;