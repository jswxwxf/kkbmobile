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

import styles from './travel-styles';

export default class Travel extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '行程',
    header: (
      <Header navigation={navigation} title="行程" />
    )
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="行程" />
        <Content padder>
          <Text>驾驶评分页</Text>
        </Content>
      </Container >
    );
  }

}
