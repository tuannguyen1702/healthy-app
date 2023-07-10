import { Children, ReactNode } from "react";

export interface ProcessCircleChartProps {
    percent: number,
    label?: string,
    children?: ReactNode;
}


const ProcessCircleChart = (props: ProcessCircleChartProps) => {
    const { label, percent, children } = props
    return <div className="process-circle-container">
        <label className="process-circle-label p-3 flex justify-center items-center">{children}</label>
        <svg stroke="#fff" viewBox="0 0 36 36">
            <path style={{
                fill: 'none',
                stroke: 'none'
            }} d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84" />
            <path className="process-circle" style={{
                fill: 'none',
                stroke: '#fff'
            }} d="M18 2.08a15.92 15.92 0 0 1 0 31.84 15.92 15.92 0 0 1 0-31.84" strokeDasharray={`${percent || 0}, 100`} />
        </svg>
    </div>
}

export default ProcessCircleChart;