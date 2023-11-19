import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const LazyContinents = lazy(() => import('./continents'));

const Continents = () => {
  const navigation = useNavigate()
  
  const navigateTo =(item)=>{
    navigation('/continentDetails',{replace:true,state:{item}})
  }
let props={navigateTo}
  return(
<Suspense fallback={null}>
    <LazyContinents props={props} />
  </Suspense>

  )
}

export default Continents;
