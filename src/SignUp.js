import React, { Component } from 'react'



export default class SignUp extends Component {
   
    state = {
        email: '',
        password: '',
    } 
    
    handleSubmit = (e) => {
        e.preventDefault();
    
     }
     render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    email
                    <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                </label>
                <br/>
                <label>
                    password
                    <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                </label>
                <br/>
                <button>log in</button>
            </form>
                
            </>
        )
    }
}
