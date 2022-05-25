import React from "react";
import "./sass/Rechart.css";
import {
//   LineChart,
//   Line,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Recharts = () => {
  const data = [
    {
      name: "JAN",
      ActiveUser: 5000,
      MinorUser: 3400,

      amt: 2400,
    },
    {
      name: "FEB",
      ActiveUser: 4000,
      MinorUser: 3403,
      amt: 2210,
    },
    {
      name: "MAR",
      ActiveUser: 3000,
      MinorUser: 4800,
      amt: 2290,
    },
    {
      name: "APR",
      ActiveUser: 5780,
      MinorUser: 3550,
      amt: 2000,
    },
    {
      name: "MAY",
      ActiveUser: 4090,
      MinorUser: 2000,
      amt: 2181,
    },
    {
      name: "JUN",
      ActiveUser: 4390,
      MinorUser: 3200,
      amt: 2500,
    },
    {
      name: "JLY",
      ActiveUser: 2490,
      MinorUser: 2000,
      amt: 2100,
    },
    {
      name: "AUG",
      ActiveUser: 3490,
      MinorUser: 3000,
      amt: 2100,
    },
    {
      name: "SEP",
      ActiveUser: 2490,
      MinorUser: 2000,
      amt: 2100,
    },
    {
        name: "OCT",
        ActiveUser: 4490,
        MinorUser: 3000,
        amt: 2100,
      },
      {
        name: "Nov",
        ActiveUser: 2490,
        MinorUser: 3000,
        amt: 2100,
      }, {
        name: "DEC",
        ActiveUser: 2490,
        MinorUser: 5000,
        amt: 2100,
      },
  ];
  return (
    <div className="charts">
      <div>
        <h2>Sales Report</h2>
      </div>

      <ResponsiveContainer width="100%" aspect={4 / 1.5}>
        <AreaChart
        //   width={730}
        
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="black" />
           <YAxis tick={{stroke: '#5555', strokeWidth: -0}}/>
          <CartesianGrid strokeDasharray="1 1" stroke="#5552" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ActiveUser"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="MinorUser"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
