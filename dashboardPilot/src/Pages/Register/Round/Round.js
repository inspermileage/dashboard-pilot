import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Round() {
  const [round, setRound] = useState('');
  const [description, setDescription] = useState('');
  const [reason, setReason] = useState('');
  return (
    <View>
      <InputBasic
        label="Round"
        height={40}
        type="none"
        onChangeText={(e) => {
          setRound(e);
        }}
      />
      <InputBasic
        label="Description"
        height={100}
        type="none"
        onChangeText={(e) => {
          setDescription(e);
        }}
      />
      <InputBasic
        label="Reason"
        height={40}
        type="none"
        onChangeText={(e) => {
          setReason(e);
        }}
      />
    </View>
  );
}
