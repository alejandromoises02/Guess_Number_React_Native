import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image
} from "react-native";
import Card from "../componentes/Card";

const GameOverScreen = ({rounds, choice, OnRestart}) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("window");
    return dim.height >= dim.width;
  }

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    setIsPortrait(onPortrait());

    return Dimensions.removeEventListener("change", statePortrait);
  }, []);

  return (
    <View style={isPortrait ? styles.screen : styles.screenLandscape}>
      <Image
        style={isPortrait ? styles.image : styles.imageLandscape}
        source={require("../assets/images/game_over.png")}
      />
      <View>
        <Card style={styles.resultContainer}>
          <Text>Intentos: {rounds}</Text>
          <Text>El numero era: {choice}</Text>
        </Card>
        <Button title="Empezar" onPress={OnRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  screenLandscape: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  resultContainer: {
    width: 300,
    maxWidth: "80%",
    marginBottom: 30,
    padding: 20,
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: 300
  },
  imageLandscape: {
    width: "50%",
    height: 300
  }
});

export default GameOverScreen;
