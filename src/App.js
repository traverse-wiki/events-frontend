import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import { EventList } from './Event'

class App extends Component {
  constructor(props) {
    super(props);

    // dummy data
    this.state = {
      events: [
        {
          what: "DJ Motaz",
          where: "West Bay Beach Resort",
          when: new Date("2017-08-10 22:00:00"),
          desc: "DJ Motaz Live at our on-site View Nightclub from 10 pm - 2 am at West Bay Beach"
        },
        {
          what: "Monday Night Trivia!",
          where: "The Workshop",
          when: new Date("2017-08-06 13:00:00"),
          desc: "A night of trivia."
        },
        {
          what: "Monte Nagler: Visions of Light",
          where: "Crooked Tree Arts Center",
          when: new Date("2017-08-05 16:30:00"),
          desc: "A collection of photographic work by Michigan’s own Monte Nagler, a former student of Ansel Adams."
        },
        {
          what: "DJ Motaz",
          where: "West Bay Beach Resort",
          when: new Date("2017-08-10 22:00:00"),
          desc: "DJ Motaz Live at our on-site View Nightclub from 10 pm - 2 am at West Bay Beach"
        },
        {
          what: "Monday Night Trivia!",
          where: "The Workshop",
          when: new Date("2017-08-06 13:00:00"),
          desc: "A night of trivia."
        },
        {
          what: "Monte Nagler: Visions of Light",
          where: "Crooked Tree Arts Center",
          when: new Date("2017-08-05 16:30:00"),
          desc: "A collection of photographic work by Michigan’s own Monte Nagler, a former student of Ansel Adams."
        },
        {
          what: "DJ Motaz",
          where: "West Bay Beach Resort",
          when: new Date("2017-08-10 22:00:00"),
          desc: "DJ Motaz Live at our on-site View Nightclub from 10 pm - 2 am at West Bay Beach"
        },
        {
          what: "Monday Night Trivia!",
          where: "The Workshop",
          when: new Date("2017-08-06 13:00:00"),
          desc: "A night of trivia."
        },
        {
          what: "Monte Nagler: Visions of Light",
          where: "Crooked Tree Arts Center",
          when: new Date("2017-08-05 16:30:00"),
          desc: "A collection of photographic work by Michigan’s own Monte Nagler, a former student of Ansel Adams."
        },
      ]
    }
  }
  render() {
    return (
      <div className="App container">

        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">Events</h3>
        </div>

         <div className="row events__main">
           <EventList events={this.state.events} />
         </div> 

        <footer className="footer">
          <p>&copy; Cyberdelia 2017</p>
        </footer>

      </div>
    );
  }
}

export default App;