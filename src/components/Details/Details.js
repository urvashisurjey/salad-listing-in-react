import React from 'react'
import './Details.css';
import {data} from '../../assets/Json_files/salad'
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import history from '../../history';
import { withRouter } from "react-router-dom";

function Details() {

    let { saladid } = useParams();
    let selecteditem = data.findIndex(
        (obj) => obj.id == saladid);
    let select_item_array = data[selecteditem];
   
    return (
        
            <div className='card'>
                <div className="card-image">
                    <img src={select_item_array.image}></img>
                </div>
                <div className="card-content">
                    <h1>{select_item_array.title}</h1>
                    <p>{select_item_array.summary}</p>
                    <h1>${select_item_array.price} &nbsp;<small>{select_item_array.serving}/per savings</small></h1>
                    <h4>Consist:</h4>
                    <p>{select_item_array.ingredients.join(",")}</p>
                    <h4>Nutrients:</h4>
                    {/* <div class="table-responsive table-striped table-borderless">
                        <table class="table table-hover">
                            <thead class="heading">
                                <tr>
                                    <th>Ttile</th>
                                    <th>Amount</th>
                                    <th>Unit</th>
                                    <th>Percentage of Daily needs</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        

    );
}
// function renderTableData(props) {
//     return props.map((props, index) => {
//        const { title, amount, unit, percentOfDailyNeeds } = props
//        return (
//         <tr key={index}>
//         <td>{item.title}</td>
//         <td>{item.amount}</td>
//         <td>
//             {item.unit}
//         </td>
//         <td>{item.percentOfDailyNeeds}</td>

//     </tr>
//        )
//     })
//  }
export default withRouter(Details);
