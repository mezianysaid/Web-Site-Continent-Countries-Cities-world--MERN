import React from 'react';
import styles from './cities.module.scss';
import { Box, Card, Grid, Typography,TextField, Divider, Button } from '@mui/material';

const Cities = ({_cities,inputHandler,searchCountry}) => (
  <Box className={styles.Cities}>
    <Grid item container lg={8} md={8} xs={10}>
      <Card sx={{padding:3}}> 
        <Box className={styles.search}>     
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={inputHandler}
              // value={searchCountry}
              fullWidth
              label="Search"
              className={styles.searchField}
              placeholder="Enter country's name ...."
            />   
        </Box>
        <Divider sx={{marginTop:3}} />
        <Typography variant='h4' color='GrayText'>All Cities of Country {searchCountry}</Typography>
        <Box sx={{mt:3}}>
        <Grid item container lg={12} md={12} xs={12}>
        {_cities.map(item=>(
          item.cities.map(el=> (
           
              <Grid item lg={3} md={3} xs={6} p={1}>
              <Button variant='outlined' key={el} fullWidth sx={{ml:2,mt:2}}>{el}</Button>
              </Grid>           
          ))
        ))}
         </Grid>
        </Box>
        </Card>
    </Grid>


  </Box>
);

Cities.propTypes = {};

Cities.defaultProps = {};

export default Cities;
