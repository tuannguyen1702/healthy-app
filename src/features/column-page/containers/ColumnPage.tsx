import React from 'react';
import Button from '@/shared/components/Button';
import LinkCard, { LinkCardProps } from '../components/LinkCard';
import FoodCard, { FoodCardProps } from '../components/FoodCard';

const ColumnPage = () => {
    const buttons = [
        {}
    ];

    const links: LinkCardProps[] = [
        {
            title: 'Recommended Column',
            subTitle: 'オススメ',
            link: ''
        },
        {
            title: 'Recommended Diet',
            subTitle: 'ダイエット',
            link: ''
        },
        {
            title: 'Recommended Beauty',
            subTitle: '美容',
            link: ''
        },
        {
            title: 'Recommended Healthy',
            subTitle: '健康',
            link: ''
        },
    ];

    const foods: FoodCardProps[] = [
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        },
        {
            title: '2021.05.17   23:25',
            imageUrl: '/images/d01.jpg',
            description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
            tags: ['魚料理', '和食', 'DHA']
        }
    ]
    return <>
        <div className='max-w-container mx-auto'>
            <div className="grid grid-cols-4 gap-8 mt-12 mb-10">
                {links.map((item, idx) => {
                    return <LinkCard key={idx} {...item} />
                })}
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
                {foods.map((item, idx) => {
                    return <FoodCard key={idx} {...item} />
                })}
            </div>
            <div className='text-center mb-10'>
                <Button>コラムをもっと見る</Button>
            </div>
        </div>
    </>
};

export default ColumnPage;