import React,{useState} from 'react';
import Api from '../utils/api'
import Stats from './stats'
import Chart from './chart'
const Select = () => {
    const {data, loading, error } = Api('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('FRA');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <>
        <div className="columns is-centered">
            <div className="column is-3">
                <div className="select">
                    <select onChange={(e) => {setSelectedCountry(e.target.value)}}>
                        {
                            data && 
                            Object.entries(data.countries).map(([country, code]) =>(
                                <option 
                                key={code} 
                                value={data.iso3[code]}
                                selected={selectedCountry === data.iso3[code]}
                                >
                                    {country}
                                </option>
                            ))      
                        }
                    </select>       
                </div>
            </div>
        </div>

        <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
        </>
    );
};

export default Select;