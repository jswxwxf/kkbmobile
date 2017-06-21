import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import {
  Button,
  Text
} from 'native-base';
import _ from 'lodash';

import styles from './styles';

export default class CountDown extends Component {

  static defaultProps = {
    onPress: _.noop
  }

  state = {
    buttonText: '获取验证码',
    disabled: false
  }

  handleCountDown = (e) => {
    this.props.onPress(e, this);
  };

  startCountDown() {
    const times = 60;
    let count = times - 1;
    const timer = this.setInterval(() => {
      if (count <= 0) {
        this.setState({
          buttonText: "重新获取",
          disabled: false
        })
        clearInterval(timer);
        return;
      }
      this.setState({
        buttonText: String(count--),
        disabled: true
      })
    }, 1000);
  }

  render() {
    return (
      <Button transparent style={styles.button} disabled={this.state.disabled} onPress={this.handleCountDown}>
        <Text>{this.state.buttonText}</Text>
      </Button>
    );
  }

}

reactMixin(CountDown.prototype, TimerMixin);
