import React, { FC, useEffect } from 'react';
import { Chart as Piechart } from 'react-google-charts';
import Loading from '../../../../loaders/loading/Loading';

interface IChart {
    data: string[];
}

const Chart: FC<IChart> = ({ data }) => {
    const preprocess = (data: string[]): (string | number)[][] => {
        // count unique values
        const unique = data.filter((v, i, a) => a.indexOf(v) === i);
        const counts = unique.map(v => data.filter(x => x === v).length);
        // chart data [ [unique], [counts]]
        const chartdata = unique.map((v, i) => [v, counts[i]]);
        chartdata.unshift(['Type', 'Count']);
        console.debug(chartdata);
        return chartdata;
    };
    // let chartdata = preprocess(data);
    // console.debug(chartdata);
    // useEffect(() => {
    //     chartdata = preprocess(data);
    //     console.debug(chartdata);
    // }
    // , [data]);
    return (
        <Piechart
            chartType='PieChart'
            data={preprocess(data)}
            width={'100%'}
            height={'400px'}
            loader={<Loading />}
            options={{
                title: 'Video Classification Results',
            }}
        />
    );
};

export default Chart;
