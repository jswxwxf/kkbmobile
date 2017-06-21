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

import styles from './wallet-styles';

export default class Wallet extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '我的钱包'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>User Wallet Page</Text>
        </Content>
      </Container >
    );
  }

}
