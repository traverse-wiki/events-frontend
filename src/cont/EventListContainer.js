import React, { Component } from 'react';
import { EventList } from '../pres/EventList';

export class EventListContainer extends Component {
  filterEvents(events, categoryFilters) {
    if (!categoryFilters.length)
      return events;

    return events.filter((event) => {
      //return event.tags.some(t => categoryFilters.includes(t)); // event.tags is no longer valid
      return event;
    });
  }

  render() {
    return (
      <EventList
        events={this.filterEvents(this.props.events, this.props.filters)}
      />
    );
  }
}

