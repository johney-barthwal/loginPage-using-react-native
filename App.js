import React from 'react';
import {Router,Scene} from 'react-native-router-flux';
import firebase from 'firebase'

import Login from './src/components/Login/Login';
import Signup from './src/components/Login/Signup';

import {Provider} from "react-redux";

import {createStore} from "redux"
import rootReducer from './src/reducer/Index'



const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
     <Router>
       <Scene key='root'>
          <Scene
            key='Login'
            component={Login}
            title='Log In'
            initial={true} 
          />
          <Scene
          key='Signup'
          component={Signup}
          title='Sign Up'
        />
        </Scene>
     </Router>
     </Provider>
    );
  }
}