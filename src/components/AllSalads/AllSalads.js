import React, { Component } from 'react';
import Card from '../../components/Card/Card'
import {data} from '../../assets/Json_files/salad'
// CSS
import './AllSalads.css';

class SaladList extends Component {
  constructor(props){
    super(props);
    this.state={
      details:{}
    }
    this.sortby = [
      {
        State: "Price: Low to high",
      },
      {
        State: "Price: High to low",
      },
      {
        State: "A-Z",
      },
      {
        State: "Z-A"
      },
    ];
    this.onDropdownSelected = this.onDropdownSelected.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByPrice('price','asc');
  }

  onDropdownSelected = (e) => {
 
    if(e.target.value=='Price: Low to high'){
      this.sortByPrice('price','asc');
    }
    else if(e.target.value=='Price: High to low'){
    this.sortByPrice('price','desc')
    }
    else if(e.target.value=='A-Z'){
    this.sortByPrice('title','asc')
    }
    else if(e.target.value=='Z-A'){
    this.sortByPrice('title','desc')
    }  
  }
  sortByPrice(field,ordering){
    if(ordering=='desc'){
      data.sort((a, b) => {
          if (a[field] > b[field]) {
            return -1;
          } else if (a[field] < b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({details:data})

      }
      else if(ordering=='asc'){
    
      data.sort((a, b) => {
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({details:data})

      }
      }
  render(){
  
  return (<>
    <div className='item'>
        <h2>All Salads</h2>
    <label>Sort by:</label>
  <select
  className="form-control"
  id="sortby"
  name="sortby"
  onChange={this.onDropdownSelected} 
  value={this.sortby.State}
  required
>
{this.sortby.map((e, key) => {
        return <option key={key} value={e.State}>{e.State}</option>;
    })}
</select>
     </div>
    <section className='cardlist'>
      {data.map((card, index) => {
        return <Card key={card.id}{...card}></Card>;
      })}
    </section>
    </>
  );
 
}

}
export default SaladList;
