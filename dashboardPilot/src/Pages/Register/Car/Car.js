import React, {useState,useEffect} from 'react';

import {View,Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView,VirtualizedList} from 'react-native';
import InputBasic from '../../../Components/InputBasic';
import {setCarData} from '../../../Store/register/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../Themes/colors';
import {useNavigation} from '@react-navigation/native';
export default function Car(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function setData(values, label) {
    dispatch(setCarData({[label]: values}));
  };
  const [data, setRequestData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const[len,setlen]= useState(null);
  const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.car}</Text>
  </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.car === selectedId ? colors.orange: colors.light_orange;

    return (
      <Item
        item={item}
        onPress={() => {setData(item.car,'name'),setSelectedId(item.car)}}
        style={{ backgroundColor }}
      />
    );
  };

  
  async function getCaarInfo(){
    // const [loading, setLoading] = useState(true);
    await axios
      .get('https://apirestmileage.herokuapp.com/api/car/')
      .then(function (response){
        response.data.map((datae,key)=> {
          setRequestData(data => [...data, {car: datae.name, id: datae.id}]);
        });
        setlen(response.data.length)
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
    <View>
      
      <View style= {styles.header}>
      {data.length == len ? <FlatList
      
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.car}
        extraData={selectedId}
      />: <View>
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
  item: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 150,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
  },
});

