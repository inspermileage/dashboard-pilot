import React, {useState, useEffect} from 'react';

import colors from '../../Themes/colors';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  DeviceEventEmitter,
} from 'react-native';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Linking} from 'react-native';
import {RNSerialport, definitions, actions} from 'react-native-serialport';
// ...

const {width, height} = Dimensions.get('screen');
export default function Dashboard() {
  const [battery, setBattery] = useState(0.4);
  const [call, setCall] = useState(false);

  const [serviceStarted, setServiceStarted] = useState(false);
  const [connected, setConnected] = useState(false);
  const [usbAttached, setUsbAttached] = useState(false);
  const [data, setData] = useState({
    accelerometer: 0.23,
    altimeter: 16.77,
    barometer: 10.08,
    temperature: 3.28,
    rpm: 199.33,
    voltage: 2.98,
    current: 0.31,
  });

  const parsedToJSON = (data) => {
    // Recebe os dados da biblioteca USB Serial e os parseia, retornando um objeto
    const dataSet = [
      'button',
      'accelerometer',
      'altimeter',
      'barometer',
      'temperature',
      'rpm',
      'voltage',
      'current',
    ];

    return Object.assign(
      {},
      ...dataSet.map((n, index) => ({[n]: data[index]})),
    );
  };

  function onReadData(data) {
    console.log(data);
    const payload = RNSerialport.hexToUtf16(data.payload);

    console.log('hi');

    // Define o RegEx para extração dos dados do streaming
    var re = new RegExp('<([^>]+)>');
    var parsed = '';

    // Se algum dado for extraído pela regra do Regex
    if (re.test(payload)) {
      // Ele é splitado por vírgulas e retornado como lista
      var parsed = payload.match(re)[1].split(',').map(Number);

      // Atribui ao estado do componente os dados
      setData({data: parsedToJSON(parsed)});

      // Se a telemetria estiver rodando, será feita uma requisição POST
      // para o backend para cada dado novo.
      // if (this.state.config.running == true) {
      //     await api.post(
      //         `/data/${this.state.config.dataset}`,
      //         data
      //     );
      // }
    }
  }

  const navigation = useNavigation();
  const dataPhone = useSelector((state) => state.register.phoneData);
  const phone = dataPhone.phoneNumber;


  function onUsbAttached() {
    console.log(' alosjso');
    setUsbAttached(true);
  }

  function onUsbDetached() {
    setUsbAttached(false);
  }

  function onServiceStarted(response) {
    setServiceStarted(true);
    console.log(response);
    if (response.deviceAttached) {
      onUsbAttached();
      console.log(' aquiiiiss');
    }
  }
  function onServiceStopped() {
    setServiceStarted(false);
  }

  function onConnectedDevice() {
    setConnected(true);
    alert('Device Connected');
  }
  function onDisconnectedDevice() {
    setConnected(false);
    alert('Device Disconnected');
  }

  function onError(error) {
    alert('Code: ' + error.errorCode + ' Message: ' + error.errorMessage);
  }

  useEffect(() => {
    StatusBar.setHidden(true);
    DeviceEventEmitter.addListener(actions.ON_SERVICE_STARTED, (start) =>
      onServiceStarted(start),
    );
    DeviceEventEmitter.addListener(
      actions.ON_SERVICE_STOPPED,
      onServiceStopped(),
    );
    DeviceEventEmitter.addListener(actions.ON_DEVICE_ATTACHED, onUsbAttached());
    DeviceEventEmitter.addListener(actions.ON_DEVICE_DETACHED, onUsbDetached());
    DeviceEventEmitter.addListener(actions.ON_ERROR, (error) => onError(error));
    DeviceEventEmitter.addListener(actions.ON_CONNECTED, onConnectedDevice());
    DeviceEventEmitter.addListener(
      actions.ON_DISCONNECTED,
      onDisconnectedDevice(),
    );
    DeviceEventEmitter.addListener(actions.ON_READ_DATA, (data) =>
      onReadData(data),
    );
    RNSerialport.setReturnedDataType(definitions.RETURNED_DATA_TYPES.HEXSTRING);
    RNSerialport.setAutoConnectBaudRate(9600);
    RNSerialport.setInterface(-1);
    RNSerialport.setAutoConnect(true);
    RNSerialport.startUsbService();

    return () => {
      stopUsbListener();
    };
  }, [usbAttached]);

  const stopUsbListener = async () => {
    DeviceEventEmitter.removeAllListeners();
    const isOpen = await RNSerialport.isOpen();
    if (isOpen) {
      RNSerialport.disconnect();
    }
    RNSerialport.stopUsbService();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcons}>
          <TouchableOpacity
            style={{marginRight: 25}}
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Icon name={'navicon'} size={65} color={colors.orange} />
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
          <Text style={styles.txtnumbers}>
            {' '}
            {data.accelerometer === undefined ? '0' : data.accelerometer}
          </Text>
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
