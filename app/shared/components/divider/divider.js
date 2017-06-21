import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Separator
} from 'native-base';

import styles from './styles';

const Divider = ({ small, topBorder, bottomBorder }) => {
  let height = 14;
  let style = styles.verticalBorder;
  if (topBorder) style = styles.topBorder;
  if (bottomBorder) style = styles.bottomBorder;
  style = { ...style, height };
  return (
    <Separator style={style}  ></Separator>
  );
};

export default Divider;