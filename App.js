import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import Header from './componentes/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [loaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  if(!loaded) return <AppLoading />


  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const handlerRestart  = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>
  if(userNumber && guessRounds <=0){
    content = <GameScreen userOption={userNumber} onGameOver={handleGameOver}/>
  }else if(guessRounds>0){
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} OnRestart={handlerRestart}/>
  }
  return (
    <SafeAreaView  style={styles.container}>
      <Header title="Adivina el Número" />
      {content}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
