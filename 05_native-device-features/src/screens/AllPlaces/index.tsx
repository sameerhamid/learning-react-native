import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlacesList from '../../common/components/places/PlacesList';

const AllPlaces = () => {
  return (
    <View style={styles.container}>
      <PlacesList />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
