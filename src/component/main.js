import React, { useState } from 'react';
import './main.css';
import Data from './AllData.json';
import Card from './Card';

const Main = () => {

  const [restroval , setrestroval] = useState('');
  const [rate , setrate] = useState(0);
  const [restoData, setrestoData] = useState([...Data]);



    function restroName(e){
        let filteredData = Data.filter((data)=>{
      return (data.type_of_food.toLowerCase().includes(e.target.value.toLowerCase()))
      })
      setrestroval(e.target.value);
      setrestoData(filteredData);
    }

  return (
    <div className="main">
        <div className='FilterInput'>
            <input type='text' value={restroval} placeholder='Search resturants...' onChange={restroName}/>
            <span>
            Minimum Rating:
            <input type='number' className='number' value={rate} onChange={(e)=>{setrate(e.target.value);
            let filteredData = Data.filter((data)=>{
              return (data.rating>=e.target.value)
            })
            setrestoData(filteredData);
            }}/>
            </span>
        </div>
        <div className='AllCard'>
          {
            restoData.map((data)=><Card {...data}/>
            )
          }
        </div>
    </div>
  );
};

export default Main;