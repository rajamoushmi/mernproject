import React from 'react'
import { Grid } from '@mui/material'
import background from '../images/home.webp'
function Home() {
  return (
    <div>
       <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
    </div>

  )
}

export default Home
