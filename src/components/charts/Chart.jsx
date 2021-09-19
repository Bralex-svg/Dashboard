import React from 'react'
import './chart.css'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';



function Chart() {


  const data = [
    {
      // name: 'Page A',
      "Active User": 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Jan',
      "Active User": 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Feb',
      "Active User": 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Mar',
      "Active User": 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Apr',
      "Active User": 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'May',
      "Active User": 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jun',
      "Active User": 3490,
      pv: 4300,
      amt: 2100,
    },
    { 
    name: 'July',
    "Active User": 4000,
    pv: 4500,
    amt: 2500
    }
  ];



    const cardinal = curveCardinal.tension(0.2);

    return (
        <div className = "chart">
            <div className="chartContainer">

          
          <h5 className="chartTitle">Applications Rejected</h5>
          <h5 className="chartTitle">This year</h5>
          <h5 className="chartTitle">This Week</h5>
          <h5 className="chartTitle">Today</h5>
          </div>

          <ResponsiveContainer width="100%" height="100%" aspect = {4 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          // margin={{
          //   top: 10,
          //   right: 30,
          //   left: 0,
          //   bottom: 0,
          // }}
        >
       <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Active User" stroke="#5E2F35" fill="#5E2F35" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="Active User" stroke="#5E2F35" fill="#5E2F35" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
          {/* <ResponsiveContainer width = "50%" aspect = {4 / 1}> 
          <LineChart data = {data}>
        <XAxis dataKey = "name" />
          <Line type = "monotone" dataKey = "Active User"> </Line>
          </LineChart>

          </ResponsiveContainer> */}
        </div>
    )
}

export default Chart
