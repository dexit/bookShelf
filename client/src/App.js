import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import {  ApolloClient,  InMemoryCache,  ApolloProvider,  createHttpLink } from '@apollo/client';
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<SearchBooks />} />

        </Routes>
        <Switch>
          
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
