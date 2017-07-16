import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import firebase from './firebase';

class PostAnEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      what: '',
      where: '',
      date: '',
      time: '',
      desc: ''
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    // Clear and hide form
    this.setState({
      showModal: false,
      what: '',
      where: '',
      date: '',
      time: '',
      desc: ''
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    // Prevent page refresh
    e.preventDefault();
    // Get ref to events list in firebase
    const eventListRef = firebase.database().ref('events');
    // Get ref to new event
    let eventRef = eventListRef.push();
    // Save event fields
    eventRef.set({
      what: this.state.what,
      where: this.state.where,
      when: this.state.date.toString() + ' ' + this.state.time.toString(),
      desc: this.state.desc,
    });
    // Close form
    this.close();
  }

  render() {
    return (
      <div>
        <Button bsSize="sm" onClick={this.open}>Post an Event</Button>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          aria-labelledby="ModalTitle"
        >
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id='ModalTitle'>Post an Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup
                controlId="what">
                <ControlLabel>
                  What
                </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.what}
                  placeholder="Enter event title"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="where">
                <ControlLabel>
                  Where
                </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.where}
                  placeholder="Enter event location"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="date">
                <ControlLabel>
                  Date
                </ControlLabel>
                <FormControl
                  type="date"
                  value={this.state.date}
                  placeholder="Enter event date"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="time">
                <ControlLabel>
                  Time
                </ControlLabel>
                <FormControl
                  type="time"
                  value={this.state.time}
                  placeholder="Enter event time"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="desc">
                <ControlLabel>
                  Description
                </ControlLabel>
                <FormControl
                  componentClass="textarea"
                  type="text"
                  value={this.state.desc}
                  placeholder="Enter event description"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Cancel</Button>
              <Button type="submit">Save</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default PostAnEvent;
