import React from 'react';
import Card from './components/Card/Card'
import data from '../../assets/Json_files/salad'
// CSS
import './AllSalads.css';


function SaladList() {
 
  return (
    <section className='cardlist'>
      {data.salads.map((card, index) => {
                console.log(JSON.stringify(data))
        return <Card/>;
       })} 
    </section>
  );
}

export default SaladList;