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
} from 'native-base';
import { observer } from 'mobx-react';

import {
  Header,
  InputItem,
  NavLink,
  Divider
} from 'kkbmobile/app/shared/components';
import { UserStore } from 'kkbmobile/app/shared/stores';

import styles from './login-styles';
import LoginForm from './login-form';

@observer
export default class Login extends Component {

  stores = [UserStore];

  form = new LoginForm();

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="登录" />
        <Content style={styles.background}>
          <Form>
            <Divider bottomBorder />
            <InputItem label="手机" placeholder="请输入用户名或注册手机" state={this.form.name} />
            <InputItem label="密码" placeholder="请设置密码" last secureTextEntry state={this.form.password} />
            <View style={styles.linkContainer}>
              <NavLink navigation={navigation} to="Register">注册</NavLink>
              <NavLink navigation={navigation} to="ForgetPassword">忘记密码？</NavLink>
            </View>
            <Button block primary style={styles.marginHorizontal} onPress={this.form.handleSubmit}>
              <Text>确定</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  
}
