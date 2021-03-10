import React from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setRoundData} from '../Store/register/actions';
import {useDateFormated} from './date';

export function postData(dataCar, dataTrack, dataRound) {
  const dispatch = useDispatch();
  const date = new Date();
  const dateFormated = useDateFormated(date);

  async function sendCarInfo() {
    const dadosCar = {
      creation_date: dateFormated,
      description: dataCar.description,
      name: dataCar.name,
    };

    await axios
      .post('https://apirestmileage.herokuapp.com/api/car/', dadosCar)
      .then(function (response) {
        console.log(response.data);
        dispatch(setRoundData({['car_id']: response.data.id}));
        console.log('AQUIII', dateFormated);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado :(');
      });
  }


  async function sendTrackInfo() {
    const dadosTrack = {
      description: dataTrack.description,
      name: dataTrack.name,
    };

    await axios
      .post('https://apirestmileage.herokuapp.com/api/track/', dadosTrack)
      .then(function (response) {
        console.log(response.data);
        dispatch(setRoundData({['track_id']: response.data.id}));
      })
      .catch(function (error) {
        console.log(error.response);
        Alert.alert('Deu errado :(');
      });
  }

  async function sendRoundInfo() {
    const dadosRound = {
      name: dataRound.name,
      description: dataRound.description,
      reason: dataRound.reason,
      ref_date: dateFormated,
      track_id: dataRound.track_id,
      car_id: dataRound.car_id,
    };

    await axios
      .post('https://apirestmileage.herokuapp.com/api/round/', dadosRound)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        Alert.alert('Deu errado :(');
      });
  }

  return {sendCarInfo, sendTrackInfo, sendRoundInfo};
}

export function getData(){
  
  async function getCarInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/car/')
      .then(function (response){
        console.log(response.data);
        //console.log("print da data")
        // response.data.map((data,key)=> {
        //   console.log(data.name);
        // });
        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado no getCarInfo :(');
      });
      
  };
  async function getTrackInfo(){
    await axios
      .get('https://apirestmileage.herokuapp.com/api/track/')
      .then(function (response){
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Deu errado no getTrackInfo :(');
      });
  };
  return {getCarInfo,getTrackInfo}
}