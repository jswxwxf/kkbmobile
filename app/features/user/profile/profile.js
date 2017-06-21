import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Icon,
  Body,
  Right,
  Text,
  Separator,
  Thumbnail
} from 'native-base';

import { Header, Divider } from 'kkbmobile/app/shared/components';

import styles from './profile-styles';

const ProfileItem = ({ navigation, itemText, itemValue, readonly, onPress, iconSource, last }) => {
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

const AvatarItem = () => {
  return (
    <ListItem icon last style={styles.avatarWrapper}>
      <Body>
        <Text>头像</Text>
      </Body>
      <Right style={styles.avatarWrapper}>
        <Thumbnail resizeMode="contain" source={require('kkbmobile/app/assets/images/default_avatar.png')} />
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  )
};

export default class Profile extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '帐户信息'
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content style={styles.container}>
          <List style={styles.list}>
            <AvatarItem />
            <Divider />
            <ProfileItem itemText="用户名" itemValue="Nicholas" />
            <ProfileItem itemText="修改登录密码" itemValue="点击修改密码" last />
            <Separator bordered>
              <Text>基础资料</Text>
            </Separator>
            <ProfileItem itemText="身份证" itemValue="320212197907230510" />
            <ProfileItem itemText="姓名" itemValue="尼古拉斯" />
            <ProfileItem itemText="补充信息" itemValue="点击补充信息" last onPress={() => navigation.navigate('Detail')} />
            <Separator bordered>
              <Text>绑定设置</Text>
            </Separator>
            <ProfileItem itemText="手机" itemValue="已绑定" iconSource={require('kkbmobile/app/assets/images/ico_phone.png')} />
            <ProfileItem itemText="微信" itemValue="已绑定" iconSource={require('kkbmobile/app/assets/images/ico_wechat.png')} readonly />
            <ProfileItem itemText="新浪微博" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_weibo.png')} readonly />
            <ProfileItem itemText="QQ" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_qq.png')} readonly last />
            <Divider topBorder />
          </List>
        </Content>
      </Container >
    );
  }

}
