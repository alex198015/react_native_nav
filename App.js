import 'react-native-gesture-handler'
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import {Provider} from 'react-redux'
import store from './src/store/index'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if(!isReady){
    return <AppLoading
              startAsync={bootstrap}
              onError={err => console.log(err)}
              onFinish={() => setIsReady(true)}
    />
  }

  return (
    <Provider store={store}>
    <AppNavigation/>
    </Provider>
  )
}

