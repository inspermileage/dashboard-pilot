import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Track() {
  const [trackName, setTrackName] = useState('');
  const [trackDescription, setTrackDescription] = useState('');

  return (
    <View>
      <InputBasic
        label="Track"
        height={40}
        type="none"
        onChangeText={(e) => {
          setTrackName(e);
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="none"
        onChangeText={(e) => {
          setTrackDescription(e);
        }}
      />
    </View>
  );
}
