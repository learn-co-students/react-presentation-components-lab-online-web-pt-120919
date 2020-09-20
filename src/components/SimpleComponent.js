// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    handleClick = () => {
        const newMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
                mood: newMood   
        })
    }
    
    // handleClick = () => {
    //     this.setState({
    //         mood: "sad"
    //     })
    // }

    render() {
        return (
            <div>   
                <button onClick={this.handleClick}>{this.state.mood}</button>   
            </div>
        );
    }
}

export default SimpleComponent;