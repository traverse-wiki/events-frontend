import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      what: props.what,
      where: props.where,
      date: props.date,
      time: props.time,
      desc: props.desc,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    // Hide form
    this.setState({
      showModal: false,
    });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    // Prevent page refresh
    e.preventDefault();

    this.props.saveEvent(
      this.props.id,
      this.state.what,
      this.state.where,
      this.state.date,
      this.state.time,
      this.state.desc
    );

    // Close form
    this.close();
  }

  renderControl(label, type, name, value, placeholder) {
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }

  render() {
    return (
      <div>
        <Button bsSize="sm" onClick={this.open}>{this.props.actionCaption}</Button>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          aria-labelledby="ModalTitle"
        >
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id='ModalTitle'>{this.props.actionCaption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.renderControl('What'       , 'text'    , 'what' , this.state.what , 'Enter event title')}
              {this.renderControl('Where'      , 'text'    , 'where', this.state.where, 'Enter event location')}
              {this.renderControl('Date'       , 'date'    , 'date' , this.state.date , 'Enter event date')}
              {this.renderControl('Time'       , 'time'    , 'time' , this.state.time , 'Enter event time')}
              {this.renderControl('Description', 'textarea', 'desc' , this.state.desc , 'Enter event description')}
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

