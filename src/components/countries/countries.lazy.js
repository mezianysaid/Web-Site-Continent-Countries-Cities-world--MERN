import React, { lazy, Suspense, useEffect, useState } from 'react';
import FetchCountriesData from '../../Hooks/FetchCountriesData'
import { useNavigate } from 'react-router-dom';
const LazyCountries = lazy(() => import('./countries'));

const Countries = ({continent}) => {
 const [searchCountry,setSearchCountry] =useState(continent?continent:'Africa')
  const {data,countries,CountriesofContinent} = FetchCountriesData()
 const navigation = useNavigate()
//  console.log('con',continent)
useEffect(()=>{

  CountriesofContinent(searchCountry)
   
},[searchCountry])
const handleClickDetaild=(item)=>{
     navigation('/countryDetails',{replace:true,state:{item}})
}
let props={countries,searchCountry,setSearchCountry,handleClickDetaild}
  return(
    <Suspense fallback={null}>
    <LazyCountries props={props}  />
  </Suspense>
  )
}

export default Countries;
