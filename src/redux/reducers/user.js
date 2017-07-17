import isEmpty from 'lodash/isEmpty'

import { SEARCH_USER, VIEW_PROFILE } from '../actions/types'

const initialState = {
  user_list: [],
  profile_target: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user_list: action.users
        //profile_target: {}
      }
    case VIEW_PROFILE:
      return {
        ...state,
        //user_list: [],
        profile_target: action.user
      }
    default:
      return state
  }
}
