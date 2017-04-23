import * as types from '../actions/ActionTypes';

const initialState = {
  lang:"ko",
  tvdb:new Object(),
  genre:new Array(),
  poster:new Object()
}

export default function (state = initialState, action){
  switch(action.type){
    case types.VIEW_SERIES:
      return {
        ...state,
        tvdb:action.tvdb,
        genre:action.tvdb.genre,
        view_lang:action.view_lang
      }
      case types.GET_POSTERS:
        return {
          ...state,
          poster:action.poster
        }
    default :
      return state;
  }
}
