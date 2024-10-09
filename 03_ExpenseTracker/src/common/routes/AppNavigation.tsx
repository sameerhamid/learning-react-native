import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavScreenTags } from "../constansts/NavScreenTags";
import BottomTabsNavigatin from "./BottomTabsNavigatin";
import ManageExpenses from "../../screens/ManageExpenses";
import { LightTheme } from "../themes/lightTheme";
import { navigationRef } from "../utils/navigatorUtils";
import { GlobalStyles } from "../constansts/stylex";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const RootStack = (): React.ReactElement => {
    return (
      <Stack.Navigator
        initialRouteName={NavScreenTags.BOTTOM_TAB_NAV}
        screenOptions={() => ({
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
        })}
      >
        <Stack.Screen
          name={NavScreenTags.BOTTOM_TAB_NAV}
          component={BottomTabsNavigatin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavScreenTags.MANAGE_EXPENSES}
          component={ManageExpenses}
          options={{
            headerShown: false,
            presentation: "containedModal",
            animation: "slide_from_bottom",
            contentStyle: {
              marginTop: 50, // Set spacing from the top
              borderTopLeftRadius: 20, // Rounded corners for a floating effect
              borderTopRightRadius: 20,
              backgroundColor: "white", // Set modal background color
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={LightTheme} ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
