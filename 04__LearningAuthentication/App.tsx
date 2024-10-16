import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/common/routes/AppNavigation';
import AuthContextProvider from './src/common/store/auth-context';

function App(): React.JSX.Element {
  return (
    <AuthContextProvider>
      <AppNavigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
