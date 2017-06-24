import { Platform } from 'react-native';
import { TabNavigator } from "react-navigation";

import styles from './styles';

import Home from './home';
import Drive from './drive';
import Credit from './credit';
import JobEdu from './jobedu';
import Social from './social';

export const DetailNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Drive: { screen: Drive },
    Credit: { screen: Credit },
    JobEdu: { screen: JobEdu },
    Social: { screen: Social },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black',
      inactiveTintColor: styles.colors.$placeholder,
      activeBackgroundColor: styles.colors.$light,
      labelStyle: {
        fontSize: 12,
        paddingVertical: Platform.OS == 'ios' ? 5 : 0
      },
      style: {
        backgroundColor: styles.colors.$stable,
        height: 65,
      },
      tabStyle: {
        padding: 0,
        paddingVertical: 5,
      },
      indicatorStyle: {
        backgroundColor: styles.colors.$balanced
      }
    }
  }
);
