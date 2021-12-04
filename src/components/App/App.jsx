import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Success from '../Success/Success';


function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
        <Feeling />
      </Route>
      <Route exact path="/Understanding">
        <Understanding />
      </Route>
      <Route exact path="/Support">
        <Support />
      </Route>
      <Route exact path="/Comment">
        <Comment />
      </Route>
      <Route exact path="/Review">
        <Review />
      </Route>
      <Route exact path="/Success">
        <Success />
      </Route>



    </Router>
    </div>
  );
}

export default App;
