import React from 'react';
import Api from '../utils/api'
import BlockStat from "./blockStat"
const Stats = ({url}) => {
    const {data, loading, error } = Api(url);
    if (loading) return <p>Loading data ...</p>;
    if (error) return <p>No Data Available Today ...</p>;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            {
            data&&
                <div className="columns">
                    <BlockStat data={numberWithCommas(data.confirmed.value)} subtitle="Confirmed" color="has-text-warning" />
                    <BlockStat data={numberWithCommas(data.recovered.value)} subtitle="Recovered" color="has-text-success" />
                    <BlockStat data={numberWithCommas(data.deaths.value)} subtitle="Deaths" color="has-text-danger" />
                </div>
            }
        </>
    );
};

export default Stats;