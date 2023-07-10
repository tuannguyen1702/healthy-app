import React, { useState } from 'react';
import BodyRecordGraph from '../components/BodyRecordGraph';
import Button from '@/shared/components/Button';
import LinkCard, { LinkCardProps } from '../components/LinkCard';
import MyExercise from '../components/MyExercise';
import MyDiary, { MyDiaryProps } from '../components/MyDiary';
import { dataGraph, buttons, myDiary, myExercise } from '../store'

const MyRecord = () => {

    const [myDiaryData, setMyDiaryData] = useState(myDiary);

    const loadMore = () => {
        setMyDiaryData((prevData) => {
            return [...prevData, ...myDiary];
        })
    }

    return <>
        <div className='max-w-container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 mb-10">
                {buttons.map((item, idx) => {
                    return <LinkCard key={idx} {...item} />
                })}
            </div>
            <div className="bg-dark-500 mb-10">
                <BodyRecordGraph data={dataGraph} />
            </div>
            <div className="bg-dark-500 mb-10">
                <MyExercise data={myExercise} />
            </div>
            <h2 className='block-title'>My Diary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {myDiaryData.map((item, idx) => {
                    return <MyDiary key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button onClick={loadMore}>自分の日記をもっと見る</Button>
            </div>
        </div>
    </>
};

export default MyRecord;