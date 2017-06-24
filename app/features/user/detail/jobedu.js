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

export default class JobEdu extends Component {

  static navigationOptions = {
    tabBarLabel: '工作教育',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_jobedu.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <Text>JobEdu</Text>
        </Content>
      </Container >
    );
  }

}
