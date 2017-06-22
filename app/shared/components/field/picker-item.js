import React, { Component } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import {
  ListItem,
  Body,
  Label,
  Input,
  Icon,
  Right,
  Text,
  Thumbnail
} from 'native-base';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';

import { inject, TYPES } from 'kkbmobile/app/config/inject';

import styles from './styles';

@observer
export default class PickerItem extends Component {

  utilService = inject(TYPES.utilService);

  handleShowPicker = () => {
  };

  render() {
    const { label, labelStyle, placeholder, last, items, ...other } = this.props;
    return (
      <ListItem icon last={last}>
        <Body>
          <Text style={styles.label}>{label}</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.handleShowPicker} style={styles.pickerItem}>
            <Text>{placeholder}</Text>
            <Thumbnail style={styles.selectIcon} resizeMode="contain" source={require('./images/select.png')} />
          </TouchableOpacity>
        </Right>
      </ListItem>
    )
  }

};
