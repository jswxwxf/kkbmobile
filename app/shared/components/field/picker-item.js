import React, { Component } from 'react';
import {
  View,
  Modal,
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

import { Picker } from '../antd';

import styles from './styles';

const Trigger = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.pickerItem} onPress={props.onClick}>
        <Text style={styles.valueText}>{props.placeholder}</Text>
        <Thumbnail style={styles.selectIcon} resizeMode="contain" source={require('./images/select.png')} />
      </View>
    </TouchableOpacity>
  );
}

export default class PickerItem extends Component {

  prepareData(items, emptyLabel) {
    if (!_.isArray(items[0])) items = [items];
    return this.transform(items, emptyLabel);
  }

  transform(items, emptyLabel) {
    return items.map(item => {
      if (_.isArray(item)) return this.transform(item, emptyLabel);
      if (_.isObject(item)) return item;
      if (_.isEmpty(item)) return { label: emptyLabel, value: item };
      return { label: item, value: item };
    });
  }

  render() {
    const { label, labelStyle, placeholder, last, items, ...other } = this.props;
    return (
      <ListItem icon last={last}>
        <Body>
          <Text style={styles.label}>{label}</Text>
        </Body>
        <Right>
          <Picker
            data={this.prepareData(items, placeholder)}
            title={label}
            cascade={false}
            itemStyle={styles.pickerItemInner}>
            <Trigger {...this.props} />
          </Picker>
        </Right>
      </ListItem >
    )
  }

};
