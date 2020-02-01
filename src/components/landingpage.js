import React, { Component } from 'react';
import RouteMapping from './routemapping';


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <h4>Landing Page</h4>
                <hr></hr>
                <RouteMapping />
            </div>
        )
    }
}
