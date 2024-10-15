import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavScreenTags } from "../constansts/NavScreenTags";
import BottomTabsNavigatin from "./BottomTabsNavigatin";
import ManageExpenses from "../../screens/ManageExpenses";
import { LightTheme } from "../themes/lightTheme";
import { navigationRef } from "../utils/navigatorUtils";
import { GlobalStyles } from "../constansts/stylex";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { DarkTheme } from "../themes/darkTheme";
import ExpensesProvider from "../store/ExpensesContext";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const isDarkMode = useColorScheme() === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;
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
          //@ts-ignore
          component={ManageExpenses}
          options={{
            headerShown: false,
            presentation: "containedModal",
            gestureEnabled: true, // Enable gesture-based dismissal
            gestureDirection: "vertical", // Allow dragging down
            animation: "slide_from_bottom",
            contentStyle: {
              marginTop: 50, // Set spacing from the top
              borderTopLeftRadius: 20, // Rounded corners for a floating effect
              borderTopRightRadius: 20,
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <ExpensesProvider>
        <RootStack />
      </ExpensesProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
