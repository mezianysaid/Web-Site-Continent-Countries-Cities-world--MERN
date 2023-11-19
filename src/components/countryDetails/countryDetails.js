import React from 'react';

import styles from './countryDetails.module.scss';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

const CountryDetails = ({item}) => {

  return (
  <Box className={styles.CountryDetails}>
     
      <Grid container lg={8} md={8} xs={10} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >                                         
      <Card sx={{width:'100%'}}>
          
      <CardContent >
      <CardHeader title={item.name.common} subheader={item.continents} /> 
           <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}> 
            <img alt={item.name.common} src={item.flags.png} height={200} width="80%" style={{borderRadius:20}} />
            </Box>
            <Card sx={{marginTop:6}}>
                <Box sx={{display:'flex'}}>
                <Typography variant='h5' color="#012a4a">Name:</Typography>
                <Typography variant='h5' color='GrayText' ml={3}>{item.name.official}</Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                <Typography variant='h5' color="#012a4a">Continent:</Typography>
                <Typography variant='h5' color='GrayText' ml={3}>{item.continents}</Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                <Typography variant='h5' color="#012a4a">Capital:</Typography>
                <Typography variant='h5' color='GrayText' ml={3}>{item.capital}</Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                <Typography variant='h5' color="#012a4a">Population:</Typography>
                <Typography variant='h5' color='GrayText' ml={3}>{item.population}</Typography>
                </Box>                              
              </Card>
           
            <Typography variant='h7' color="#012a4a">Coet of Arms :</Typography>                             

              <Card> 
                      <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}> 
                     
                      <img alt={item.coatOfArms.png} src={item.coatOfArms.png} height={200} width="70%" />
                      </Box>
                    
                      <Box sx={{display:'flex'}}>
                          <Typography variant='h5' color="#012a4a">subregion: </Typography>
                          <Typography variant='h5' color='GrayText' ml={3} >  {item.subregion}</Typography>
                      </Box>  

                      <Box sx={{display:'flex'}}>
                          <Typography variant='h5' color="#012a4a">Maps: </Typography>
                          <Typography variant='h5' ml={3} component='a' href={item.maps.googleMaps} >  {item.maps.googleMaps}</Typography>
                      </Box>  
                        </Card>
                         
        </CardContent>
        </Card>

        </Grid>
  </Box>
)};

CountryDetails.propTypes = {};

CountryDetails.defaultProps = {};

export default CountryDetails;
