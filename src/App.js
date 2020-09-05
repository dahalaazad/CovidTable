import React, { useState, useEffect } from 'react';
import './App.css';
//import {sortData} from './util';
import {FormControl, MenuItem,Select } from "@material-ui/core";
import Table from "./Table/Table";

function App() {

  //const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
 
  const [sortValue, setSortValue] = useState('country');
  const URL = 'https://disease.sh/v3/covid-19/countries';
  const metric = ['country','cases', 'deaths','recovered', 'todayCases'];
  
  useEffect(() =>{
    const getCountriesData = async() =>{
      await fetch(URL)
       .then((response) => response.json())
       .then((data) => {
        //  const countries = data.map(
        //    (country,index) => (
        //      {
        //        name:country.country,
        //        totalcases: country.cases,
        //        totaldeaths: country.deaths,
        //        totalrecovery: country.recovered,
        //        todaycases: country.todayCases
        //      }
        //    )
        //  );
        const sortedData = sortData(data,sortValue);
          setTableData(sortedData);
        
         
         console.log(data);
         //setCountries(countries);
       })
    };
    getCountriesData();
  },[sortValue]);

  const onPassChange = (e) => {
    //console.log(passerValue);
    setSortValue(e.target.value);
  };

  const sortData = ((data,i) => {
    let sortedData = [...data];
    //let value = [...sortValue];
    //let metric = [...metric];
    console.log(sortValue);
    if (sortValue === 'country'){
      return sortedData.sort((a,b) =>
        (a[sortValue]<b[sortValue]) ? -1 :  1);
    }
    else {
      return sortedData.sort((a,b) =>
        (a[sortValue]>b[sortValue]) ? -1 :  1);
    }
                         
});
//console.log(sortValue);


  
  //console.log(metric);

  //console.log(tableData);
  //console.log(countries);
  return (
    <div className="App">
      Sort bY:
      <FormControl>
        <Select variant = 'outlined'
                onChange = {onPassChange} >
          {/* {console.log(metric)} */}
          {metric.map((passerValue,i) => (
            <MenuItem value = {passerValue}  >
              {passerValue} 
            </MenuItem>
                     
          ))}
          { /*console.log(sortValue)*/}
{/* 
          <MenuItem value = {'country'}
                    onChange = {onMetricChange('country')} >Country</MenuItem>
          <MenuItem value = 'cases'
                    onChange = {onMetricChange('cases')} >Total Cases</MenuItem>
          <MenuItem value = 'deaths'
                    onChange = {onMetricChange('deaths')} >Total Deaths</MenuItem>
          <MenuItem value = 'recovered'
                    onChange = {onMetricChange('recovered')} >Total Recovered</MenuItem>
          <MenuItem value = 'todayCases'
                    onChange = {onMetricChange('todayCases')} >Today Cases</MenuItem> */}
        </Select>
      </FormControl>
      <Table countries = {tableData} />
    </div>
  );
}

export default App;
