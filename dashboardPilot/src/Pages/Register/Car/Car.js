import React, {useState,useEffect} from 'react';

import {View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import DropDown from '../../../Components/Dropdown'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../Themes/colors';
import {useNavigation} from '@react-navigation/native';
export default function Car(props) {
  const navigation = useNavigation();
  //const {getCarInfo, getTrackInfo} = getData();
  //const {dispatch} = props;
  const dispatch = useDispatch();
  function setData(values, label) {
    dispatch(setCarData({[label]: values}));
  };
  const [data, setRequestData] = useState([]);
  // Maneira de utilizar um default value no dropdown (evitando erro)
  const [defaultvalue, setdefaultvalue] = useState([]);
  //console.log("Printando data "+data);

  
  async function getCaarInfo(){
    // const [loading, setLoading] = useState(true);
    await axios
      .get('https://apirestmileage.herokuapp.com/api/car/')
      .then(function (response){
        response.data.map((datae,key)=> {
          setRequestData(data => [...data, {label: datae.name, value: datae.name, icon: () => <Icon name="flag" size={18} color={colors.light_orange} />}]);
          setdefaultvalue(datae.name);
          // setLoading(false);
        });
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Não foi possivel pegar os carros :(');
      });
    };


  
  useEffect(() => {
    getCaarInfo();
    console.log(data);
  }, []);
  
  return (
    <ScrollView>
      {/* <InputBasic
        label="Car"
        height={40}
        type="default"
        onChangeText={(e) => {
          setData(e, 'name');
        }}
      /> */}
      <View style= {styles.header}>
      {data.length >0 ? <DropDown
        label="Car"
        height={40}
        data = {data}
        placeholder = "Selecione um carro"
        onChangeItem={item => setData(item.value,'name')}
        /> : <View>
          <Text style={styles.label}>Carregando os dados</Text>
          </View>}
      <TouchableOpacity
        style={{marginRight: 25}}
        onPress={() => {
          navigation.navigate('CarRegister')
        }}>
        <Icon name={'add-circle'} size={65} color={colors.orange} />
        </TouchableOpacity>
      </View>
      <InputBasic
        label="Description"
        height={120}
        type="default"
        onChangeText={(e) => {
          setData(e, 'description');
        }}
        />

  </ScrollView>

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
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    color: colors.white,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

