import React, { Component } from 'react';
import Moment from 'moment';
import './Event.css';

export class EventList extends Component {
  constructor(props) {
    super(props)

    // only show trivia just to test category filter
    this.state = { 
      filters: [],
    }
  }
  filterByCategory() {
    if (!this.state.filters.length) return this.props.events

    return this.props.events.filter((event) => {
      return event.tags.some(t => this.state.filters.includes(t));
    })
  }
  renderListItem() {
    // Handle when the database is empty
    if (!this.props.events) {
      return '';
    }
    return this.filterByCategory().map((event, index) =>
      <Event key={index} details={event} />
    )
  }
  render() {
    return (
      <ul className="Events">
        {this.renderListItem(this.props.events)}
      </ul>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <li>
        <h5>{this.props.details.what}</h5>
        <h6>{this.props.details.desc}</h6>
        <em>{Moment(this.props.details.when).format('MMMM Do YYYY, h:mm a')}</em>
      </li>
    );
  }
}
