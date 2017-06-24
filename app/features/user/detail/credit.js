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

export default class Credit extends Component {

  static navigationOptions = {
    tabBarLabel: '信用',
    tabBarIcon: ({ tintColor }) => (
      <Image resizeMode='contain' source={require('./images/ico_credit.png')} style={[styles.tabIcon]} />
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content padder>
          <View style={styles.creditContainer}>
            <View style={styles.creditImageWrapper}>
              <Image resizeMode='stretch' source={require('./images/upload_credit.png')} style={styles.creditImage} />
              <Text style={styles.textCenter}>芝麻信用上传</Text>
            </View>
            <View style={styles.creditImageWrapper}>
              <Image resizeMode='stretch' source={require('./images/sample_credit.png')} style={styles.creditImage} />
              <Text style={styles.textCenter}>芝麻信用示意图</Text>
            </View>
          </View>
        </Content>
      </Container >
    );
  }

}
