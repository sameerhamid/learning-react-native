import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const onTitleChageHandler = (text: string) => {
    setEnteredTitle(text);
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={enteredTitle}
          onChangeText={onTitleChageHandler}
          style={styles.input}
        />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,

    padding: 8,

    borderBottomColor: Colors.primary700,
    borderWidth: 2,
    backgroundColor: Colors.primary100,
    fontSize: 18,
  },
});
