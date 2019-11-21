import React, { Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <h1 className="h1">Welcome to Event Lister!
               <h2 className="h2"><Link to="/allevents">Click Here to See All Events</Link></h2>
            </h1>

        )
    }
}

export default Home