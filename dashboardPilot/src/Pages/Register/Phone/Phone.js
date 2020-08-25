import React from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Phone() {
  return (
    <View>
      <InputBasic label="Telefone" height={40} type="telephoneNumber" />
    </View>
  );
}
