// Code SimpleComponent Hereomprt Rea
import React from 'react'
class SimpleComponent extends React.Component{
state = {
    mood: "happy"
}

handler = () => {
    this.setState({
        mood: "sad"
    })
}
render(){
    return <div onClick = {this.handler}>
        {this.state.mood}
    </div>

}
}

export default SimpleComponent