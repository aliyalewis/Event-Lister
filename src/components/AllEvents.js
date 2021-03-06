import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
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
           <h1 className="h1">All Events</h1>
           <Link to="/">Back to Home Screen</Link>
           <Events events={currentEvents} loading={loading}/>
           <Pagination eventsPerPage={eventsPerPage} totalEvents={events.length} paginate={paginate}/>
       </div>
   )
   
}

export default AllEvents