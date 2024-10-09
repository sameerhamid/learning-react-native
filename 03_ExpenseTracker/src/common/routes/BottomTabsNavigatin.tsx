import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavScreenTags } from "../constansts/NavScreenTags";
import AllExpenses from "../../screens/AllExpenses";
import RecentExpenses from "../../screens/RecentExpenses";
import { GlobalStyles } from "../constansts/stylex";
import { Image } from "react-native";
import { Images } from "../constansts/Images";
import IconButton from "../components/ui/IconButton";
const BottomTabs = createBottomTabNavigator();
function BottomTabsNavigatin() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            image={Images.ADD}
            size={24}
            color={tintColor ?? ""}
            onPress={() => {}}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name={NavScreenTags.RECENT_EXPENSES}
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={Images.HOURGLASS}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={NavScreenTags.ALL_EXPENSES}
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={Images.CALANDER}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigatin;
