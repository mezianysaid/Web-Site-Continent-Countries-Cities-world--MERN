import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const LazyContinentDetails = lazy(() => import('./continentDetails'));

const ContinentDetails = () => {

  const location = useLocation()
  const data=location.state.item 
  const props ={data}
  const item  = props.data
  // console.log(item)

  return(
    <Suspense fallback={null}>
    <LazyContinentDetails item={item} />
  </Suspense>

  )
}


export default ContinentDetails;
