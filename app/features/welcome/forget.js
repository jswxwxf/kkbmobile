import React from 'react';
import { Component } from 'reflux';
import {
  View
} from 'react-native';
import {
  Container,
  Body,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Separator,
  H3
} from 'native-base';
import { observer } from 'mobx-react';

import {
  Header,
  InputItem,
  Hint,
  CountDown
} from 'kkbmobile/app/shared/components';
import { UserStore } from 'kkbmobile/app/shared/stores';

import styles from './forget-styles';
import ForgetForm from './forget-form';

@observer
export default class Forget extends Component {

  stores = [UserStore];

  form = new ForgetForm();

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="重置密码" />
        <Content style={styles.whiteBg}>
          <Form>
            <InputItem label="手机号" placeholder="请输入注册手机" state={this.form.mobile} labelStyle={styles.label} />
            <InputItem label="验证码" placeholder="请输入验证码" state={this.form.code} labelStyle={styles.label}
              right={
                <CountDown onPress={(e, self) => this.form.sendCode(e, self)} />
              } />
            <InputItem label={`密${' '.repeat(4)}码`} placeholder="请设置密码" last secureTextEntry state={this.form.password} labelStyle={styles.label} />
            <Hint>
              密码只能使用字母和数字，长度为6-20位，字母区分大小写
            </Hint>
            <Button block primary style={styles.margin} onPress={this.form.handleSubmit}>
              <Text>确定</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }

}
