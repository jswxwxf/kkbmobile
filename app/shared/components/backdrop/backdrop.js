import React, { Component } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { observer } from 'mobx-react';

import { AppStore } from 'kkbmobile/app/shared/stores';
import styles from './styles';

@observer
export default class Backdrop extends Component {

  handleRequestClose = () => {
    this.close();
  };

  close() {
    AppStore.appState.backdropVisible = false;
  }

  render() {
    return (
      <Modal
        onRequestClose={this.handleRequestClose}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={AppStore.appState.backdropVisible}>
        <TouchableWithoutFeedback onPress={this.handleRequestClose}>
          <View visible={AppStore.appState.backdropVisible} style={styles.backdrop}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

}

