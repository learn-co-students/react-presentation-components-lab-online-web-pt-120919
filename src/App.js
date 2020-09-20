import React, { Component } from "react"
import SimpleComponent from "./components/SimpleComponent"
import SimplerComponent from "./components/SimplerComponent"

class App extends Component {

    state = {
        status: "Complete?"
    }

    handleClick = () => {
        const statusIs = this.state.status === "Complete?" ? "Yes!" : "Complete?"
        this.setState({
            status: statusIs   
        })
    }

    render() {
        return(
            <div>
                <SimpleComponent />
                <SimplerComponent handleClick={this.handleClick} status={this.state.status}/>
            </div>
        )
    }
}

export default App