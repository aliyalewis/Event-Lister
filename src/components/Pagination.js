import React from 'react';

const Pagination = ({ eventsPerPage, totalEvents, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <ul className="ul" key={number}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </ul>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination