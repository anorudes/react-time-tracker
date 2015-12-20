import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class InfoPopup extends Component {
  static propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    cost: React.PropTypes.number,
    seconds: React.PropTypes.number,
    addTime: React.PropTypes.func,
    closeItem: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      timerIdItem: -1,
    };
    this.handleTimerToggle = this.handleTimerToggle.bind(this);
  }
  componentDidUpdate() {
    const { id, addTime } = this.props;
    if (this.state.timerIdItem !== id) {
      this.stopTimerAfterChangePopup(id);
    } else if (this.state.timerStart) {
        setTimeout(() => {
          this.state.timerIdItem === id && addTime(id, 1);
        }, 1000);
    }
  }

  stopTimerAfterChangePopup(id) {
    this.setState({
      timerStart: false,
      timerIdItem: id,
    });
  }

  handleTimerToggle() {
    this.setState({
      timerStart: !this.state.timerStart,
      timerIdItem: this.props.id,
    });
  }

  handleClose() {
    this.props.closeItem();
  }

  render() {
    const { name, cost, seconds } = this.props;
    const { timerStart } = this.state;
    const itogo = seconds ? Math.ceil(seconds * cost / 86400) : 0;
    const stopClass = timerStart ? 'button-stop' : '';
    return (
      <div className={`${styles}`}>
        <div className="close fa fa-times" onClick={this.handleClose.bind(this)}></div>
        <span className="title"><b>Title:</b> {name}</span><br />
        <span className="cost"><b>Cost:</b> {cost} ruble/hour</span>
        <span className="seconds"><b>Seconds:</b> {seconds}</span>
        <span className="itogo"><b>Itogo:</b> {itogo} ruble</span>
        <div className="buttons">
          <button type="button" className={`btn btn-default ${stopClass}`} onClick={this.handleTimerToggle}>
            { timerStart && 'Stop timer' }
            { !timerStart && 'Start timer' }
          </button>
        </div>
      </div>
    );
  }
}
