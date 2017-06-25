import React, { Component } from "react";
import { View, Text } from 'react-native';
import { DrawerNavigator } from "react-navigation";

import 'kkbmobile/app/config/config';
import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { withTheme, withAlert } from 'kkbmobile/app/shared/components';

import { Menu, WelcomeNavigator, Login, Register, Forget } from './features/welcome';
import { UserNavigator, Travel } from './features/user';
import { OrderNavigator } from './features/order';
import { InsuranceNavigator } from './features/insurance';

// import HomeScreen from "./HomeScreen.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
// import Profile from "../ProfileScreen/index.js";

const AppNavigator = DrawerNavigator(
  {
    WelcomeHome: { screen: WelcomeNavigator },
    Login: { screen: Login },
    Register: { screen: Register },
    ForgetPassword: { screen: Forget },
    UserHome: { screen: UserNavigator },
    OrderHome: { screen: OrderNavigator },
    InsuranceHome: { screen: InsuranceNavigator },
    TravelHome: { screen: Travel }
  },
  {
    contentComponent: props => <Menu {...props} />
  }
);

class App extends Component {

  utilService = inject(TYPES.utilService);

  componentDidMount() {
    this.utilService.navigator = this.navigator;
  }

  handleNavChange = (prevState, newState, action) => {
    this.utilService.rememberAction(action);
  };

  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} onNavigationStateChange={this.handleNavChange}>
        <View><Text>Hello</Text></View>
      </AppNavigator>
    );
  }

  // Mounting
  // These methods are called when an instance of a component is being created and inserted into the DOM:

  //   constructor() {}
  //   componentWillMount() {}
  //   render() {}
  //   componentDidMount() {}

  // Updating
  // An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

  //   componentWillReceiveProps() {}
  //   shouldComponentUpdate() {}
  //   componentWillUpdate() {}
  //   render() {}
  //   componentDidUpdate() {}

  // Unmounting
  // This method is called when a component is being removed from the DOM:

  //   componentWillUnmount() {}

  // Other APIs
  // Each component also provides some other APIs:

  //   setState()
  //   forceUpdate()

  // Class Properties

  //   defaultProps
  //   displayName

  // Instance Properties

  //   props
  //   state


}


export default withTheme(App);
