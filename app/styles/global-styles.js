import { StyleSheet } from 'react-native';
import Color from 'color';

const BACKGROUND = '#f0eff5';
const DARK = '#444';
const POSITIVE = '#387ef5';
const ENERGIZED = '#ffc900';
const ASSERTIVE = '#ef473a';
const DANGER = '#d9534f';
const BORDER = '#c9c9c9';
const GAP = 15;

export const globalStyles = {

  colors: {
    $primary: '#2874F0',
    $info: '#62B1F6',
    $success: '#5cb85c',
    $danger: DANGER,
    $warning: '#f0ad4e',
    $sidebar: '#252932',
    $secondary: '#32db64',
    $light: '#fff',
    $stable: '#f8f8f8',
    $positive: POSITIVE,
    $calm: '#11c1f3',
    $balanced: '#33cd5f',
    $energized: ENERGIZED,
    $assertive: ASSERTIVE,
    $royal: '#886aea',
    $dark: DARK,
    $hint: Color(DARK).lighten(0.4),
    $border: BORDER,
    $background: BACKGROUND,
    $placeholder: '#808080',
    $backdrop: 'rgba(0,0,0,0.2)'
  },
  positive: {
    color: POSITIVE
  },
  energized: {
    color: ENERGIZED
  },
  assertive: {
    color: ASSERTIVE
  },
  danger: {
    color: DANGER,
  },
  background: {
    backgroundColor: BACKGROUND
  },
  whiteBg: {
    backgroundColor: 'white'
  },
  label: {
    flex: 0,
    marginRight: 10,
    color: '#575757'
  },
  marginHorizontal: {
    marginHorizontal: GAP
  },
  margin: {
    margin: GAP
  },
  errorText: {
    fontSize: 13,
    color: DANGER
  },
  icon: {
    width: 23
  },
  topBorder: {
    borderTopColor: BORDER,
    borderTopWidth: StyleSheet.hairlineWidth
  },
  bottomBorder: {
    borderBottomColor: BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  verticalBorder: {
    borderTopColor: BORDER,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
};