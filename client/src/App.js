import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';
=======
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Particles from "react-tsparticles";
>>>>>>> 75c7650766032627fcdff0ae103677a8904534f1

// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';

<<<<<<< HEAD
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';

import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';


const client=new ApolloClient({
  request:(operation)=>{
    const token=localStorage.getItem ('id_token')
    operation.setContext({ headers: {
      authorization: token ? `Bearer ${token}` : '' }})
  },
  uri:'/graphql',
})
=======
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
>>>>>>> 75c7650766032627fcdff0ae103677a8904534f1

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
<<<<<<< HEAD
        <div>
          <Provider store = {store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
=======

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

>>>>>>> 75c7650766032627fcdff0ae103677a8904534f1
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


