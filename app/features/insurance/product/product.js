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

import styles from './product-styles';

export default class List extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '产品中心',
    header: (
      <Header navigation={navigation} title="产品中心" />
    )
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>产品中心页</Text>
        </Content>
      </Container >
    );
  }

}
