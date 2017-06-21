import React from 'react';
import { Component } from 'reflux';
import {
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Body,
  Left,
  Right,
  Thumbnail,
} from "native-base";
import Spinner from 'react-native-loading-spinner-overlay';
import { observer } from 'mobx-react';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { userActions } from 'kkbmobile/app/shared/actions';
import { UserStore, AppStore } from 'kkbmobile/app/shared/stores';

import styles from './menu-styles';

@observer
export default class Menu extends Component {

  utilService = inject(TYPES.utilService);
  storeService = inject(TYPES.storeService);

  user;

  stores = [UserStore, AppStore];

  componentDidMount() {
    userActions.checkLogin();
    this.unsubscribe = userActions.userChanged.listen((user) => {
      this.user = user;
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderHeader() {
    const { navigation } = this.props;
    if (this.user) {
      return (<View style={styles.headerContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => this.handleNavigation('Profile')}>
          <Thumbnail source={require('kkbmobile/app/assets/images/default_avatar.png')} />
          <Text style={styles.name}>{this.user.name}</Text>
        </TouchableOpacity>
        <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/hotline.png')} style={styles.hotline} />
      </View>);
    }
    return (<View style={styles.headerContainer}>
      <View style={styles.buttonContainer}>
        <Button light style={styles.headerButton} onPress={() => navigation.navigate('Register')}><Text>注册</Text></Button>
        <Button style={styles.headerButton} onPress={() => navigation.navigate('Login')}><Text>登录</Text></Button>
      </View>
      <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/hotline.png')} style={styles.hotline} />
    </View>)
  }

  handleNavigation = (toScreen) => {
    const { activeItemKey, state, navigation } = this.props;
    if (activeItemKey == toScreen) return navigation.navigate("DrawerClose");
    navigation.navigate(toScreen);
  };

  renderMenuItem(toScreen, menuText, iconSource) {
    return (
      <ListItem style={styles.menuItem} icon last onPress={() => this.handleNavigation(toScreen)}>
        <Left>
          <Thumbnail resizeMode="contain" square style={styles.menuIcon}
            source={iconSource} />
        </Left>
        <Body>
          <Text>{menuText}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <Image resizeMode="stretch" style={styles.headerBg} source={require('kkbmobile/app/assets/images/menubg.png')}>
            {this.renderHeader()}
          </Image>
          <List>
            {this.renderMenuItem('Welcome', '首页', require(`kkbmobile/app/assets/images/menu_home.png`))}
            {this.renderMenuItem('InsuranceHome', '产品中心', require(`kkbmobile/app/assets/images/menu_product.png`))}
            {this.renderMenuItem('TravelHome', '驾驶评分', require(`kkbmobile/app/assets/images/menu_travel.png`))}
            {this.renderMenuItem('Wallet', '我的钱包', require(`kkbmobile/app/assets/images/menu_wallet.png`))}
            {this.renderMenuItem('UserHome', '用户中心', require(`kkbmobile/app/assets/images/menu_user.png`))}
            {this.renderMenuItem('OrderHome', '我的订单', require(`kkbmobile/app/assets/images/menu_order.png`))}
            {this.renderMenuItem('About', '关于开开保', require(`kkbmobile/app/assets/images/menu_about.png`))}
          </List>
        </Content>
        <Spinner visible={AppStore.appState.loading} textContent={AppStore.appState.loadingText} overlayColor="rgba(0, 0, 0, 0)" textStyle={styles.spinnerText} />
      </Container>
    );
  }

}
