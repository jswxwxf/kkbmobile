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

import { Divider, InputItem, SelectItem, PickerItem } from 'kkbmobile/app/shared/components';

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
        <Content>
          <Form style={styles.list}>
            <SelectItem label="单位性质" placeholder="请选择" items={['机关', '企业', '事业单位']} />
            <InputItem label="单位名称" placeholder="请输入所在单位" />
            <InputItem label="工作职责" placeholder="请输入工作职责" last />
            <Divider bottomBorder />
            <SelectItem label="最高学历" placeholder="请选择" items={['小学', '初中', '高中', '大学', '硕士', '博士']} />
            <InputItem label="毕业学校" placeholder="请输入毕业学校" />
            <InputItem label="毕业专业" placeholder="请输入毕业专业" last />
          </Form>
        </Content>
      </Container >
    );
  }

}
