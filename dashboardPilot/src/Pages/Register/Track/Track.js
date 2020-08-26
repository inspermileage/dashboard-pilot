import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';

export default function Track(props) {
  const {setTrackName, setTrackDescription} = props;

  return (
    <View>
      <InputBasic
        label="Track"
        height={40}
        type="default"
        onChangeText={(e) => {
          setTrackName(e);
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setTrackDescription(e);
        }}
      />
    </View>
  );
}
