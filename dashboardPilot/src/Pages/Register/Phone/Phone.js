import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Phone(props) {
  const {setPhoneNumber} = props;
  return (
    <View>
      <InputBasic
        label="Telefone"
        height={40}
        type="numeric"
        onChangeText={(e) => {
          setPhoneNumber(e);
        }}
      />
    </View>
  );
}
