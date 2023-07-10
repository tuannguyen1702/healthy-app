import React from 'react';
import { getShortDate, getTime } from '@/shared/utils/formatDate';

export interface MyDiaryProps {
    date: Date;
    content: string;
}

const FoodCard = (props: MyDiaryProps) => {
    const { date, content } = props;
    return <div className='square-card border-2 border-gray-400'>
        <div className='square-card-content py-3 px-4'>
            <h2 className='text-lg font-thin leading-5'>{getShortDate(date)} <br />
                {getTime(date)}
            </h2>
            <p className='text-xs mt-3 leading-4' dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    </div>
};

export default FoodCard;