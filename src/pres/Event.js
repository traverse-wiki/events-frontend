import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Moment from 'moment';
import '../css/Event.css';

export default class Event extends Component {
  render() {
    return (
      <Panel>
        <h5>{this.props.what}</h5>
        <em>{Moment(this.props.when).format('MMMM Do YYYY, h:mm a')}</em>
      </Panel>
    );
  }
}

