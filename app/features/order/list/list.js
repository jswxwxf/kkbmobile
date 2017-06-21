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

import styles from './list-styles';

export default class List extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '我的定单',
    header: (
      <Header navigation={navigation} title="我的定单" />
    )
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>我的定单页</Text>
        </Content>
      </Container >
    );
  }

}
