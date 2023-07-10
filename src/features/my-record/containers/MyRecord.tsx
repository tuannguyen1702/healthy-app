import React from 'react';
import BodyRecordGraph from '../components/BodyRecordGraph';
import Button from '@/shared/components/Button';
import LinkCard, { LinkCardProps } from '../components/LinkCard';
import MyExercise from '../components/MyExercise';
import MyDiary, { MyDiaryProps } from '../components/MyDiary';

const MyRecord = () => {
    const buttons = [
        {}
    ];

    const foods: LinkCardProps[] = [
        {
            title: 'Body Record',
            subTitle: '自分のカラダの記録',
            imageUrl: '/images/MyRecommend-1.jpg',
            link: ''
        },
        {
            title: 'My Exercise',
            subTitle: '自分の運動の記録',
            imageUrl: '/images/MyRecommend-2.jpg',
            link: ''
        },
        {
            title: 'My Diary',
            subTitle: '自分の日記',
            imageUrl: '/images/MyRecommend-3.jpg',
            link: ''
        }
    ];

    const myDiary: MyDiaryProps[] = [
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        },
        {
            date: new Date(),
            content: `私の日記の記録が一部表示されます。<br/>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
        }
    ]
    return <>
        <div className='max-w-container mx-auto'>
            <div className="grid grid-cols-3 gap-10 mt-12 mb-10">
                {foods.map((item, idx) => {
                    return <LinkCard key={idx} {...item} />
                })}
            </div>
            <div className="bg-dark-500 mb-10">
                <BodyRecordGraph />
            </div>
            <div className="bg-dark-500 mb-10">
                <MyExercise />
            </div>
            <h2 className='block-title'>My Diary</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
                {myDiary.map((item, idx) => {
                    return <MyDiary key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button>自分の日記をもっと見る</Button>
            </div>
        </div>
    </>
};

export default MyRecord;