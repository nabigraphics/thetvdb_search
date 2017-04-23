import React from 'react';

class Search extends React.Component{

  render(){
    return(
        <div>
          <select onChange={this.props.lang}>
            <option defaultValue>ko</option>
            <option>ja</option>
            <option>en</option>
          </select>
          <input name="search" placeholder="Search Title" onKeyPress={this.props.title}/>
        </div>
    )
  }
}

export default Search;
