import { StackNavigator } from "react-navigation";

import List from './list/list';

const OrderNavigator = StackNavigator(
  {
    OrderHome: { screen: List },
  }
);

export { Basic } from './inquiry';
export { OrderNavigator };

