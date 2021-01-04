import React, { Component } from 'react';
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import {getSaladData} from '../../services/PostData'
import SaladMenu from '../../components/SaladMenu/SaladMenu'
// CSS
import './AllSalads.css';

class SaladList extends Component {
  constructor(props){
    super(props);
    this.state={
      details:[]
    };
    this.getData();
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
    this.getData=this.getData.bind(this);
    
  }

  getData(){
    getSaladData().then((result)=>{
      this.setState({details:result})
      this.sortByPrice('price','asc');
    })
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
      this.state.details.sort((a, b) => {
          if (a[field] > b[field]) {
            return -1;
          } else if (a[field] < b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({details:this.state.details})

      }
      else if(ordering=='asc'){
    
      this.state.details.sort((a, b) => {
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({details:this.state.details})

      }
      }
  render(){
  
  return (
  <div>
    <SaladMenu/>
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
<section className='cardlist'>

      {this.state.details.map((card, index) => {
        return <Card key={card.id}{...card}></Card>;
      })}
    </section>
  </div>
    
 </div>
  );
 
}

}
export default SaladList;
