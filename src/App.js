import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './css/App.css';
import { EventListContainer } from './cont/EventListContainer';
import { EditEventContainer } from './cont/EditEventContainer';
import firebase from './data/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', (snapshot) => {
      let events = snapshot.val();
      let newEvents = [];
      for (let event in events) {
        newEvents.push({
          id: event,
          what: events[event].what,
          when: events[event].when,
          where: events[event].where,
          desc: events[event].desc,
        });
      }
      this.setState({
        events: newEvents
      });
    });
  }

  render() {
    return (
      <div className="App container">

        <div className="header clearfix">
          <Nav bsStyle="pills">
            <NavItem>
              Home <span className="sr-only">(current)</span>
            </NavItem>
            <NavItem>
              About
            </NavItem>
            <NavItem>
              Contact
            </NavItem>
          </Nav>
          <h3 className="text-muted">Events</h3>
        </div>

        <div className="row events__main">
          <EventListContainer
            events={this.state.events}
            filters={[]}
          />
        </div> 

        <div className="row events__actions">
          <EditEventContainer
            actionCaption="Post an Event"
          />
        </div>

        <footer className="footer">
          <p>&copy; Cyberdelia 2017</p>
        </footer>

      </div>
    );
  }
}

export default App;
