import React, { useState } from 'react';
import Graph from '../components/Graph';
import AchievementRate from '../components/AchievementRate';
import styles from '../styles/TopPage.module.css';
import HexagonButton from '../components/HexagonButton';
import FoodCard from '../components/FoodCard';
import Button from '@/shared/components/Button';
import { buttons, dataGraph, foods } from '../store'

const TopPage = () => {

    const [foodData, setFoodDate] = useState(foods);

    const loadMore = () => {
        setFoodDate((prevData) => {
            return [...prevData, ...foods];
        })
    }

    return <>
        <div className='bg-dark-600  md:h-312 w-full'>
            <div className='max-w-7xl flex flex-wrap w-full mx-auto'>
                <div className={'flex w-full md:w-[45%]'}><AchievementRate /></div>
                <div className='flex-1 w-full md:w-[55%]'><Graph data={dataGraph} /></div>
            </div>
        </div>
        <div className='max-w-container mx-auto'>
            <div className="my-7 flex  flex-wrap justify-center gap-16">
                {
                    buttons.map((item, idx) => {
                        return <HexagonButton key={idx} {...item} />;
                    })
                }
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {foodData.map((item, idx) => {
                    return <FoodCard key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button onClick={loadMore}>記録をもっと見る</Button>
            </div>
        </div>
    </>
};

export default TopPage;