import React, { Component, useEffect } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)   
        this.state = {
           eventName:'React event',
           users:[]  
        }
    }
    componentWillMount(){
        console.log('component will mount');
    }

    removeUser(){
        const users= without(this.state.users, users);
        this.setState({
            users
        })
    }
    
    render() {
        const currentUsers = this.state.users;
        return (
            <div>
                
            </div>
        )
    }
}
