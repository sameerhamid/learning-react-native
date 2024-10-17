import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllPlaces from '../../screens/AllPlaces';
import {NavScreenTags} from '../constants/navScreenTags';
import {navigate, navigationRef} from '../utils/navigatorUtils';
import AddPlaces from '../../screens/AddPlaces';
import IconButton from '../components/ui/IconButton';
import {Images} from '../constants/images';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={NavScreenTags.ALL_PLACES}
          component={AllPlaces}
          options={{
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
        <Stack.Screen name={NavScreenTags.ADD_PLACES} component={AddPlaces} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
