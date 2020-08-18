import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Themes/colors';

export default function BottomArrow() {
  function handleLastPage() {}

  function handleNextPage() {}
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLastPage()}>
        <Icon name={'arrow-left'} size={60} color={colors.orange} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNextPage()}>
        <Icon name={'arrow-right'} size={60} color={colors.orange} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: 20,
  },
});
