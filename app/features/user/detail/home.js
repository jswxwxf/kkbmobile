import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Form
} from 'native-base';

import { InputItem, SelectItem, PickerItem } from 'kkbmobile/app/shared/components';

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
        <Content>
          <Form style={styles.list}>
            <SelectItem label="婚姻状况" placeholder="请选择" items={['未婚', '已婚', '离异', '丧偶']} />
            <PickerItem label="子女状况" placeholder="请选择" items={[['', '1男', '2男'], ['', '1女', '2女']]} last />
          </Form>
        </Content>
      </Container >
    );
  }

}
