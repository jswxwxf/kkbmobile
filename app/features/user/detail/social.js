import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  ListItem,
  Body,
  Left,
  Thumbnail,
  Right,
  Icon
} from 'native-base';

import styles from './styles';

const DetailItem = ({ navigation, itemText, itemValue, readonly, onPress, iconSource, last }) => {
  const style = readonly ? { color: 'transparent' } : null;
  return (
    <ListItem icon last={last} onPress={onPress}>
      {iconSource && <Left>
        <Thumbnail resizeMode="contain" style={styles.icon} source={iconSource} />
      </Left>}
      <Body>
        <Text>{itemText}</Text>
      </Body>
      <Right>
        <Text>{itemValue}</Text>
        <Icon name="arrow-forward" style={style} />
      </Right>
    </ListItem>
  );
};

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
        <Content>
          <Form style={styles.list}>
            <DetailItem itemText="微信" itemValue="已绑定" iconSource={require('kkbmobile/app/assets/images/ico_wechat.png')} readonly />
            <DetailItem itemText="新浪微博" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_weibo.png')} readonly />
            <DetailItem itemText="QQ" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_qq.png')} readonly last />
          </Form>
        </Content>
      </Container >
    );
  }

}
