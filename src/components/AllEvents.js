import React, { useState, useEffect} from 'react';
import axios from 'axios'
// import EventCard from './EventCard';
import Pagination from './Pagination';
import Events from './Events';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(10);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const response = await axios.get("https://api.mobilize.us/v1/events");
            setEvents(response.data.data);
            setLoading(false);
        }

        fetchEvents();
    }, []);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


   return (
       <div>
           <h1>All Events</h1>
           <Events events={currentEvents} loading={loading}/>
           <Pagination eventsPerPage={eventsPerPage} totalEvents={events.length} paginate={paginate}/>
       </div>
   )
   
}

export default AllEvents