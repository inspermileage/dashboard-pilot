import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setTrackData} from '../../../Store/register/actions';

export default function Track(props) {
  const {dispatch} = props;

  function setData(values, label) {
    dispatch(setTrackData({[label]: values}));
  }

  return (
    <View>
      <InputBasic
        label="Track"
        height={40}
        type="default"
        onChangeText={(e) => {
          setData(e, 'name');
        }}
      />
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setData(e, 'description');
        }}
      />
    </View>
  );
}
