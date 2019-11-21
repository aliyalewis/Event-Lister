import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({ events, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
      <ul>
        {events.map(event => (
          <div className="event-list">
            <h1
              className="event-title"
              key={event.id}
              className="event-list-item"
            >
              {event.title}
              <br />
              <img className="images" alt="Image of Event" src={event.featured_image_url} />
              <h2 className="event-description">{event.description}</h2>
              <a href={event.browser_url}>Click Here For More Information</a>
            </h1>
            <br />
          </div>
        ))}
      </ul>
    );
}

export default Events