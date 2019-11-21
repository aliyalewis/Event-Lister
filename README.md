#Event Lister

## How to Run Event Lister

1. Clone this repo onto your local system.

2. CD into `event-lister` and run `npm i && npm start` in your terminal.

3. If Event Lister doesn't automatically launch in, type 'http://localhost:3000' in the search engine of your choice (Google Chrome is recommended).

## Technologies

- React
    - react-router-dom

- Axios

##Issues
The API had a wide range of inconsistencies when it came to looking for an address or location for each event. For this reason, I did not implement a map feature, as there is either:
    - no address but latitude/longitude
    - no latitude/longitude but an address
    - "null" as the value of "location"

There is no testing in this app.

##Resources
- [Simple Frontend Pagination | React](https://www.youtube.com/watch?v=IYCa1F-OWmk)