import React from 'react';
import Header from './header';
import Search from './search';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
class Main extends React.Component{
  constructor(){
    super();
    this.setChange = this.setChange.bind(this);
  }
  setChange(e){
    if(e.key === "Enter"){
      let lang = this.props.lang;
      let name = e.target.value;
      this.props.handleChange(lang,name);
    }
  }
  render(){
    return(
        <div className="main">
          <Header/>
          <div className="search">
            <Search lang={this.props.handleSelected} title={this.setChange}/>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    lang:state.search.lang
  }
}
const matpDispatchToProps = (dispatch) =>{
  return{
    handleIncrement: () =>{ dispatch(actions.search_title())},
    handleSelected: (e) =>{dispatch(actions.select_lang(e.target.value))},
    handleChange: (lang,name) =>{
        axios.get('/api/search/'+lang+'/'+ name).then((res) => {
          dispatch(actions.search_title(res.data,lang));
        }).catch((err) => {
          dispatch(actions.search_title([],lang));
          console.error("err!");
        })
    }
  }
}

export default connect(mapStateToProps,matpDispatchToProps)(Main);
