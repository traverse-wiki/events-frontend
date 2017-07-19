import React, { Component } from 'react';
import Moment from 'moment';
import '../css/Event.css';
import EditEventContainer from '../cont/EditEventContainer';

export default class Event extends Component {
  render() {
    let mom = Moment(this.props.when);
    return (
      <li>
        <h5>{this.props.what}</h5>
        <h6>{this.props.desc}</h6>
        <em>{mom.format('MMMM Do YYYY, h:mm a')}</em>
        <EditEventContainer
          actionCaption="Edit Event"
          id={this.props.id}
          what={this.props.what}
          where={this.props.where}
          date={mom.format('YYYY-MM-DD')}
          time={mom.format('HH:mm')}
          desc={this.props.desc}
        />
      </li>
    );
  }
}

