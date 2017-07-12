import { SEARCH_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  user_list: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_USER:
      return {
        user_list: action.users,
      };
    default: return state;
  }
}