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

export default class Credit extends Component {

  static navigationOptions = {
    tabBarLabel: '信用',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_credit.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>Credit</Text>
        </Content>
      </Container >
    );
  }

}
