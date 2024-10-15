import React from "react";
import { StatusBar } from "react-native";

import AppNavigation from "./src/common/routes/AppNavigation";
import ExpensesProvider from "./src/common/store/ExpensesContext";

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <ExpensesProvider>
        <AppNavigation />
      </ExpensesProvider>
    </>
  );
}

export default App;
