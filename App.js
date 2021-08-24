import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import Header from './componentes/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [loaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  
  const [userNumber, setUserNumber] = useState();

  if(!loaded) return <AppLoading />


  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>
  if(userNumber){
    content = <GameScreen userOption={userNumber}/>
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el Número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
