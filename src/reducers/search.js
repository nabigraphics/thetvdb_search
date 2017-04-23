import * as types from '../actions/ActionTypes';

const initialState = {
  lang:"ko",
  tvdb:new Array()
}

export default function (state = initialState, action){
  switch(action.type){
    case types.SEARCH_TITLE:
      return {
        ...state,
        tvdb:action.tvdb,
        view_lang:action.view_lang
      }
    case types.SELECT_LANG:
      return {
        ...state,
        lang:action.lang
      }
    default :
      return state;
  }
}
