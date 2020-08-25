import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Car() {
  return (
    <View>
      <InputBasic label="Car" height={40} type="none" />
      <InputBasic label="Description" height={120} type="none" />
    </View>
  );
}
