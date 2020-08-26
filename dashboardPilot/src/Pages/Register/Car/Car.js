import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Car(props) {
  const {setCarName, setCarDescription} = props;

  return (
    <View>
      <InputBasic
        label="Car"
        height={40}
        type="default"
        onChangeText={(e) => {
          setCarName(e);
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setCarDescription(e);
        }}
      />
    </View>
  );
}
