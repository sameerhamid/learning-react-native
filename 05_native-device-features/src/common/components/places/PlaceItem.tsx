import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Place} from '../../constants/models/place';

interface PlaceItemPropTypes {
  place: Place;
  onSelect?: () => void;
}
const PlaceItem = ({place, onSelect}: PlaceItemPropTypes) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image source={place.imageUri} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
