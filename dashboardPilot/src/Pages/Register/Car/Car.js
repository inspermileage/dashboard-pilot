import React, {useState, useEffect} from 'react';

import {View,Text} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import DropDown from '../../../Components/Dropdown'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../Themes/colors';

export default function Car(props) {
  //const {getCarInfo, getTrackInfo} = getData();
  //const {dispatch} = props;
  const dispatch = useDispatch();
  function setData(values, label) {
    dispatch(setCarData({[label]: values}));
  };
  const [data, setRequestData] = useState([]);
  //console.log("Printando data "+data);
  async function getCaarInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/car/')
      .then(function (response){
        response.data.map((datae,key)=> {
          setRequestData(data => [...data, {label: datae.name, value: "bla", icon: () => <Icon name="flag" size={18} color={colors.light_orange} />}])
        });
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado no getCarInfo :(');
      });
    };
    getCaarInfo();
  return (
    <View>
      <InputBasic
        label="Car"
        height={40}
        type="default"
        onChangeText={(e) => {
          setData(e, 'name');
        }}
      />
      {data.length >0 ? <DropDown
        label="Car"
        height={40}
        data = {data}
        onChangeItem={item => setData(item.value,'name')}
        defaultValue="bla" />: <View></View>}
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
