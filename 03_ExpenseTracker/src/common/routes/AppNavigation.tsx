import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavScreenTags} from '../constansts/NavScreenTags';
import BottomTabsNavigatin from './BottomTabsNavigatin';
import ManageExpenses from '../../screens/ManageExpenses';
const Stack = createStackNavigator();
const AppNavigation = () => {
  const RootStack = (): React.ReactElement => {
    return (
      <Stack.Navigator initialRouteName={NavScreenTags.BOTTOM_TAB_NAV}>
        <Stack.Screen
          name={NavScreenTags.BOTTOM_TAB_NAV}
          component={BottomTabsNavigatin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavScreenTags.MANAGE_EXPENSES}
          component={ManageExpenses}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
