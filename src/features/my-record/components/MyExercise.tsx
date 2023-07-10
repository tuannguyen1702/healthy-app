import React from 'react';
import styles from '../styles/MyRecord.module.css';

export interface ExerciseData {
    task: string;
    kcalNumber: number;
    minutes: number;
}

export interface MyExerciseProps {
    data: ExerciseData[]
}

const MyExercise = (props: MyExerciseProps) => {
    const { data } = props;
    return <div className={'w-full h-312 bg-dark-500 text-light py-3 px-4'}>
        <div className='flex'>
            <label className='title-break mr-6'>My Exercise</label><label className='block-title'>2023.11.11</label>
        </div>
        <ul className={'grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm font-thin list-disc list-inside custom-scroll pr-4 ' + styles['exercise-list']}>
            {
                data.map((item, idx) => {
                    return <li key={idx} className="pt-2 pb-1 border-b border-gray-500 flex">
                        <div className='flex-1'>
                            {item.task}<br />
                            <span className='px-4 text-primary-300'>{item.kcalNumber}kcal</span>
                        </div>
                        <div className='text-primary-300 text-lg'>
                            {item.minutes} min
                        </div>
                    </li>;
                })
            }
        </ul>
    </div>
};

export default MyExercise;