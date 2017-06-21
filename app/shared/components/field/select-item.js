import React, { Component } from 'react';
import { View } from 'react-native';
import {
  ListItem,
  Body,
  Label,
  Input,
  Icon,
  Right,
  Text
} from 'native-base';
import { Select } from 'teaset';
import { observer } from 'mobx-react';

import styles from './styles';

export default class SelectItem extends Component {

  static staticProps = {
    getItemValue: (item, index) => item,
    getItemText: (item, index) => item
  }

  render() {
    const { label, labelStyle, placeholder, last, items, getItemValue, getItemText, ...other } = this.props;
    return (
      <ListItem icon last={last}>
        <Body>
          <Text style={styles.label}>{label}</Text>
        </Body>
        <Right>
          <Select
            style={styles.selectItem}
            valueStyle={styles.selectItemText}
            items={items}
            getItemValue={getItemValue}
            getItemText={getItemText}
            placeholder={placeholder}
            placeholderTextColor={styles.colors.$placeholder}
            pickerTitle={label} />
        </Right>
      </ListItem>
    )
  }

};
