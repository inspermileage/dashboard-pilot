import React, {useState, useEffect} from 'react';

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputBasic from '../../../../Components/InputBasic';
import Cadastro from '../../../../Components/Cadastro';
import colors from '../../../../Themes/colors';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {useDateFormated} from '../../../../Functions/date';
import {Alert} from 'react-native';

import axios from 'axios';
export default function CarRegister(props) {
  const navigation = useNavigation();
  const [car, setCar] = useState("");
  const [description, setDescription] = useState("");
  async function sendCarInfo(car,description) {
    const date = new Date();
    const dateFormated = useDateFormated(date);
    const dadosCar = {
      creation_date: dateFormated,
      description: description,
      name: car,
    };
    console.log(dadosCar);
    

    await axios
      .post('https://apirestmileage.herokuapp.com/api/car/', dadosCar)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado :(');
      });
  }
  return (
    <View style={styles.container}>
      <Cadastro/>
      <ScrollView>
      <InputBasic
        label="Car"
        height={40}
        type="default"
        onChangeText={(e) => {
          setCar(e);
        }}
      />
      <View style={styles.header}>
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setDescription(e);
        }}
        />
        <TouchableOpacity
        style={{marginRight: 25}}
        onPress={() => {
          sendCarInfo(car,description)
          navigation.goBack();
        }}>
        <Icon name={'save'} size={65} color={colors.orange} />
        </TouchableOpacity>
        </View>
        </ScrollView>
        
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  
});

