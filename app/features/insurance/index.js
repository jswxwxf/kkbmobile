import { StackNavigator } from "react-navigation";

import Product from './product/product';

const InsuranceNavigator = StackNavigator(
  {
    InsuranceHome: { screen: Product },
  }
);

export { InsuranceNavigator };

