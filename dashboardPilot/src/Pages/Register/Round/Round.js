import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Round(props) {
  const {setRound, setDescription, setReason} = props;
  return (
    <View>
      <InputBasic
        label="Round"
        height={40}
        type="default"
        onChangeText={(e) => {
          setRound(e);
        }}
      />
      <InputBasic
        label="Description"
        height={100}
        type="default"
        onChangeText={(e) => {
          setDescription(e);
        }}
      />
      <InputBasic
        label="Reason"
        height={40}
        type="default"
        onChangeText={(e) => {
          setReason(e);
        }}
      />
    </View>
  );
}
