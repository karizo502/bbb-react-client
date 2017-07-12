import axios from 'axios';
import { SEARCH_USER } from './types';


export function settUserList(users) {
  return {
    type: SEARCH_USER,
    users
  };
}

export function searchUser() {
  return dispatch => {
    return axios.get('http://localhost:3000/api/searchuser').then(res => {
      dispatch(settUserList(res.data));
      //console.log(res.data);
    });

  }
}