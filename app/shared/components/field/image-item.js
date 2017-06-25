import React, { Component } from 'react';
import {
  View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { inject, TYPES } from 'kkbmobile/app/config/inject';

import styles from './styles';

export default class ImageItem extends Component {

  utilService = inject(TYPES.utilService);

  pickImage = () => {
    this.utilService.pickImage(this.props.label);
  };

  render() {
    const children = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       onPress: this.pickImage
     })
    );
    return (
      <View>
        {children}
      </View>
    )
  }

};
