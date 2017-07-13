import { SEARCH_USER,VIEW_PROFILE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  user_list: [],
  profile_target:{}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_USER:
      return {
        user_list: action.users,
        profile_target:{}
      };
    case VIEW_PROFILE:
      return {
        user_list: [],
        profile_target: action.user
      };
    default: return state;
  }
}