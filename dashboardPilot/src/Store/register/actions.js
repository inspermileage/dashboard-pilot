import {REGISTER_CAR, REGISTER_ROUND, REGISTER_TRACK} from './types';

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
