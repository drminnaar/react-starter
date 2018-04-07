import React, { Component } from 'react';
import logo from '../logo.png';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>                
                <img className='logo' src={logo} />
                <h1 className='title'>React Starter</h1>
            </div>
        );
    }
}