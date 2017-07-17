import React, { Component } from 'react';
import { Event } from './Event';

export class EventList extends Component {
  renderEvents() {
    // Handle when the database is empty
    if (!this.props.events)
      return '';

    return this.props.events.map((event, index) =>
      <Event
        key={index}
        id={event.id}
        what={event.what}
        when={event.when}
        where={event.where}
        desc={event.desc}
      />
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

