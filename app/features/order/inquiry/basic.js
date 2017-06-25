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

import styles from './styles';

export class Basic extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '车险报价'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>基础页</Text>
        </Content>
      </Container >
    );
  }

}
