import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        this.setState(previousState =>{
            const emotion = previousState.mood == 'happy' ? 'sad' : 'happy'
            return { mood: emotion }
        })
    }

    render(){
        return (<div onClick={this.handleClick}>{this.state.mood}</div>)
    }
}