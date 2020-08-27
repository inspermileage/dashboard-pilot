import React from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setRoundData} from '../Store/register/actions';

export async function sendCarInfo(name, description) {
  const dadosCar = {
    creation_date: '2020-08-01',
    description: description,
    name: name,
  };

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

export async function sendTrackInfo(Name, Description, setTrackId) {
  const dadosTrack = {
    description: Description,
    name: Name,
  };

  await axios
    .post('https://apirestmileage.herokuapp.com/api/track/', dadosTrack)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
      Alert.alert('Deu errado :(');
    });
}

export async function sendRoundInfo(round, description, reason, track, car) {
  const dadosRound = {
    name: round,
    description: description,
    reason: reason,
    ref_date: '2020-08-26',
    track_id: 1,
    car_id: 3,
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
