import React, { useState } from 'react';
import './main.css';
import Data from './AllData.json';
import Card from './Card';

const Main = () => {

  const [restroval , setrestroval] = useState('');
  const [rate , setrate] = useState(0);
  const [restoData, setrestoData] = useState([...Data]);



    function restroName(e){
        setrestroval(e.target.value);
    }

  return (
    <div className="main">
        <div className='FilterInput'>
            <input type='text' value={restroval} placeholder='Search resturants...' onChange={restroName}/>
            <span>
            Minimum Rating:
            <input type='number' value={rate} onChange={(e)=>setrate(e.target.value)}/>
            </span>
        </div>
        <div>
          <Card passingData={[restoData]}/>
        </div>
    </div>
  );
};

export default Main;