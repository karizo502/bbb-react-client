import { GET_EVENT_LIST } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  event_list: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_EVENT_LIST:
      return {
        event_list: action.event,
      };
    default: return state;
  }
}