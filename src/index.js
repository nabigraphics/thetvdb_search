import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './route/Index';
import Series from './route/Series';

import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import {Provider} from 'react-redux';
const store = createStore(reducers);

class App extends React.Component{

  render(){
    return(
        <Provider store={store}>
          <Router>
            <div>
              <Main/>
              <div className="shadow"></div>
              <Route exact path="/" component={Index}/>
              <Route path="/series/:lang/:id" component={Series}/>
            </div>
          </Router>
        </Provider>
    )
  }
}
const AppElement = document.getElementById('app');
ReactDOM.render(<App/>,AppElement)
