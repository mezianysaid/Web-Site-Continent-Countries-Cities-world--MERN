import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
const LazyCountryDetails = lazy(() => import('./countryDetails'));

const CountryDetails = () => {
 
  const location = useLocation()
  const data=location.state.item 
  const props ={data}
  const item  = props.data
  // console.log(item)
  return(
<Suspense fallback={null}>
    <LazyCountryDetails item={item} />
  </Suspense>
  )
}

export default CountryDetails;
