import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Particles from "react-tsparticles";

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';

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
};

export default App;

// function App() {
//   return (
    
//     <Particles 
//      className="particles-canvas"
//      params={{
//       "interactivity": {
//         "events": {
//           "onHover": {
//             "enable": true,
//             "mode": "bubble"
//           },
//           "onClick": {
//             "enable": true,
//             "mode": "push"
//           }
//         },
//         "modes": {
//           "bubble": {
//             "opacity": 0.8,
//             "size": 10,
//             "color": {
//               "value": "#e4bb15"
//             }
//           }
//         }
//       },
//       "particles": {
//         "color": {
//           "value": "#000"
//         },
//         "links": {
//           "color": {
//             "value": "#000"
//           },
//           "enable": true,
//           "opacity": 0.5
//         },
//         "move": {
//           "enable": true
//         },
//         "opacity": {
//           "value": 0.5
//         },
//         "size": {
//           "value": 2
//         }
//        }
//       }
//      }
        
//     />
//   );
// };    


