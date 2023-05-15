import React from 'react';
import { useState, useContext } from 'react';


import { DataContext } from '../../data-context';

import "./home.styles.css"
import Chart from '../chart/chart.component';

function Home() {

    const [flag, setFlag] = useState(false);
    const [loadflag, setloadFlag] = useState(false);
    const { setData, data } = useContext(DataContext);


    async function getData(){
      setloadFlag(true);
      const response = await fetch("https://www.terriblytinytales.com/test.txt")
      const text = await response.text();
      const wordFreqMap = {};
      
      const words = text.split(" ")
      
      words.forEach((word) => {
        if (word in wordFreqMap) {
          wordFreqMap[word]++;
        } else {
          wordFreqMap[word] = 1;
        }
      });
      
      const sortedfreq = Object.keys(wordFreqMap)
        .sort((a, b) => wordFreqMap[b] - wordFreqMap[a])
        .slice(0, 20);

      // sortedfreq.slice(0,20)
      
      const graphData = sortedfreq.map((word) => {
        return {
          words: word,
          freq: wordFreqMap[word]
        };
      });
      
      // console.log( graphData)
      setData(graphData);

      setTimeout(()=>{
        setFlag(true);
      },1000);
    }
    
  console.log(data);
  return (
    <div>
    {!flag 
      ? 
      <div className='home-container'>
        {
          !loadflag ? <button className='str-btn' onClick = {getData}>
          Submit
          </button>:
          <div className='load-container'></div>
        }
      </div> 
      :
      <Chart data={data}/>
    }
    

    </div>
  )
}


export default Home;