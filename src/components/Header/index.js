import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Header extends Component {
  render() {
    return (
      <header className={`${styles}`}>
        <h1>React Time Tracker</h1>
      </header>
    );
  }
}
