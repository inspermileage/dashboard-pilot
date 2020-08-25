import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Round() {
  return (
    <View>
      <InputBasic label="Round" height={40} type="none" />
      <InputBasic label="Description" height={100} type="none" />
      <InputBasic label="Reason" height={40} type="none" />
    </View>
  );
}
