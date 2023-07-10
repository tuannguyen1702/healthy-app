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

export const buttons = [
    {
        title: 'Body Record',
        subTitle: '自分のカラダの記録',
        imageUrl: '/images/MyRecommend-1.jpg',
        link: ''
    },
    {
        title: 'My Exercise',
        subTitle: '自分の運動の記録',
        imageUrl: '/images/MyRecommend-2.jpg',
        link: ''
    },
    {
        title: 'My Diary',
        subTitle: '自分の日記',
        imageUrl: '/images/MyRecommend-3.jpg',
        link: ''
    }
];

export  const myDiary = [
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    },
    {
        date: new Date(),
        content: `私の日記の記録が一部表示されます。<br/>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`
    }
]

export  const myExercise = [
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    },
    {
        task: '家事全般（立位・軽い',
        kcalNumber: 26,
        minutes: 10
    }
]
