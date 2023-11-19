import React from 'react';
import PropTypes from 'prop-types';
import styles from './continentDetails.module.scss';
import { Box, Card, CardContent, CardHeader, Grid, Typography,Divider } from '@mui/material';
import {LazyCountries} from '../index'

const ContinentDetails = ({item}) => (
  <Box className={styles.ContinentDetails}>     
     <Grid item container lg={10} md={10} xs={10} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >                                         
     <Card sx={{width:'100%'}}>
     <CardHeader title={item.name}  /> 
         
     <CardContent >
         <Grid  container >
          <Grid item lg={6} md={6} xs={12}>
          <Divider/>
          {item.facts?(
                    <Box sx={{marginTop:6}}>
                    <Typography variant='h4'>Some Facts about {item.name}:</Typography>
                    <Typography>{item.facts}</Typography>
                    <Divider/>
                    </Box>
                    
          ):(<></>)}
         
         {item.Area?(
          <Box>
          <Typography variant='h4'>Area:</Typography>
             <Typography>{item.Area}</Typography>
             <Divider/>
          </Box>
        
          ):(<></>)}
          {item.numberCountries?(
          <Box>
          <Typography variant='h4'>How many countries are there in {item.name} ?</Typography>
             <Typography>{item.numberCountries}</Typography>
             <Divider/>

          </Box>

          ):(<></>)}

          {item.numberCountries?(
          <Box>
          <Typography variant='h4'>Population:</Typography>
             <Typography>{item.population}</Typography>
             <Divider/>
          </Box>

             ):(<></>)}
          </Grid>
          <Grid item lg={6} md={6} xs={12} pl={2}>
                   <Card> 
                     <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>                     
                     <img alt={item.map} src={item.map} height={400} width="100%" />                    
                     </Box>                                       
                    </Card>
                        
          </Grid>
         </Grid>                                                       
       </CardContent>
       </Card>
       <LazyCountries continent={item.name}/>
       </Grid>
       
  </Box>
);

ContinentDetails.propTypes = {};

ContinentDetails.defaultProps = {};

export default ContinentDetails;
