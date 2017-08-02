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
        <Route path='/items/hair/:id' component={ItemDetails} />
        <Route path='/items/:cat' component={ItemList} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/' component={App} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
