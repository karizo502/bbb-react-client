import axios from 'axios';
import { GET_EVENT_LIST } from './types';


export function setEventList(event) {
  return {
    type: GET_EVENT_LIST,
    event
  };
}

export function geteventlist() {
  return dispatch => {
    return axios.get('http://localhost:3000/api/geteventlist').then(res => {
      dispatch(setEventList(res.data));
      console.log(res.data);
    });

  }
}
