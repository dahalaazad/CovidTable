import React from 'react';
import './Table.css';

function Table({countries}) {
    console.log(countries);
    return (
        <div className = 'table'>
          <table>
            <thead>
                <tr className = 'header'>
                    <th>Rank</th>
                    <th>Country</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovery</th>
                    <th>Today Cases</th>
                </tr>
                  </thead>
                  <tbody>
                  {countries.map((country,index) =>(
                      
                      //{console.log(country);}
                      <tr key = {index}>
                          <td> {index+1} </td>
                          <td><img key={country.country} src = {`${country.countryInfo.flag}`}  height={30} width = {40} alt="nepal-flag"/> {country.country}
                          </td>
                          <td> {country.cases} </td>
                          <td> {country.deaths} </td>
                          <td> {country.recovered} </td>
                          <td> {country.todayCases} </td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>  
        </div>
    );
}

export default Table;