import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';

import { Header, Divider } from 'kkbmobile/app/shared/components';

import styles from './device-styles';

export default class Device extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '设备信息'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>设备信息页</Text>
        </Content>
      </Container >
    );
  }

}
