import React, { Component } from 'react';
import {
  Button,
  Text
} from 'native-base';

import styles from './styles';

const NavLink = ({ navigation, to, children }) => (
  <Button transparent onPress={() => navigation.navigate(to)}>
    <Text>{children}</Text>
  </Button>
);

export default NavLink;