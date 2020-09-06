// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            mood: 'happy'
        };
    }
    

    handleChange = () =>{
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({
           mood: newMood
        });
    }
    
    render(){
        return <div onClick={ this.handleChange }>{this.state.mood}</div>;
        
    }
}
