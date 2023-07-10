import React, { useState } from 'react';
import Button from '@/shared/components/Button';
import LinkCard from '../components/LinkCard';
import FoodCard from '../components/FoodCard';
import { links, foods } from '../store'

const ColumnPage = () => {
    const [foodsData, setFoodsData] = useState(foods);

    const loadMore = () => {
        setFoodsData((prevData) => {
            return [...prevData, ...foods];
        })
    }
    return <>
        <div className='max-w-container mx-auto'>
            <div className="grid grid-cols-4 gap-8 mt-12 mb-10">
                {links.map((item, idx) => {
                    return <LinkCard key={idx} {...item} />
                })}
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
                {foodsData.map((item, idx) => {
                    return <FoodCard key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button onClick={loadMore}>コラムをもっと見る</Button>
            </div>
        </div>
    </>
};

export default ColumnPage;