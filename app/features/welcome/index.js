import { StackNavigator } from "react-navigation";

import { Eval } from 'kkbmobile/app/features/insurance';
import { Basic } from 'kkbmobile/app/features/order';

import Menu from './menu';
import Welcome from './welcome';
import Register from './register';
import Login from './login';
import Forget from './forget';

const WelcomeNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Eval: { screen: Eval },
    InquiryBasic: { screen: Basic }
  }
);

export { Menu, WelcomeNavigator, Register, Login, Forget };