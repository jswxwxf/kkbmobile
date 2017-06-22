import React from 'react';
import { Component } from 'reflux';
import {
  View,
  Image
} from 'react-native';
import {
  Container,
  Body,
  Title,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Button,
  Thumbnail
} from 'native-base';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { Header, Divider } from 'kkbmobile/app/shared/components';
import { userActions } from 'kkbmobile/app/shared/actions';
import { UserStore } from 'kkbmobile/app/shared/stores';

import styles from './home-styles';

export default class Home extends Component {

  utilService = inject(TYPES.utilService);

  static navigationOptions = ({ navigation }) => ({
    title: '用户中心',
    header: (
      <Header navigation={navigation} title="用户中心" />
    )
  });

  user;

  stores = [UserStore];

  componentDidMount() {
    userActions.getProfile();
    this.unsubscribe = userActions.userChanged.listen((user) => {
      this.user = user;
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderListItem(toScreen, itemText, iconSource) {
    const { navigation } = this.props;
    return (
      <ListItem icon last onPress={() => this.utilService.nav(toScreen, navigation)}>
        <Left>
          <Thumbnail resizeMode="contain" square style={styles.itemIcon}
            source={iconSource} />
        </Left>
        <Body>
          <Text>{itemText}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content style={styles.container}>
          <View style={styles.avatarContainer}>
            <Thumbnail size={80} source={require('kkbmobile/app/assets/images/default_avatar.png')} />
            <Text style={styles.avatarText}>{this.user ? this.user.name : '...'}</Text>
          </View>
          <List style={styles.list}>
            <Divider></Divider>
            {this.renderListItem('Profile', '帐户信息', require(`kkbmobile/app/assets/images/ico_account.png`))}
            {this.renderListItem('Wallet', '我的钱包', require(`kkbmobile/app/assets/images/ico_wallet.png`))}
            <Divider></Divider>
            {this.renderListItem('Device', '设备信息', require(`kkbmobile/app/assets/images/ico_device.png`))}
            {this.renderListItem('Car', '车辆信息', require(`kkbmobile/app/assets/images/ico_car.png`))}
            <Divider></Divider>
            {this.renderListItem('OrderHome', '我的定单', require(`kkbmobile/app/assets/images/ico_order.png`))}
            <Divider></Divider>
            {this.renderListItem('About', '关于我们', require(`kkbmobile/app/assets/images/ico_about.png`))}
            <Divider></Divider>
          </List>
          <Button light style={styles.button} block onPress={() => userActions.logout()}>
            <Text>注销</Text>
          </Button>
        </Content>
      </Container >
    );
  }

}
