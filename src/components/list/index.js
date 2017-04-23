import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import {Link} from 'react-router-dom'

class List extends React.Component{
  render(){
    return(
          <ul className="tvdb_list">
            {this.props.tvdb.map((tvdb_data,i) => {
              let http_url = '//thetvdb.com/banners/' + tvdb_data.banner;
              let li_style = {
                backgroundImage:'url(' + http_url + ')'
              }
              return(
                <Link to={`/series/${this.props.view_lang}/${tvdb_data.id}`} key={i}>
                  <li>
                    <div className="list_meta">
                      <h4>{tvdb_data.id}</h4>
                      <h1>{tvdb_data.seriesName}</h1>
                      <h3>{tvdb_data.firstAired}<br/>{tvdb_data.network}</h3>
                    </div>
                    <div className="list_bg" style={li_style}/>
                  </li>
                </Link>
              );
            })}
          </ul>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    view_lang:state.search.view_lang,
    tvdb:state.search.tvdb
  }
}

export default connect(mapStateToProps)(List);
