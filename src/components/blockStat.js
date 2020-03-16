import React from 'react';

const BlockStat = ({data, subtitle, color}) => {
    return (
        <div className="column has-text-centered">
            <div className="box has-text-weight-bold">
                <p className={`is-size-4 ${color}`}>{data}</p>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default BlockStat;