import React, {useState,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setTrackData} from '../../../Store/register/actions';
import axios from 'axios';
import DropDown from '../../../Components/Dropdown'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../Themes/colors';
import {useNavigation} from '@react-navigation/native';

export default function Track(props) {
  const {dispatch} = props;
  const navigation = useNavigation();
  const [data, setRequestData] = useState([]);

  function setData(values, label) {
    dispatch(setTrackData({[label]: values}));
  }
  async function getTrackInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/track/')
      .then(function (response){
        response.data.map((datae,key)=> {
          setRequestData(data => [...data, {label: datae.name, value: "bla", icon: () => <Icon name="flag" size={18} color={colors.light_orange} />}]);
          // setLoading(false);
        });
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Não foi possivel pegar as pistas :(');
      });
  };
  useEffect(() => {
    getTrackInfo();
    console.log(data);
  }, []);

  return (
    <View>
      <View style= {styles.header}>
      {data.length >0 ? <DropDown
        label="Track"
        height={40}
        data = {data}
        onChangeItem={item => setData(item.value,'name')}
        placeholder="Selecione uma pista"/>
        : <View>
          <Text style={styles.label}>Carregando os dados</Text>
          </View>}
      <TouchableOpacity
        style={{marginRight: 25}}
        onPress={() => {
          navigation.navigate('TrackRegister')
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
