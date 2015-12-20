import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class AddItem extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    addItem: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const name = this.refs.name.value ? this.refs.name.value : 'без названия';
    const cost = this.refs.cost.value;
    if (cost && !isNaN(cost)) {
      this.props.addItem(name, +cost);
      this.refs.name.value = '';
    } else {
      alert('Цена должна быть числом!');
    }
  }

  render() {
    return (
      <div className={`${styles}`}>
        <div className="bs-example bs-example-form">
          <div className="input-group input-group-lg">
            <div className="row">
              <div className="col-lg-8">
                <input type="text" ref="name" className="form-control" placeholder="Name Task" />
              </div>
              <div className="col-lg-4">
                <input type="text" ref="cost" className="form-control" placeholder="Cost per hour (ruble)" />
              </div>
            </div>
            <button type="submit" className="btn btn-default" onClick={::this.handleClick}>Add item</button>
          </div>
        </div>
      </div>
    );
  }
}
