import React, { Component } from 'react';

import classNames from 'classnames';

/* component styles */
import styles from './styles';

export class List extends Component {
  static propTypes = {
    items: React.PropTypes.array,
    activeItem: React.PropTypes.object,
    init: React.PropTypes.func,
    openItem: React.PropTypes.func,
    delItem: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.init();
  }

  handleRemove(id) {
    this.props.delItem(id);
  }

  handleOpen(id) {
    this.props.openItem(id);
  }

  render() {
    const { items, activeItem } = this.props;
    return (
      <div className={classNames({ [styles]: true }, { slide: activeItem }, { minHeight: items.length })}>
        <h3>List of Items</h3>
        <ul className="items-list">
          {!items.length && 'The list is empty. Please add item'}
          {
            items.map((item, index) => {
              const classes = classNames({ item: true }, { active: activeItem && activeItem.id === item.id });
              return (
                <li key={index} className={classes}>
                  {index + 1}) <span onClick={this.handleOpen.bind(this, item.id)}>{item.name}</span>
                  <div className="icon-list">
                    <i className="icon fa fa-location-arrow" onClick={this.handleOpen.bind(this, item.id)}></i>
                    <i className="icon fa fa-times" onClick={this.handleRemove.bind(this, item.id)}></i>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
