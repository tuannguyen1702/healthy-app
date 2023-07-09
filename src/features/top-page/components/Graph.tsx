import React from 'react';
import Image from "next/image";
import styles from '../styles/TopPage.module.css';

const Graph = () => {
    return <div >
        <Image
            className={styles.graph}
            src="/images/main_graph.png"
            width={1200}
            height={600}
            alt="Graph"
        /></div>
};

export default Graph;