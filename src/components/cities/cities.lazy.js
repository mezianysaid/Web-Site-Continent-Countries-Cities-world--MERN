import React, { lazy, Suspense,useState ,useEffect} from 'react';
import FetchCountriesData from  '../../Hooks/FetchCountriesData'
import { useNavigate } from 'react-router-dom';
const LazyCities = lazy(() => import('./cities'));

const Cities = () => {
  const [searchCountry,setSearchCountry] =useState('morocco')
  const {_cities,CitiesofCountry} = FetchCountriesData()
 const navigation = useNavigate()

    const  inputHandler = (e) => {
      e.preventDefault();
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearchCountry(lowerCase);
  };
    
useEffect(()=>{

  CitiesofCountry(searchCountry)
   
},[searchCountry])
  return(
  <Suspense fallback={null}>
    <LazyCities _cities={_cities}  inputHandler={inputHandler} searchCountry={searchCountry} />
  </Suspense>
)};

export default Cities;
