import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions';

/* components */

import { List } from 'components/List';
import { AddItem } from 'components/AddItem';
import { InfoPopup } from 'components/InfoPopup';

@connect(
  state => state.items,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {
  static propTypes = {
    items: React.PropTypes.any,
    activeItem: React.PropTypes.object,
    actions: React.PropTypes.object,
    closeItem: React.PropTypes.func,
    addTime: React.PropTypes.func,
  }

  render() {
    const { activeItem } = this.props;
    return (
      <section>
        <List {...this.props} />
        {activeItem && <InfoPopup {...this.props.activeItem}
          closeItem={this.props.closeItem}
          addTime={this.props.addTime} />}
        <AddItem {...this.props} />
      </section>
    );
  }
}
