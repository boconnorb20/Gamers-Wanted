import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



import Home from './pages/Home';
import gameStore from './pages/GameStore';
import NotHere from './pages/NotHere';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import PrevOrders from './pages/PrevOrders';
import GameOrder from './pages/GameOrder';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/gameorder" component={GameOrder} />
              <Route exact path="/prevorders" component={PrevOrders} />
              <Route exact path="/gamestore" component={gameStore} />
              <Route component={NotHere} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

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


