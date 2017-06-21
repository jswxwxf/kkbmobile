import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
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
// import Picker from 'react-native-picker';
import { observer } from 'mobx-react';

import styles from './styles';

export default class PickerItem extends Component {

  handleShowPicker = () => {
    let data = [];
    for (var i = 0; i < 100; i++) {
      data.push(i);
    }

    Picker.init({
      pickerData: data,
      selectedValue: [59],
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();

  };

  render() {
    const { label, labelStyle, placeholder, last, items, ...other } = this.props;
    return (
      <ListItem icon last={last}>
        <Body>
          <Text style={styles.label}>{label}</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.handleShowPicker} style={{ flexDirection: 'row', width: 200, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text>{placeholder}</Text>
            <Thumbnail style={styles.selectIcon} resizeMode="contain" source={require('./images/select.png')} />
          </TouchableOpacity>
        </Right>
      </ListItem>
    )
  }

};
