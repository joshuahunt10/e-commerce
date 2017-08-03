import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import BaseLayout from './components/BaseLayout'
import ItemList from './components/ItemList'
import About from './components/About'
import Contact from './components/Contact'
import ItemDetails from './components/ItemDetails'



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/items/:cat/:id' component={ItemDetails} />
        <Route path='/items/:cat' component={ItemList} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={App} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
