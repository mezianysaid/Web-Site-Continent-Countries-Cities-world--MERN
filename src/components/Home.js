import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import './Styles/HomeStyles.scss'
import city1 from '../assets/city1.jpg'
import sydny from '../assets/Syd.jpg'
import hongkong from '../assets/hongkong.jpg'
import newyork from '../assets/newyork.jpg'

const height = window.innerHeight  
const widthW = window.innerWidth  
const list = [
  {
    image:newyork,
    description:"New York, often called New York City or simply NYC, is the most populous city in the United States. With a census-estimated population of 8,335,897 distributed over 300.46 square miles in 2022,"
  },
  {
    image:sydny,
    description:"Sydney, capitale de la Nouvelle-Galles du Sud et l'une des plus grandes villes d'Australie, est renommée pour son opéra situé dans le port, avec son design distinctif en forme de voiles."
  },
  {
    image:hongkong,
    description:"A former British colony, Hong Kong is an independent territory located in southeastern China. Its bustling and dense urban centre is a major port and a global financial centre saturated with skyscrapers."
  }

]
function Home() {
  
  return (
    <Box >
      <Box className='headHome'>
      {/* <img src={city1} width="100%" height={height-200} alt='city'  /> */}
      <Box className='welc'>

      <Typography className='title' variant='h1'>
        Welcome Home 
      </Typography>
      <Typography className='title' variant='h4'>
        Welcome to the big city New York
      </Typography>
      </Box>

      </Box>
      <Box className='container'>
       <Grid container item lg={10} md={10} xs={10} className='wrapper'>
        {list?list.map(item=>(
              <Grid item xs={10} lg={3} md={3} >
              <Card sx={{minHeight:300,mt:3}} >
                <Box sx={{height:200, width:"100%"}}>
                <img src={item.image} width="100%" height="100%" alt='city' />
                </Box>
              <CardContent>                                   
                  <blockquote className='blockquote'> 
                  <Typography color='GrayText' variant='h9' className='quote'>
                     {item.description}
                  </Typography>
                  </blockquote>
              </CardContent>
              </Card>
         </Grid>
        )):(<></>)}
           
           {/* <Grid item xs={10} lg={3} md={3} >
           <Card sx={{minHeight:300,mt:3}}>
                <img src={city1} width="100%" height="50%" alt='city' />
                <CardContent>
                <blockquote className='blockquote'> 
                    <Typography color='GrayText' variant='h9' className='quote'>
                    This example and the other for a text input, which contain style rules similar to what we’d expect to see in an external stylesheet. attribute of elements that are in the returned markup.
                    </Typography>

                    </blockquote>
                </CardContent>
                </Card>
           </Grid> */}
           {/* <Grid item xs={10} lg={3} md={3} >
           <Card sx={{minHeight:300,mt:3}}>
                <img src={city1} width="100%" height="50%" alt='city' />
                <CardContent>
                <blockquote className='blockquote'> 
                    <Typography color='GrayText' variant='h9' className='quote'>
                    This example contains a styles object  stylesheet. Those objects are then applied to the style attribute of elements that are in the returned markup.
                    </Typography>

                    </blockquote>
                </CardContent>
                </Card>

           </Grid> */}
       </Grid>
      </Box>
    </Box>
  )
}



export default Home

