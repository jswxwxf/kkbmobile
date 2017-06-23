import React, { Component } from 'react';
import {
  View,
  Platform
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Tabs,
  Tab,
  Thumbnail,
  TabHeading,
  Icon,
  ListItem,
  Body,
  Left,
  Right,
  Form
} from 'native-base';

import { Header, Divider, InputItem, SelectItem, PickerItem } from 'kkbmobile/app/shared/components';

import styles from './detail-styles';

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

export default class Detail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '补充信息'
  });

  renderTab(title, iconSource) {
    return (
      <View style={styles.tabWrapper}>
        {Platform.OS == 'ios' && <Thumbnail resizeMode="contain" style={styles.tabIcon} source={iconSource} />}
        <Text style={styles.tabText}>{title}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Tabs>
          <Tab heading={this.renderTab('家庭', require('./images/ico_home.png'))}>
            <Content style={styles.container}>
              <Form style={styles.list}>
                <SelectItem label="婚姻状况" placeholder="请选择" items={['未婚', '已婚', '离异', '丧偶']} />
                <PickerItem label="子女状况" placeholder="请选择" items={[['', '1男', '2男'], ['', '1女', '2女']]} last />
              </Form>
            </Content>
          </Tab>
          <Tab heading={this.renderTab('驾龄', require('./images/ico_drive.png'))}>
            <Content style={styles.container} padder>
              <Text>驾龄</Text>
            </Content>
          </Tab>
          <Tab heading={this.renderTab('信用', require('./images/ico_credit.png'))}>
            <Content style={styles.container} padder>
              <Text>信用</Text>
            </Content>
          </Tab>
          <Tab heading={this.renderTab('工作教育', require('./images/ico_jobedu.png'))}>
            <Content style={styles.container}>
              <Form style={styles.list}>
                <SelectItem label="单位性质" placeholder="请选择" items={['机关', '企业', '事业单位']} />
                <InputItem label="单位名称" placeholder="请输入所在单位" />
                <InputItem label="工作职责" placeholder="请输入工作职责" last />
                <Divider />
                <SelectItem label="最高学历" placeholder="请选择" items={['小学', '初中', '高中', '大学', '硕士', '博士']} />
                <InputItem label="毕业学校" placeholder="请输入毕业学校" />
                <InputItem label="毕业专业" placeholder="请输入毕业专业" last />
              </Form>
            </Content>
          </Tab>
          <Tab heading={this.renderTab('社交', require('./images/ico_social.png'))}>
            <Content style={styles.container}>
              <Form style={styles.list}>
                <DetailItem itemText="微信" itemValue="已绑定" iconSource={require('kkbmobile/app/assets/images/ico_wechat.png')} readonly />
                <DetailItem itemText="新浪微博" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_weibo.png')} readonly />
                <DetailItem itemText="QQ" itemValue="未绑定" iconSource={require('kkbmobile/app/assets/images/ico_qq.png')} readonly last />
              </Form>
            </Content>
          </Tab>
        </Tabs>
      </Container >
    );
  }

}
