import React, { Component } from 'react'
import loading from './load3.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <br />
                <br />
                <br />
                <img src={loading} alt="loading" />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Spinner
