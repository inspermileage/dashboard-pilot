import React, {useState} from 'react';

import colors from '../../Themes/colors';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
const {width, height} = Dimensions.get('screen');

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dashboard() {
  const [battery, setBattery] = useState(0.4);
  const [call, setCall] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcons}>
          <TouchableOpacity style={{marginRight: 25}}>
            <Icon name={'navicon'} size={65} color={colors.orange} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCall(!call)}>
            <Icon
              name={'phone'}
              size={65}
              color={call ? colors.red : colors.green}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rightIcons}>
          <View
            style={[
              styles.containerData,
              {
                borderRightColor: colors.orange,
                borderWidth: 3,
                marginRight: 20,
                paddingRight: 20,
              },
            ]}>
            <Text style={styles.txtLabel}>Distance</Text>
            <Text style={styles.txtvalue}>33 Km</Text>
          </View>
          <View style={styles.containerData}>
            <Text style={styles.txtLabel}>Round</Text>
            <Text style={styles.txtvalue}>4</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerCircles}>
        <View style={styles.leftCircle}>
          <Text style={styles.txtcircle}> RPM </Text>
          <Text style={styles.txtnumbers}>2</Text>
        </View>

        <View style={styles.middleCircle}>
          <Text style={styles.txtcircleMiddle}>AVG SPEED</Text>
          <Text style={styles.txtnumbersMiddle}>23</Text>
          <Text style={styles.txtcircleMiddle}>KM/H </Text>
        </View>

        <View style={styles.rightCircle}>
          <Text style={styles.txtcircle}>INST SPEED</Text>
          <Text style={styles.txtnumbers}>23</Text>
          <Text style={styles.txtcircle}>KM/H </Text>
        </View>
      </View>

      <View style={styles.progressBar}>
        <Icon
          name={
            battery <= 0.2
              ? 'battery-1'
              : battery <= 0.5
              ? 'battery-half'
              : 'battery'
          }
          size={30}
          color={
            battery <= 0.2
              ? colors.red
              : battery <= 0.5
              ? colors.yellow
              : colors.green
          }
        />
        <Progress.Bar
          color={
            battery <= 0.2
              ? colors.red
              : battery <= 0.5
              ? colors.yellow
              : colors.green
          }
          progress={battery}
          width={width * 0.8}
          height={12}
        />
        <Text style={styles.batteryValue}> {battery * 100}% </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  batteryTitle: {
    color: colors.white,
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  batteryValue: {
    color: colors.white,
    fontSize: 25,
    alignSelf: 'flex-end',
    marginTop: 5,
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  leftIcons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 30,
  },

  rightIcons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 30,
  },
  containerData: {
    alignItems: 'center',
  },

  containerCircles: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  txtLabel: {
    color: 'white',
    fontSize: 30,
  },
  txtvalue: {
    color: 'white',
    fontSize: 25,
  },
  leftCircle: {
    marginTop: 20,
    marginLeft: 20,
    height: width * 0.35,
    width: width * 0.35,
    borderRadius: width * 0.175,
    backgroundColor: colors.orange,
    marginRight: '10%',
    justifyContent: 'center',
  },
  middleCircle: {
    height: width * 0.37,
    width: width * 0.37,
    borderRadius: (width * 0.37) / 2,
    backgroundColor: colors.dark_gray,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 50,
    marginLeft: 20,
  },
  rightCircle: {
    marginTop: 20,
    height: width * 0.35,
    width: width * 0.35,
    borderRadius: width * 0.175,
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    zIndex: 2,
    marginLeft: '10%',
  },
  txtcircle: {
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  txtnumbers: {
    fontSize: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  txtcircleMiddle: {
    fontSize: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.orange,
    fontWeight: 'bold',
  },
  txtnumbersMiddle: {
    fontSize: 65,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.orange,
    fontWeight: 'bold',
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
