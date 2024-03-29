import React from 'react';
import Api from '../utils/api'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
const Chart = ({url}) => {

    const { data, loading, error } = Api(url);
    if (loading) return <p>Loading Data ...</p>;
    if (error) return <p>Error with the data...</p>;

    return (
        <AreaChart width={800} height={400} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} style={{margin : "auto"}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="reportDate" />
            <YAxis />
            <Tooltip />
            <Area type='monotone' dataKey='confirmed.total' stroke='#6f6024' fill='#ffdd57' />
            <Area type='monotone' dataKey='recovered.total' stroke='#285d3a' fill='#48c774' />
            <Area type='monotone' dataKey='deaths.total' stroke='#f14668' fill='#671c2b' />

        </AreaChart>
    );
};

export default Chart;