import React from 'react'
import "./widgetsSmall.css"
import CallMadeIcon from '@mui/icons-material/CallMade';

import { PieChart } from 'react-minimal-pie-chart';

function WidgetsSmall() {
    return (
        <div className = "widgetsSmall">
         <PieChart className = "pie"
  data={[
    { title: 100, value: 20, color: '#FE5260' },
    {  value: 15, color: '#2C9CFE' },
    {  value: 20, color: '#6543B4' }
    
  ]}
  
/>

 <div className="feature">
     <div className="featureItem">
         <span className="featureTitle">Referals and campaign stats </span>
         <div className="featureMoneyContainer">
                    <span className="featureMoney">7956</span>
                    <span className="featureMoneyRate">< CallMadeIcon  style={{color: '#FE5260 '}} />  +3.59</span>

                </div>
                <div className="btn-area">
                    <button className = "btn1">Start a new Campaign Now</button>
                    <button className = "btn2">Pause all running campaigns</button>
                </div>

     </div>
 </div>

        </div>
    )
}

export default WidgetsSmall
