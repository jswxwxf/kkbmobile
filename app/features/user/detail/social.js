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

export default class Social extends Component {

  static navigationOptions = {
    tabBarLabel: '社交',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_social.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>Social</Text>
        </Content>
      </Container >
    );
  }

}
