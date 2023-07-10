import React from 'react';
import LineChart from '@/shared/components/LineChart';

const Graph = (props: any) => {
    const { data } = props;
    return <div className='line-chart h-full'>
        <LineChart data={data} />
    </div>
};

export default Graph;