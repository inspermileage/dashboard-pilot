import React, {useState} from 'react';
import {View} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {useDispatch} from 'react-redux';
// import {setPhoneData} from '../../../Store/register/actions';

export default function Phone(props) {
  //const {setPhoneNumber} = props;
  // const dispatch = useDispatch();
  // function setData(values, label) {
  //   dispatch(setPhoneData({[label]: values}));
  // }
  return (
    <View>
      <InputBasic
        label="Telefone"
        height={40}
        type="numeric"
        // onChangeText={(e) => {
        //   setData(e, 'phoneNumber');
        // }}
      />
    </View>
  );
}
