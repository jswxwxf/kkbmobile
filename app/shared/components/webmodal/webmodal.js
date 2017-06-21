import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  WebView
} from 'react-native';
import {
  Button,
  Icon
} from 'native-base';

import styles from './styles';

export default class WebModal extends Component {

  state = {
    visible: false
  }

  show(url) {
    this.setState({
      visible: true,
      url
    });
  }

  close() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <Modal animationType={"slide"} visible={this.state.visible} onRequestClose={() => this.close()}>
        <View style={styles.container}>
          <WebView source={{ uri: this.state.url }} style={styles.webView} />
          <Button transparent success style={styles.button} iconLeft onPress={() => this.close()}>
            <Icon name='ios-close-circle-outline' style={styles.icon} />
          </Button>
        </View>
      </Modal>
    )
  }

}
