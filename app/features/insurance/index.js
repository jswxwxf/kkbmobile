import { StackNavigator } from "react-navigation";

import Product from './product/product';
import Eval from './eval/eval';

const InsuranceNavigator = StackNavigator(
  {
    InsuranceHome: { screen: Product }
  }
);

export { InsuranceNavigator, Eval };

