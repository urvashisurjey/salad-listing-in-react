import React,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import './Card.css'
import { withRouter } from 'react-router-dom';
import history from '../../history';

class Card extends Component{
constructor(props){
    super(props);
this.clickHandler = this.clickHandler.bind(this);
}
 clickHandler=()=> {
  
  this.props.history.push(`/details/${this.props.id}`);

 };

render(){
 return (
     <>
  <article
   className='card' onClick={this.clickHandler}
  >
   <img src={this.props.image} alt='' />
   <h1>{this.props.title}</h1>
   <p>{this.props.ingredients.join(",")}</p>
  </article>
  </>
 );
}
}



export default withRouter(Card)