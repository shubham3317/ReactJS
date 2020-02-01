import React, { Component } from 'react';

export default class UserDetails extends Component {
    render() {
        return (
            <div>
                UserDetails of User with ID = {this.props.match.params.id}
            </div>
        )
    }
}