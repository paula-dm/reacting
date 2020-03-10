import React, { Component } from 'react';

class Colors extends Component {
    state = { 
        className: 'false'
    };
    changeColor =() => this.setState({className: !this.state.className});
    render() {
        return (
            <button className={this.state.className ? "dec" : "dec2"} onClick = {this.changeColor}>Click to change my color</button>
            
        )
    }
}
export default Colors;