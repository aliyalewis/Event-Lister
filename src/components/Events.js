import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({ events, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
      <ul className="event-list">
        {events.map(event => (
          <h1
            className="event-title"
            key={event.id}
            className="event-list-item"
          >
            {event.title}
            <br />
            <img alt="Image of Event" src={event.featured_image_url} />
            <h2 className="event-description">{event.description}</h2>
            <a href={event.browser_url}>Click Here For More Information</a>
          </h1>
        ))}
      </ul>
    );
}

export default Events