import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Moment from 'moment';
import { EditEventContainer } from '../cont/EditEventContainer';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      show: false
    });
    this.props.onHide();
  }

  render() {
    let mom = Moment(this.props.when);
    return (
      <Modal
        show={this.state.show}
        onHide={this.close}
      >
        <Modal.Header
          closeButton
        >
          <Modal.Title>
            {this.props.what}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{this.props.desc}</h6>
          <em>{mom.format('MMMM Do YYYY, h:mm a')}</em>
        </Modal.Body>
        <Modal.Footer>
          <EditEventContainer
            actionCaption="Edit Event"
            id={this.props.id}
            what={this.props.what}
            where={this.props.where}
            date={mom.format('YYYY-MM-DD')}
            time={mom.format('HH:mm')}
            desc={this.props.desc}
          />
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
