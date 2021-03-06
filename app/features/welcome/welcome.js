import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Title,
  Left,
  Icon,
  Right,
  Grid,
  Col,
  List,
  ListItem,
  Thumbnail,
  H3
} from "native-base";
import Swiper from 'react-native-swiper';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { Header, Divider } from 'kkbmobile/app/shared/components';

import styles from './welcome-styles';

export default class Welcome extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '开开保',
    header: (
      <Header navigation={navigation} title="开开保" />
    )
  });

  utilService = inject(TYPES.utilService);

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content style={styles.container}>
          <Swiper style={styles.slideContainer} height={200} autoplay={true} showsButtons={true}>
            <View>
              <Image resizeMode="stretch" source={require('kkbmobile/app/assets/images/banner_auto.png')} style={styles.slideImage} />
            </View>
            <View>
              <Image resizeMode="stretch" source={require('kkbmobile/app/assets/images/banner_delay.png')} style={styles.slideImage} />
            </View>
            <View>
              <Image resizeMode="stretch" source={require('kkbmobile/app/assets/images/banner_hunt.png')} style={styles.slideImage} />
            </View>
            <View>
              <Image resizeMode="stretch" source={require('kkbmobile/app/assets/images/banner_talk.png')} style={styles.slideImage} />
            </View>
          </Swiper>

          <Grid style={styles.actionContainer}>
            <Col>
              <TouchableOpacity onPress={() => this.utilService.nav('Eval', navigation)} style={styles.actionWrapper}>
                <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/ico_pre_eval.png')} style={styles.actionImage} />
                <Text style={styles.actionText}>保费试算</Text>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity onPress={() => this.utilService.nav('InquiryBasic', navigation)} style={styles.actionWrapper}>
                <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/ico_inquiry.png')} style={styles.actionImage} />
                <Text style={styles.actionText}>车险报价</Text>
              </TouchableOpacity>
            </Col>
            <Col style={styles.actionWrapper}>
              <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/ico_drive_rating.png')} style={styles.actionImage} />
              <Text style={styles.actionText}>驾驶评级</Text>
            </Col>
            <Col style={[styles.actionWrapper, styles.actionWrapperLast]}>
              <Image resizeMode="contain" source={require('kkbmobile/app/assets/images/ico_activities.png')} style={styles.actionImage} />
              <Text style={styles.actionText}>活动专区</Text>
            </Col>
          </Grid>

          <List style={styles.insuranceContainer}>
            <ListItem thumbnail first>
              <Left>
                <Image source={require('kkbmobile/app/assets/images/hunt_driver.png')} style={styles.insuranceImage} />
              </Left>
              <Body style={styles.insuranceTextWrapper}>
                <Text>优选车险</Text>
                <Text note style={styles.assertive}>最高省40% </Text>
                <Text note>寻找好车主，保费直降</Text>
              </Body>
              <Right>
                <Button danger><Text style={styles.insuranceButton}>模拟评测</Text></Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Image source={require('kkbmobile/app/assets/images/kkb15.png')} style={styles.insuranceImage} />
              </Left>
              <Body style={styles.insuranceTextWrapper}>
                <Text>绿色车险</Text>
                <Text note style={styles.assertive}>最高省40% </Text>
                <Text note>天天现金奖励，持续三个月</Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem thumbnail last>
              <Left>
                <Image source={require('kkbmobile/app/assets/images/device.png')} style={styles.insuranceImage} />
              </Left>
              <Body style={styles.insuranceTextWrapper}>
                <Text>智能盒子</Text>
                <Text note style={styles.assertive}>激活快速通道</Text>
                <Text note>收到盒子了吗？赶紧激活吧！</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </Content>
      </Container >
    );
  }

}