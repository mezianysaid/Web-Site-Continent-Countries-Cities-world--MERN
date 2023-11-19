import React,{useState} from 'react';
import styles from './countries.module.scss';
import { Box, Button, Card, CardContent, Grid, Typography ,TextField} from '@mui/material';
import lake_victoria from '../../assets/Lake-Victoria.jpg'
const Countries = ({props}) => {
  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  const filteredData = props.countries.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.common.toLowerCase().includes(inputText)
    }
})
  
  
  return(
  <Box className={styles.Countries}>
     <Box sx={{height:300}}>
      <img alt='africa' src={lake_victoria} width="100%" height="100%" /> 
     </Box>

     <Box className={styles.search}>     
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={inputHandler}
          fullWidth
          label="Search"
          className={styles.searchField}
          placeholder="enter country's name ...."
        />   
     </Box>
     <Box className={styles.container} >
      <Typography variant='h3'>Countries of {props.searchCountry}</Typography>
      <Typography variant='h5' ml={1}>{props.searchCountry} Regions</Typography>
      <Typography variant='h9' ml={5} color='GrayText'>Conventionally there are five main geographical regions or subregions in Africa.</Typography>
      <Box className={styles.regions} >
        <Button variant='outlined'>North {props.searchCountry}</Button>
        <Button variant='outlined'>West {props.searchCountry}</Button>
        <Button variant='outlined'>Central {props.searchCountry}</Button>
        <Button variant='outlined'>Easth {props.searchCountry}</Button>
        <Button variant='outlined'>Southern {props.searchCountry}</Button>
      </Box>
      <Box mt={5}>
      {/* <Typography variant='h5' ml={1} >Some Facts about Africa</Typography>
      <Typography ml={5} variant='h9' color='GrayText'>Africa is the second-largest continent in the world in both area and population. It is an almost entirely isolated landmass with only a small land bridge in the northeast, connecting the African Mainland with Western Asia.</Typography> */}
      </Box>

      <Box className={styles.country}>
          <Grid container item lg={12} md={12} xs={12}>
            {filteredData?filteredData.map((item)=>(
            <Grid item key={item.name.common} lg={3} md={3} xs={6}>
              <Card sx={{margin:4}} onClick={()=>props.handleClickDetaild(item)}>
                <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <Typography variant='h5'>{item.name.common}</Typography>
                </Box>
              <img alt={item.name.common} src={item.flags.png} height={70} width="100%" />
              <CardContent sx={{display:'block'}}>
                <Box >
                <Typography variant='h7' color='GrayText'>Capital:   {item.capital}</Typography>
                </Box>
                <Box>
                <Typography variant='h7' color='GrayText'>Population:   {item.population}</Typography>
                </Box>
                <Box>
                <Typography variant='h7' color='GrayText'>Region:   {item.subregion}</Typography>
                </Box>
               
              </CardContent>
              </Card>

            </Grid>
            )):(<></>)}
          </Grid>
      </Box>

     </Box>
  </Box>
  )
};

Countries.propTypes = {};

Countries.defaultProps = {};

export default Countries;
