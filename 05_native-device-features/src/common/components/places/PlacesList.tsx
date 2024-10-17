import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Place} from '../../constants/models/place';
import PlaceItem from './PlaceItem';
import {Colors} from '../../constants/Colors';

interface PlacesListPropTypes {
  places?: Place[] | [];
}

const PlacesList = ({places}: PlacesListPropTypes) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.falllbackTxt}>
          No Places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      renderItem={({item}) => <PlaceItem place={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  falllbackTxt: {
    fontSize: 20,
    color: Colors.primary200,
  },
});
