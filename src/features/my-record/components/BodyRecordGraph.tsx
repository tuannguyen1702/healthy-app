import React from 'react';
import Image from "next/image";
import styles from '../styles/MyRecord.module.css';
import LineChart from '@/shared/components/LineChart';

const BodyRecordGraph = () => {
    const CHART_LABELS: LineChartProps['data']['labels'] = [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
    ];
    const createChartData = (value: number = 11): LineChartProps["data"] => {
        return {
            labels: CHART_LABELS,
            datasets:
                [
                    {
                        label: "Data 1",
                        data: CHART_LABELS.map(() => Math.floor(Math.random() * value)),
                        borderColor: "#FFCC21",
                        backgroundColor: "#FFCC21",
                    },
                    {
                        label: "Data 2",
                        data: CHART_LABELS.map(() => Math.floor(Math.random() * value)),
                        borderColor: "#8FE9D0",
                        backgroundColor: "#8FE9D0",
                    },
                ],
        }
    };
    // return <div className='line-chart h-full'>
    //     <LineChart data={createChartData(10)} />
    // </div>
    return <div className={'w-full h-312 bg-dark-500 text-light py-3 px-4'}>
        <div className='flex'>
            <label className='title-break mr-6'>Body Record</label><label className='block-title'>2023.11.11</label>
        </div>
        <div className='line-chart-record h-full'>
            <LineChart data={createChartData(10)} />
        </div>
    </div>
};

export default BodyRecordGraph;