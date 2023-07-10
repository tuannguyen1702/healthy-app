import React from 'react';
import Image from "next/image";
import styles from '../styles/MyRecord.module.css';

const BodyRecordGraph = () => {
    return <div className={'w-full h-312 bg-dark-500 text-light py-3 px-4'}>
        <div className='flex'>
            <label className='title-break mr-6'>Body Record</label><label className='block-title'>2023.11.11</label>
        </div>
        <Image
            className={styles.graph}
            src="/images/main_graph.png"
            width={1200}
            height={600}
            alt="Graph"
        />
    </div>
};

export default BodyRecordGraph;