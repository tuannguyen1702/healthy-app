  // Top buttons data
  export const buttons = [
    {
        icon: 'knife',
        title: 'Morning'
    },
    {
        icon: 'knife',
        title: 'Lunch'
    },
    {
        icon: 'knife',
        title: 'Dinner'
    },
    {
        icon: 'cup',
        title: 'Snack'
    }
];

// Data of food card
export const foods = [
    {
        title: '05.21.Morning',
        imageUrl: '/images/m01.jpg'
    },
    {
        title: '05.21.Lunch',
        imageUrl: '/images/m03.jpg'
    },
    {
        title: '05.21.Dinner',
        imageUrl: '/images/d01.jpg'
    },
    {
        title: '05.21.Snack',
        imageUrl: '/images/l01.jpg'
    },
    {
        title: '05.21.Morning',
        imageUrl: '/images/m01.jpg'
    },
    {
        title: '05.21.Lunch',
        imageUrl: '/images/l02.jpg'
    },
    {
        title: '05.21.Dinner',
        imageUrl: '/images/d02.jpg'
    },
    {
        title: '05.21.Snack',
        imageUrl: '/images/s01.jpg'
    },
];



// Data of graph
const CHART_LABELS = [
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
const createChartData = (value: number = 10) => {
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
export const dataGraph = createChartData(10);
