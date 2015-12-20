import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Footer extends Component {
  render() {
    return (
      <footer className={`${styles}`}>
        <div className="link">
          <a href="https://github.com/anorudes/react-time-tracker" target="_blank">GitHub</a>
        </div>
      </footer>
    );
  }
}
