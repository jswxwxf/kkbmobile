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

import styles from './eval-styles';

export default class Eval extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '保费试算'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>保费试算页</Text>
        </Content>
      </Container >
    );
  }

}
