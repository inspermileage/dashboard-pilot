import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Track() {
  return (
    <View>
      <InputBasic label="Track" height={40} type="none" />
      <InputBasic label="Description" height={120} type="none" />
    </View>
  );
}
