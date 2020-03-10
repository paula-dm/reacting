import React, { Component } from 'react';

class Count extends Component {

    state = {count: 0,};
    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });
    reset = () => this.setState({count :0});

    render() {
        const { count } = this.state;
        return (
            <div> 
            <span class = "dec">Count: {count}</span> 
            <button class = "dec" onClick = {this.increment}>+ </button>
            <button class = "dec" onClick = {this.decrement}>- </button>
            <button class = "dec" onClick = {this.reset}>RESET </button>
            </div>
             )
    }
}
export default Count;