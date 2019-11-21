import React, { Component } from 'react';

class EventCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <h2>{this.props.event.title}</h2>
            <p>{this.props.event.description}</p>
          </div>
        );
    }
}

export default EventCard