import { ChartProps, Line } from "react-chartjs-2";
import { Chart, CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";

export interface LineChartProps extends Omit<ChartProps<'line'>, 'type'> { }

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

Chart.defaults.color = "#fff";

export const defaultOptions = {
    responsive: true,
    plugins: {
        legend: { display: false },
        title: { display: false },
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            border: {
                display: false,
            },
            grid: {
                display: true,
                color: "#777777",
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
        },

        y: {
            border: {
                display: false,
            },
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
        },
    },
};

const  LineChart = (props: LineChartProps) => {
    const { options = defaultOptions, data } = props
    return <Line options={options} data={data} />
}

export default LineChart;