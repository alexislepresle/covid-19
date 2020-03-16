import React from 'react';
import Api from '../utils/api'
import BlockStat from "./blockStat"
import moment from 'moment'

const Stats = ({url}) => {
    const {data, loading, error } = Api(url);
    if (loading) return <p>Loading Data ...</p>;
    if (error) return <p>Error with the data...</p>;


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>

            {
            data&&
                <>
                    <p className="has-text-centered">Last updated: {moment(data.lastUpdate).format('YYYY/MM/DD HH:mm ')} </p>
                    <div className="columns">
                        <BlockStat data={numberWithCommas(data.confirmed.value)} subtitle="Confirmed" color="has-text-warning" />
                        <BlockStat data={numberWithCommas(data.recovered.value)} subtitle="Recovered" color="has-text-success" />
                        <BlockStat data={numberWithCommas(data.deaths.value)} subtitle="Deaths" color="has-text-danger" />
                    </div>
                </>
            }
        </>
    );
};

export default Stats;