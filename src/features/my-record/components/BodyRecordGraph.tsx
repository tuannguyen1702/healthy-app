import React from 'react';
import LineChart from '@/shared/components/LineChart';

const BodyRecordGraph = (props: any) => {
    const { data } = props;
    return <div className={'w-full h-312 bg-dark-500 text-light py-3 px-4'}>
        <div className='flex'>
            <label className='title-break mr-6'>Body Record</label><label className='block-title'>2023.11.11</label>
        </div>
        <div className='line-chart-record h-full'>
            <LineChart data={data} />
        </div>
    </div>
};

export default BodyRecordGraph;