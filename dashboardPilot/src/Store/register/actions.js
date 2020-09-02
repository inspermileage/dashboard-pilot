import {
  REGISTER_CAR,
  REGISTER_ROUND,
  REGISTER_TRACK,
  REGISTER_PHONE,
} from './types';

export function setCarData(payload) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_CAR,
      payload,
    });
  };
}

export function setTrackData(payload) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_TRACK,
      payload,
    });
  };
}

export function setRoundData(payload) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_ROUND,
      payload,
    });
  };
}

export function setPhoneData(payload) {
  return async (dispatch) => {
    dispatch({
      type: REGISTER_PHONE,
      payload,
    });
  };
}
