import React from 'react';
import {View, TextInput, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../Themes/colors';

export default function InputBasic(props) {
  const {height, label, type} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.internView}>
        <TextInput
          selectionColor={colors.orange}
          textContentType={type}
          style={[styles.input, {height: height}]}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.85,
    alignSelf: 'center',
    marginVertical: 5,
  },
  label: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  internView: {
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    backgroundColor: colors.white,
    width: Dimensions.get('window').width * 0.82,
    paddingHorizontal: 20,
  },
});
