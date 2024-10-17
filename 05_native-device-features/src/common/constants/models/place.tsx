import {ImageSourcePropType} from 'react-native';

export interface Place {
  id: string;
  title: string;
  imageUri: ImageSourcePropType;
  address: string;
  location: {lat: number; lang: number};
}
