import { Alert } from '@mui/material';
import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'

const FetchCountriesData =() => {
    const [data,setData] = useState([]);
    const [countries,setCountries] = useState([]);
    const [_cities,setCities] = useState([]);
    const fetchData = async()=>{
        try {
            await  axios.get('https://restcountries.com/v3.1/all')
            .then(response =>{
                setData(response.data)                                             
            })
            
        } catch (error) {
             Alert(error)
        }
             
    }
    

    const CountriesofContinent = async(continent)=>{   
        await  axios.get('https://restcountries.com/v3.1/all')
        .then(response =>{ 
            const contries = response.data.filter(item=>item.continents.toString().toLowerCase().includes(continent.toString().toLowerCase()))
            setCountries(contries)                 
        })
        
    }

   const CitiesofCountry = async(country)=>{
     try {
        await axios.get('https://countriesnow.space/api/v0.1/countries')
        .then(res=>{
           
            const city = res.data.data.filter(item => item.country.toString().toLowerCase().includes(country.toString().toLowerCase()))
            // const cities= city.cities
            setCities(city);
           
        })
     } catch (error) {
        console.log(error)
     }
   }
  
useEffect(()=>{
    fetchData()    
},[])

  return {fetchData, data,_cities,countries,CountriesofContinent,CitiesofCountry}
}

export default FetchCountriesData