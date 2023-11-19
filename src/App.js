import { Box } from '@mui/material';
import './App.css';
import AppBar from './components/AppBar'
import {Home,LazyContinents,LazyCountries,LazyCities,LazyCountryDetails, LazyContinentDetails} from './components/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    <Box className='App'>
      <AppBar/>
      <Routes>
        <Route path='/'  element={<Home/>}  /> 
        <Route path='/continents' exact element={<LazyContinents/>}  /> 
        <Route path='/countries' exact element={<LazyCountries/>}  /> 
        <Route path='/cities' exact element={<LazyCities/>}  /> 
        <Route path='/countryDetails' exact element={<LazyCountryDetails/>}  /> 
        <Route path='/continentDetails' exact element={<LazyContinentDetails/>}  /> 
        <Route path='/*' element={<Home/>}  /> 
      </Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
