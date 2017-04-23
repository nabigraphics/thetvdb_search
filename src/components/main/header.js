import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div id="header">
    <Link to='/' className="title">
      <h1>The TVDB Search.</h1>
      <h3>React + React-Router + Redux Practice</h3>
    </Link>
  </div>
)
export default Header;
