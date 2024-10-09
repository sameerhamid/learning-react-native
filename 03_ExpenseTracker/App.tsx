import React from "react";

import { StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import AppNavigation from "./src/common/routes/AppNavigation";
import ExpensesProvider from "./src/common/store/ExpensesContext";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ExpensesProvider>
        <AppNavigation />
      </ExpensesProvider>
    </>
  );
}

export default App;
