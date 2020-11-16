import React, {useState,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity,Text, FlatList} from 'react-native';
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
  const [selectedId, setSelectedId] = useState(null);
  const[len,setlen]= useState(null);
  async function getTrackInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/track/')
      .then(function (response){
        response.data.map((datae,key)=> {
          setRequestData(data => [...data, {track: datae.name, id: datae.id}]);
          // setLoading(false);
        });
        setlen(response.data.length);
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
  
  const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.track}</Text>
  </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.track === selectedId ? colors.orange: colors.light_orange;

    return (
      <Item
        item={item}
        onPress={() => {setData(item.track,'name'),setSelectedId(item.track)}}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View>
      <View style= {styles.header}>
      {data.length ==len ? <FlatList
      
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.track}
      extraData={selectedId}
    />
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
  item: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 150,
  },
  title: {
    fontSize: 15,
    textAlign: 'center'
  },
});
