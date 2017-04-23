import React from 'react';
import Info from '../components/series/';
const Series = ({match}) => {
  return(
        <Info lang={match.params.lang} id={match.params.id}/>
  );
}

export default Series;
