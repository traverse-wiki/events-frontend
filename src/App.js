import React, { Component } from 'react';
import './App.css';
import '../node_modules/skeleton-css/css/skeleton.css';
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
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="events__aside">
          <ul className="filters">
            <li><button>Cinema</button></li>
            <li><button>Food</button></li>
            <li><button>Trivia</button></li>
          </ul>
        </div>
        <div className="events__main">
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default App;