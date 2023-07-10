import React, { useEffect, useState } from 'react';
import LineChart, { LineChartProps } from '@/shared/components/LineChart';


const Graph = () => {
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
    const createChartData = (value: number = 10): LineChartProps["data"] => {
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
    return <div className='line-chart h-full'>
        <LineChart data={createChartData(10)} />
    </div>
};

export default Graph;