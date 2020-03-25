import React,{useState} from 'react';
import Api from '../utils/api'
import Stats from './stats'
const Select = () => {
    const {data, loading, error } = Api('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('FRA');
    if (loading) return <p>Loading Data...</p>;
    if (error) return <p>Error with the data...</p>;
    return (
        <>
        <div className="columns is-centered">
            <div className="column is-3">
                <div className="select">
                    <select onChange={(e) => {setSelectedCountry(e.target.value)}}>
                        {
                            data && 
                            data.countries.map((country, i) =>(
                                console.log(country),
                                <option 
                                key={i} 
                                value={country.iso3}
                                selected={selectedCountry === country.iso3}
                                >
                                    {country.name}
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