import React from 'react'
import './progress.css'
// import { ProgressBar } from "react-step-progress-bar";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Saly from './Saly-11.png'


function Progress() {
    return (
        <div className = "progress">
            {/* <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      /> */}

<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        {/* <p>Hey, John Bayer, <br /> you have 8 new notifications Today! </p> */}

      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="inherit" />
    </Stack>
    <img src={Saly} className = "saly" alt="" />
        </div>
    )
}

export default Progress
