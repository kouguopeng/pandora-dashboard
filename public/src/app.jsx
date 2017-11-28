import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {LayoutCpnt} from './components/LayoutCpnt';
import {Home} from './Home';
import {Stdout} from './Stdout';
import {ProcessStructures} from "./ProcessStructures";
import {ErrorInspection} from "./ErrorInspection";
import {Metrics} from "./Metrics";
import {Trace} from "./Trace";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render((
  <BrowserRouter >
    <LayoutCpnt>
      <Route component={ScrollToTop} />
      <Route exact path='/' component={Home} ></Route>
      <Route path='/application/:appName/stdout' component={Stdout} ></Route>
      <Route path='/application/:appName/processStructures' component={ProcessStructures} ></Route>
      <Route path='/application/:appName/errorInspection' component={ErrorInspection} ></Route>
      <Route path='/application/:appName/metrics' component={Metrics} ></Route>
      <Route path='/application/:appName/trace' component={Trace} ></Route>
    </LayoutCpnt>
  </BrowserRouter>
), document.getElementById('DUMP_APP_HERE'));

