import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Text
} from 'native-base';

import styles from './styles';

export default class Drive extends Component {

  static navigationOptions = {
    tabBarLabel: '驾龄',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_drive.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>Drive</Text>
        </Content>
      </Container >
    );
  }

}
