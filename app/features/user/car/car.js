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

import styles from './car-styles';

export default class Car extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '车辆信息'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>车辆信息页</Text>
        </Content>
      </Container >
    );
  }

}
