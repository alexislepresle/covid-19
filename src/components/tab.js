import React from 'react';
import Api from "../utils/api"
import moment from 'moment'

const Tab = () => {
    const {data, loading, error } = Api('https://covid19.mathdro.id/api/recovered');

    return (
        <>
            {data &&
            <div className="columns is-centered">
                <div className="column is-8">
                <table className="table is-bordered">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Case</th>
                            <th>Died</th>
                            <th>Recover</th>
                            <th>Last update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((country, code) => (
                                <tr key={code}>
                                    <td>{country.provinceState && country.provinceState + ","} {country.countryRegion}</td>
                                    <td>{country.confirmed}</td>
                                    <td>{country.deaths}</td>
                                    <td>{country.recovered}</td>
                                    <td>{moment(country.lastUpdate).format('YYYY/MM/DD HH:mm ')}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
            }
        </>
    );
};

export default Tab;