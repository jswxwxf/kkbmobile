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

export default class Home extends Component {

  static navigationOptions = {
    tabBarLabel: '家庭',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_home.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>Home</Text>
        </Content>
      </Container >
    );
  }

}
