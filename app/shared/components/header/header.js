import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Header as BaseHeader,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon
} from 'native-base';

import styles from './styles';

const Header = ({ navigation, title }) => (
  <BaseHeader>
    <Left>
      <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </BaseHeader>
)

export default Header;