import React, { Component } from 'react';
import firebase from '../data/firebase';
import EditEvent from '../pres/EditEvent';

export default class EditEventContainer extends Component {
  saveEvent(id, what, where, date, time, desc) {
    let eventListRef;
    let eventRef;

    if (id) {
      // Update existing event
      // Get ref to event in firebase
      eventRef = firebase.database().ref(`events/${id}`);
    } else {
      // Add new event
      // Get ref to events list in firebase
      eventListRef = firebase.database().ref('events');
      // Get ref to event
      eventRef = eventListRef.push();
    }
    // Save event fields
    eventRef.set({
      what: what,
      where: where,
      when: `${date} ${time}`,
      desc: desc,
    });
  }

  render() {
    return (
      <EditEvent
        actionCaption={this.props.actionCaption}
        id={this.props.id || false}
        what={this.props.what || ''}
        where={this.props.where || ''}
        date={this.props.date || ''}
        time={this.props.time || ''}
        desc={this.props.desc || ''}
        saveEvent={this.saveEvent.bind(this)}
      />
    );
  }
}
