import React, {useState, useEffect} from 'react';

import {View,Text} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';
import {useDispatch} from 'react-redux';
import {getData,getCarTest} from '../../../Functions/axios';
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
  const data1 = [];
  const [data, setRequestData] = useState([]);
  //console.log("Printando data "+data);
  async function getCaarInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/car/')
      .then(function (response){
        //console.log(response.data);
        //console.log("print da data")
        response.data.map((data,key)=> {
          //console.log(data.name);
        });
        setRequestData(response.data);
        //console.log(response.data[0]);
        //setRequestData(response.data)
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado no getCarInfo :(');
      });
    };
    getCaarInfo();
  // getCarInfo().map(data =>{
  //   console.log(data.name);
  // });
  
  // let data=[
  //   {label: 'Test', value: 'Test', icon: () => <Icon name="flag" size={18} color={colors.light_orange} />},
  //   {label: 'Competition', value: 'Competition', icon: () => <Icon name="flag" size={18} color={colors.orange} />},
  //   {label: 'Inspection', value: 'Inspection', icon: () => <Icon name="flag" size={18} color={colors.red} />},
  // ];
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
      {/* <DropDown
        label="Car"
        height={40}
        data = {data}
        onChangeItem={item => setData(item.value,'name')}
        defaultValue={'Test'}
      /> */}
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
