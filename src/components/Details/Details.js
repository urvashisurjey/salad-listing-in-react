import React,{Component} from 'react'
import './Details.css';
import {getSaladData} from '../../services/PostData';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import history from '../../history';
import { withRouter } from "react-router-dom";

class Details extends Component {

    constructor(props){
    super(props);
    this.state={
        selectItemArray:{},
        details:[]
    };
    this.getSaladDataById=this.getSaladDataById.bind(this);
    this.getSaladDataById();
    
    }

    getSaladDataById(){
    let saladid = this.props.match.params.saladid;
    getSaladData().then((result)=>{
        this.setState({details:result})
        var selectedItem = this.state.details.findIndex(
            (obj) => obj.id == saladid);
        this.setState({selectItemArray:this.state.details[selectedItem]
            })
        })
}    

render(){
    return (
        
        <div className='card'>
            <div className="card-image">
                <img src={this.state.selectItemArray.image}></img>
            </div>
            <div className="card-content">
                <h1>{this.state.selectItemArray.title}</h1>
                <p>{this.state.selectItemArray.summary}</p>
                <h1>${this.state.selectItemArray.price} &nbsp;<small>{this.state.selectItemArray.serving}/per savings</small></h1>
                <h4>Consist:</h4>
                <p>{this.state.selectItemArray.ingredients}</p>
            </div>
        </div>
    

);
}
   
}

export default withRouter(Details);
