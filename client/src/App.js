import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import { Provider } from 'react-redux';
// import store from './utils/store';

import Home from './pages/Home';

import Signup from './pages/Signup';
import Login from './pages/Login';

import GameOrder from './pages/GameOrder';
import PrevOrders from './pages/PrevOrders';

const httpLink = createHttpLink ({
    uri: '/graphql',
    });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem ('id_token');
   return {
     headers: {...headers, authorization: token ? `Bearer ${token}` : '',
     },
   };
  });
  
const client = new ApolloClient ({
    link: authLink.concat(httpLink),
   cache: new InMemoryCache (),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/PrevOrders">
              <PrevOrders />
            </Route>
            <Route exact path="/GameOrder">
              <GameOrder />
            </Route>
          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
