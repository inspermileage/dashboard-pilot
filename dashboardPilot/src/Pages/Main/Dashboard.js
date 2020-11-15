import React, { useState, useEffect } from 'react';

import colors from '../../Themes/colors';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, StatusBar, DeviceEventEmitter } from 'react-native';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Linking } from 'react-native';
import { RNSerialport, definitions, actions } from 'react-native-serialport';
import axios from 'axios';
// ...

const { width, height } = Dimensions.get('screen');
export default function Dashboard() {
	const dataTelemetry = useSelector((state) => state.register.telemetryData);

	const [ battery, setBattery ] = useState(0.7);
	// const [call, setCall] = useState(false);

	const [ serviceStarted, setServiceStarted ] = useState(false);
	const [ connected, setConnected ] = useState(false);
	const [ usbAttached, setUsbAttached ] = useState(false);
	const [ time, setTime ] = useState(Date.now());

	const [ data, setData ] = useState({
		speed: 0.0,
		distance: 0.0,
		engine_temp: 0.0,
		energy_cons: 0.0,
		rpm: 0.0,
		battery: 1,
		avg_speed: 0.0,
		creation_time: new Date(),
		round_id: 6
	});

	const parsedToJSON = (data) => {
		// Recebe os dados da biblioteca USB Serial e os parseia, retornando um objeto
		const dataSet = [ 'button', 'speed', 'distance', 'engine_temp', 'energy_cons', 'rpm', 'battery', 'avg_speed' ];

		const roundId = { round_id: dataTelemetry.round_id };
		const time = { creation_time: new Date() };

		return Object.assign({}, ...dataSet.map((n, index) => ({ [n]: data[index] })), time, roundId);
	};

	async function onReadData(dataa) {
		const payload = RNSerialport.hexToUtf16(dataa.payload);

		// Define o RegEx para extração dos dados do streaming
		var re = new RegExp('<([^>]+)>');
		var parsed = '';

		// Se algum dado for extraído pela regra do Regex
		if (re.test(payload)) {
			// Ele é splitado por vírgulas e retornado como lista
			var parsed = payload.match(re)[1].split(',').map(Number);

			// Atribui ao estado do componente os dados
			setData(parsedToJSON(parsed));

			await axios
				.post('https://apirestmileage.herokuapp.com/api/telemetry/', data)
				.then(function(response) {
					alert(response.status);
					//console.log("print da data")
					// response.data.map((data,key)=> {
					//   console.log(data.name);
					// });
					// console.log(response.data);
				})
				.catch(function(error) {
					alert(error.response.status);
				});

			// Se a telemetria estiver rodando, será feita uma requisição POST
			// para o backend para cada dado novo.
			// if (this.state.config.running == true) {

			// }
		}
	}

	const navigation = useNavigation();
	// const dataPhone = useSelector((state) => state.register.phoneData);
	// const phone = dataPhone.phoneNumber;

	function onUsbAttached() {
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
		console.log('AQuiiii', dataTelemetry.round_id);

		StatusBar.setHidden(true);
		// interval = setInterval(() => setTime(Date.now()), 1000);
		DeviceEventEmitter.addListener(actions.ON_SERVICE_STARTED, (start) => onServiceStarted(start));
		DeviceEventEmitter.addListener(actions.ON_SERVICE_STOPPED, (stop) => onServiceStopped(stop));
		DeviceEventEmitter.addListener(actions.ON_DEVICE_ATTACHED, onUsbAttached());
		DeviceEventEmitter.addListener(actions.ON_DEVICE_DETACHED, onUsbDetached());
		DeviceEventEmitter.addListener(actions.ON_ERROR, (error) => onError(error));
		DeviceEventEmitter.addListener(actions.ON_CONNECTED, onConnectedDevice());
		DeviceEventEmitter.addListener(actions.ON_DISCONNECTED, onDisconnectedDevice());
		DeviceEventEmitter.addListener(actions.ON_READ_DATA, (data) => onReadData(data), data);
		RNSerialport.setReturnedDataType(definitions.RETURNED_DATA_TYPES.HEXSTRING);
		RNSerialport.setAutoConnectBaudRate(9600);
		RNSerialport.setInterface(-1);
		RNSerialport.setAutoConnect(true);
		RNSerialport.startUsbService();

		return () => {
			stopUsbListener();
			// clearInterval(interval);
		};
	}, []);

	const stopUsbListener = async () => {
		DeviceEventEmitter.removeAllListeners();
		const isOpen = await RNSerialport.isOpen();
		if (isOpen) {
			RNSerialport.disconnect();
		}
		RNSerialport.stopUsbService();
	};

	useEffect(
		() => {
			StatusBar.setHidden(true);
			const interval = setInterval(() => setTime(Date.now()), 10);

			DeviceEventEmitter.addListener(actions.ON_READ_DATA, (data) => onReadData(data), data);

			RNSerialport.setReturnedDataType(definitions.RETURNED_DATA_TYPES.HEXSTRING);
			RNSerialport.setAutoConnectBaudRate(9600);
			RNSerialport.setInterface(-1);
			RNSerialport.setAutoConnect(true);
			RNSerialport.startUsbService();
			return () => {
				clearInterval(interval);
				stopUsbListener();
			};
		},
		[ time ]
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.leftIcons}>
					<TouchableOpacity
						style={{ marginRight: 25 }}
						onPress={() => {
							navigation.toggleDrawer();
						}}
					>
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
								paddingRight: 20
							}
						]}
					>
						<Text style={styles.txtLabel}>Distance</Text>
						<Text style={styles.txtvalue}>{data.distance === undefined ? '0' : data.distance}</Text>
					</View>
					<View style={styles.containerData}>
						<Text style={styles.txtLabel}>Round</Text>
						<Text style={styles.txtvalue}>{dataTelemetry.round_id}</Text>
					</View>
				</View>
			</View>

			<View style={styles.containerCircles}>
				<View style={styles.leftCircle}>
					<Text style={styles.txtcircle}> RPM </Text>
					<Text style={styles.txtnumbers}>{data.rpm === undefined ? '0' : data.rpm}</Text>
				</View>

				<View style={styles.middleCircle}>
					<Text style={styles.txtcircleMiddle}>AVG SPEED</Text>
					<Text style={styles.txtnumbersMiddle}>{data.avg_speed === undefined ? '0' : data.avg_speed}</Text>
					<Text style={styles.txtcircleMiddle}>KM/H </Text>
				</View>

				<View style={styles.rightCircle}>
					<Text style={styles.txtcircle}>INST SPEED</Text>
					<Text style={styles.txtnumbers}> {data.speed === undefined ? '0' : data.speed}</Text>
					<Text style={styles.txtcircle}>KM/H </Text>
				</View>
			</View>

			<View style={styles.progressBar}>
				<Icon
					name={data.battery <= 0.2 ? 'battery-1' : data.battery <= 0.5 ? 'battery-half' : 'battery'}
					size={30}
					color={data.battery <= 0.2 ? colors.red : data.battery <= 0.5 ? colors.yellow : colors.green}
				/>
				<Progress.Bar
					color={data.battery <= 0.2 ? colors.red : data.battery <= 0.5 ? colors.yellow : colors.green}
					progress={data.battery}
					width={width * 0.7}
					height={12}
				/>
				<Text style={styles.batteryValue}> {data.battery * 100}% </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},

	batteryTitle: {
		color: colors.white,
		fontSize: 20,
		alignSelf: 'flex-end',
		marginRight: '5%',
		marginBottom: 5,
		fontWeight: 'bold'
	},

	batteryValue: {
		color: colors.white,
		fontSize: 25,
		alignSelf: 'flex-end',
		marginTop: 5,
		fontWeight: 'bold'
	},

	header: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},

	leftIcons: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 5,
		marginLeft: 30
	},

	rightIcons: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 5,
		marginRight: 30
	},
	containerData: {
		alignItems: 'center'
	},

	containerCircles: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},

	txtLabel: {
		color: 'white',
		fontSize: 30
	},
	txtvalue: {
		color: 'white',
		fontSize: 25
	},
	leftCircle: {
		marginTop: 20,
		marginLeft: 20,
		height: width * 0.3,
		width: width * 0.3,
		borderRadius: width * 0.3 / 2,
		backgroundColor: colors.orange,
		marginRight: '10%',
		justifyContent: 'center'
	},
	middleCircle: {
		height: width * 0.33,
		width: width * 0.33,
		borderRadius: width * 0.33 / 2,
		backgroundColor: colors.dark_gray,
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 50,
		marginLeft: 20
	},
	rightCircle: {
		marginTop: 20,
		height: width * 0.3,
		width: width * 0.3,
		borderRadius: width * 0.3 / 2,
		backgroundColor: colors.light_gray,
		justifyContent: 'center',
		zIndex: 2,
		marginLeft: '10%'
	},
	txtcircle: {
		fontSize: 30,
		alignSelf: 'center',
		justifyContent: 'center',
		color: colors.white,
		fontWeight: 'bold'
	},
	txtnumbers: {
		fontSize: 60,
		alignSelf: 'center',
		justifyContent: 'center',
		color: colors.white,
		fontWeight: 'bold'
	},
	txtcircleMiddle: {
		fontSize: 35,
		alignSelf: 'center',
		justifyContent: 'center',
		color: colors.orange,
		fontWeight: 'bold'
	},
	txtnumbersMiddle: {
		fontSize: 65,
		alignSelf: 'center',
		justifyContent: 'center',
		color: colors.orange,
		fontWeight: 'bold'
	},
	progressBar: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row'
	}
});
