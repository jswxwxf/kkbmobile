import { StackNavigator } from "react-navigation";

import Home from './home/home';
import Profile from './profile/profile';
import Wallet from './wallet/wallet';
import Device from './device/device';
import Car from './car/car';
import About from './about/about';
import Travel from './travel/travel';
import Detail from './detail/detail';

const UserNavigator = StackNavigator(
  {
    UserHome: { screen: Home },
    Profile: { screen: Profile },
    Wallet: { screen: Wallet },
    Device: { screen: Device },
    Car: { screen: Car },
    About: { screen: About },
    Detail: { screen: Detail },
  }
);

export { UserNavigator, Travel };

