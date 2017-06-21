import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { WebModal } from '../webmodal';

import styles from './styles';

export default class Hint extends Component {

  modal;

  state = {
    modalVisible: false
  }

  renderLinkText = (url) => {
    let parts = url.split('/');
    let target = parts[parts.length - 1];
    if (target === 'privacy') return '《隐私条款》';
    if (target === 'license') return '《用户服务协议》';
    return url;
  };

  handleLinkPress = (url) => {
    this.modal.show(url);
  };

  render() {
    return (
      <View>
        <Hyperlink onPress={this.handleLinkPress} style={styles.container} linkStyle={styles.link} linkText={this.renderLinkText}>
          <Text style={styles.text}>
            {this.props.children}
          </Text>
        </Hyperlink>
        <WebModal ref={modal => this.modal = modal} />
      </View>
    )
  }

}
