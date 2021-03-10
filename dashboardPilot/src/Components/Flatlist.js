// import React from 'react';
// import {View, Text, StyleSheet, Dimensions,FlatList,SafeAreaView,TouchableOpacity} from 'react-native';
// import colors from '../Themes/colors';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
// export default function FlatListt(props) {
//   const {label,data,onpress} = props;
//   const [selectedId, setSelectedId] = useState(null);
//   const Item = ({ item, onPress, style }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );
//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

//     return (
//       <Item
//         item={item}
//         onPress={() => onpress,setSelectedId}
//         style={{ backgroundColor }}
//       />
//     );
//   };
 
//   return (
    
//     <View style={styles.container}>
//         <SafeAreaView>
//       <Text style={styles.label}>{label}</Text>
//       <FlatList
//        {...props}
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
        
//         </SafeAreaView>
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: Dimensions.get('window').width * 0.85,
//     alignSelf: 'center',
//     marginVertical: 5,
//   },
//   label: {
//     fontSize: 20,
//     color: colors.white,
//     marginLeft: 15,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   internView: {
//     alignItems: 'center',
//   },
//   input: {
//     borderRadius: 10,
//     backgroundColor: colors.white,
//     width: Dimensions.get('window').width * 0.82,
//     paddingHorizontal: 20,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
