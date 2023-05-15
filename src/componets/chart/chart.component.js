import React, { Fragment } from 'react'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, Label} from 'recharts';
import { useContext} from 'react';
import { CSVLink } from "react-csv";

import { DataContext } from '../../data-context';

import "./chart.styles.css"

function Chart() {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <div className="graph-container">
    <h2 className='head'>Top 20 Most Frequent Words</h2>
    <ResponsiveContainer width={"100%"} height={400} className={"char-container"}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }} >
              <XAxis dataKey={'words'}/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="freq" fill="#7954A1" />
          </BarChart>
    </ResponsiveContainer>
    <CSVLink data={data} ><button className='download'>Export</button></CSVLink>
    </div>
  )
}

export default Chart;