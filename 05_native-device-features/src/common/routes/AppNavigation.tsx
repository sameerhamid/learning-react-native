import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from '../../screens/AllPlaces';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigationRef} from '../utils/navigatorUtils';
import AddPlaces from '../../screens/AddPlaces';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={NavScreenTags.ALL_PLACES} component={AllPlaces} />
        <Stack.Screen name={NavScreenTags.ADD_PLACES} component={AddPlaces} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
