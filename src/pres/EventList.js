import React, { Component } from 'react';
import Event from './Event';
import EventDetails from './EventDetails';

export class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: null, // if this is set to an event id, display the details for that event
                          // only one event's details can be shown at a time
    };
  }

  showDetails(event) {
    this.setState({
      eventDetails: event.id
    });
  }

  hideDetails() {
    this.setState({
      eventDetails: null
    });
  }

  renderEvents() {
    // Handle when the database is empty
    if (!this.props.events)
      return '';

    return this.props.events.map((event, index) =>
      <li
        key={index}
        onClick={e => this.showDetails(event)}
      >
        <Event
          id={event.id}
          what={event.what}
          when={event.when}
          where={event.where}
          desc={event.desc}
        />
        {
          (event.id === this.state.eventDetails) ?
            <EventDetails
              id={event.id}
              what={event.what}
              when={event.when}
              where={event.where}
              desc={event.desc}
              onHide={this.hideDetails.bind(this)}
            />
            : ''
        }
      </li>
    );
  }

  render() {
    return (
      <ul className="Events">
        {this.renderEvents(this.props.events)}
      </ul>
    );
  }
}

