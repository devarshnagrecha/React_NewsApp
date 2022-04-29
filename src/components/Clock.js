import React, { Component } from 'react'

let a;
let b;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {

    a = new Date();
    b = a.toUTCString();
    document.getElementById('time1').innerHTML = b;

}, 1000);

export class Clock extends Component {
    render() {
        return (

            <div className="d-flex justify-content-between">

                <div style={{ backgroundColor: 'rgb(207, 223, 231, 0.7)', padding: '10px', textAlign: 'center' }} className="container my-4" >
                    <div>
                        <h1 style={{ fontSize: '20px' }}><span id="time1"></span></h1>
                    </div>
                </div>
            </div>

        )
    }
}

export default Clock
