import React, { Component } from 'react';

const today = new Date();
const year = today.getFullYear();

class Footer extends Component {
    render() {

        return (
            <div>
                <p> Copyright @ {year} </p>
            </div>
        )
    }

}
export default Footer;