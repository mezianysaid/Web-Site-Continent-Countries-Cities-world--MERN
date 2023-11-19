import React from 'react';
import styles from './continents.module.scss';
import { Box, Grid,Card,CardContent,Typography } from '@mui/material';
import continentImage from '../../assets/continents_map.jpg'
import cont from '../../assets/cont1.jpg'
import {continents} from '../index'
const Continents = ({props}) => (

  <Box className={styles.Continents}>

   <Box className={styles.headerWrapper}>
       <img alt='continents of world' src={continentImage} width="90%" height="90%" />         
   </Box>

   <Box className={styles.container}>
    <Grid container item lg={10} md={10} xs={10} sx={{display:'flex', justifyContent:'space-between'}}>
      {continents?continents.map((item)=>(
          <Grid item lg={3} md={3} xs={10} m={1}>
               <Card className={styles.card} onClick={()=>props.navigateTo(item)}>
                    <img src={item.image} width="100%" height="80%" alt='city' />
                    <Box sx={{display:'flex', justifyContent:'center'}}>                                   
                          <blockquote className={styles.blockquote}> 
                          <Typography color='GrayText' variant='h3' className={styles.quote}>
                          {item.name}
                        </Typography>

                          </blockquote>
                  </Box>
                </Card>
            </Grid>
      )):(<></>)}
    
     
    </Grid>

   </Box>
  </Box>
);

Continents.propTypes = {};

Continents.defaultProps = {};

export default Continents;
