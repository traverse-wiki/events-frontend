import React, { Component } from 'react';
import Moment from 'moment';
import './Event.css';

export class EventList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      listItems: props.events.map((event, index) =>
        <Event key={index} details={event} />
      )
    }
  }

  render() {
    return (
      <ul className="Events">
        {this.state.listItems}
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