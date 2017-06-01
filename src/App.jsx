import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => (
  <Button>
    Click Here
  </Button>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={()=><ButtonExampleButton/>} />
      <Route path="/test" component={()=><div>Test</div>} />
    </div>
  </Router>
);

export default App;
