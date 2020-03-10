import React, { Component } from 'react';

class Alert extends Component {

    onClickEvent = () => { alert("Wooohooo who am I seeing playing????") };
    render() {
        return (
            <div>
                <button class = "dec" onClick={this.onClickEvent}>CHECK ME OUT</button>
            </div>

        )
    }

}
export default Alert;