import axios from 'axios';
import { SEARCH_USER,VIEW_PROFILE } from './types';


export function settUserList(users) {
  return {type: SEARCH_USER,users};
}

export function searchUser(filterName) {
  if(filterName == ""){filterName="!";}
  return dispatch => {
    return axios.get(`http://localhost:3000/api/users?name=${filterName}`).then(res => {
      dispatch(settUserList(res.data));
      //console.log(res.data);
    });

  }
}

export function setProfile(user) {
  return {type: VIEW_PROFILE,user};
}

export function viewProfile(id) {
  return dispatch => {
    return axios.get(`http://localhost:3000/api/users/${id}`).then(res => {
      dispatch(setProfile(res.data[0]));
      console.log(res.data[0]);
    });

  }
}