import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,

} from 'native-base';

import { Divider } from 'kkbmobile/app/shared/components';

import styles from './styles';

export default class Drive extends Component {

  static navigationOptions = {
    tabBarLabel: '驾龄',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_drive.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <View style={styles.driveContainer}>
            <View style={styles.driveImageWrapper}>
              <Image resizeMode='contain' source={require('./images/upload_drive.png')} style={styles.driveImage} />
            </View>
            <Text style={styles.textCenter}>驾照上传</Text>
            <View style={styles.driveImageWrapper}>
              <Image resizeMode='contain' source={require('./images/sample_drive.png')} style={styles.driveImage} />
            </View>
            <Text style={styles.textCenter}>驾照示意图</Text>
          </View>
        </Content>
      </Container >
    );
  }

}
