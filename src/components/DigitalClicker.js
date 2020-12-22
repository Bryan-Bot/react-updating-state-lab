// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    clicked = () =>{
        this.setState(previousState=>({
            timesClicked: previousState.timesClicked+1
        }))
    }
    
    render(){
        return(<div>
            <button onClick={this.clicked}>click</button>
            <p>{this.state.timesClicked}</p>
        </div>)
    }

}
export default DigitalClicker