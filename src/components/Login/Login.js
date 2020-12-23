
import React, { Component } from 'react'
import { PostData } from '../../services/PostData';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.login = this.login.bind(this);
        this.render=this.render.bind(this);
        this.onChange= this.onChange.bind(this);
    }

login(){
    console.log("adfdf");

    PostData().then((result) => {
console.log('result'+result)
    })
}

onChange(e){
this.setState({[e.target.name]:e.target.value})
}

render(){
    return (
        
        <div className='loginform'>
            <form>
            <label>Username</label>
            <input type='text' name='username' placeholder='Enter username' onChange={this.onChange}></input>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' onChange={this.onChange}></input>
            <button type='submit' value='Login' onClick={this.login}>Login</button>
            </form> 
        </div>
    )
}
}
export default Login