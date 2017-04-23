import * as types from './ActionTypes';

export function search_title(tvdb,view_lang){
  return{
    type:types.SEARCH_TITLE,
    tvdb,
    view_lang
  }
}

export function select_lang(lang){
  return{
    type:types.SELECT_LANG,
    lang
  }
}

export function view_series(tvdb,view_lang){
  return{
    type:types.VIEW_SERIES,
    tvdb,
    view_lang
  }
}

export function get_posters(poster){
  return{
    type:types.GET_POSTERS,
    poster
  }
}
