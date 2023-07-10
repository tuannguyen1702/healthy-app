import React from 'react';
import Graph from '../components/Graph';
import AchievementRate from '../components/AchievementRate';
import styles from '../styles/TopPage.module.css';
import HexagonButton from '../components/HexagonButton';
import FoodCard from '../components/FoodCard';
import Button from '@/shared/components/Button';

const TopPage = () => {
    const buttons = [
        {}
    ];

    const foods = [
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        },
        {
            title: 'Morning',
            imageUrl: '/images/d01.jpg'
        }
    ]
    return <>
        <div className='bg-dark-600 h-312 w-full'>
            <div className='max-w-7xl flex w-full mx-auto'>
                <div className={'flex w-ar'}><AchievementRate /></div>
                <div className='flex-1'><Graph /></div>
            </div>
        </div>
        <div className='max-w-container mx-auto'>
            <div className="my-7 flex justify-center  gap-16">
                <HexagonButton />
                <HexagonButton />
                <HexagonButton />
                <HexagonButton />
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
                {foods.map((item, idx) => {
                    return <FoodCard key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button>記録をもっと見る</Button>
            </div>
        </div>
    </>
};

export default TopPage;