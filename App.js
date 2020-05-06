import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import { bootstrap } from './src/bootstrap';
import { RootStack } from './src/navigation/AppNavigation';



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
    <RootStack/>
  );
}

