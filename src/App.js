import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview'
import Chats from './Chats';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <div className="app__body">
        <Switch>
          <Route path="/chats">
              <Chats />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route exact path="/">
          <WebcamCapture />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
