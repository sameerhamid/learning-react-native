import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from '../../screens/AllPlaces';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigate, navigationRef} from '../utils/navigatorUtils';
import AddPlaces from '../../screens/AddPlaces';
import IconButton from '../components/ui/IconButton';
import {Images} from '../constants/images';
import {Colors} from '../constants/Colors';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
        <Stack.Screen
          name={NavScreenTags.ALL_PLACES}
          component={AllPlaces}
          options={{
            title: 'Your Favourite Places',
            headerRight: ({tintColor}) => (
              <IconButton
                imageSrc={Images.ADD}
                color={tintColor}
                onPress={() => {
                  navigate(NavScreenTags.ADD_PLACES);
                }}
                size={20}
              />
            ),
          }}
        />
        <Stack.Screen
          name={NavScreenTags.ADD_PLACES}
          component={AddPlaces}
          options={{
            title: 'Add a new Place',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
