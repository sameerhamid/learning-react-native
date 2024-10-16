import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/common/components/routes/AppNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
