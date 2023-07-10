import React from 'react';
import styles from '../styles/TopPage.module.css';

export interface FoodCardProps {
    title: string;
    imageUrl: string;
}

const FoodCard = (props:FoodCardProps) => {
    const { title, imageUrl } = props;
    return <div className={styles['food-card']}>
        <div className={'bg-gray-100 ' + styles['food-card-content']} style={{backgroundImage: `url(${imageUrl})`}}>
            <label className={'bg-primary-300 text-light py-1 pl-3 pr-6 ' + styles['food-card-label']}>{title}</label>
        </div>
    </div>
};

export default FoodCard;