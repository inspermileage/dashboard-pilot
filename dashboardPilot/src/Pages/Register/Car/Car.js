import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Car() {
  const [carName, setCarName] = useState('');
  const [carDescription, setCarDescription] = useState('');

  return (
    <View>
      <InputBasic
        label="Car"
        height={40}
        type="none"
        onChangeText={(e) => {
          setCarName(e);
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="none"
        onChangeText={(e) => {
          setCarDescription(e);
        }}
      />
    </View>
  );
}
