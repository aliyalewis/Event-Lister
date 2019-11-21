import React from 'react';

const Events = ({ events, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    console.log(events);
    

    return (
        <ul className="event-list">
            {events.map(event => (
                 <li key={event.id} className="event-list-item">
                    {event.title}
                </li>
            ))}
        </ul>
    )
}

export default Events