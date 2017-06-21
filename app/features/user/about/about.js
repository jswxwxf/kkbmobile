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

import styles from './about-styles';

export default class About extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '关于我们'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>关于我们页</Text>
        </Content>
      </Container >
    );
  }

}
