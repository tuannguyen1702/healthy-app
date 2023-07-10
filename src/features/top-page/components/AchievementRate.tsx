import React from 'react';
import styles from '../styles/TopPage.module.css';
import ProcessCircleChart from '@/shared/components/ProcessCircleChart';

export interface AchievementRateProps {
    imageUrl: string;
    date: Date;
    percent: number;
}

const AchievementRate = () => {
    return <div className={'flex justify-center items-center w-full h-312 ' + styles['ar-bg']}>
        <div className='w-[35%] '>
            <ProcessCircleChart {...{ percent: 75, label: '' }} >
                <label className='text-light'>05/21 <span className='text-xl'>75%</span></label>
            </ProcessCircleChart>
        </div>
    </div>
};

export default AchievementRate;