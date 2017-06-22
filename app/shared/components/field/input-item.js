import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  ListItem,
  Item,
  Label,
  Input,
  Icon
} from 'native-base';
import { observer } from 'mobx-react';

import styles from './styles';

@observer
export default class InputItem extends Component {
  render() {
    const { label, labelStyle, placeholder, state = {}, last, right, ...other } = this.props;
    return (
      <View style={styles.inputContainer}>
        <Item fixedLabel last={last} error={state.hasError}>
          <Label style={labelStyle}>{label}</Label>
          <Input placeholder={placeholder} value={state.value} onChangeText={state.onChange} autoCapitalize="none" {...other} />
          {right}
        </Item>
        {state.hasError &&
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{state.error}</Text>
          </View>}
      </View>
    );
  }
};
