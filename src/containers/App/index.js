import React, { Component } from 'react';
import 'bootstrap-webpack';

/* global styles for app */
import 'style!./../../styles/main.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }

  render() {
    return (
      <section className="page">
        <div className="page__in">
          <Header />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </section>
    );
  }
}
