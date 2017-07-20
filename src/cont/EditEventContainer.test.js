import React from 'react';
import ReactDOM from 'react-dom';
import EditEventContainer from './EditEventContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditEventContainer />, div);
});
