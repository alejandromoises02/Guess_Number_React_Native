import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Card from "../componentes/Card";
import { COLORS } from "../constants/colors";
import Input from "../componentes/Input";
import NumberContainer from "../componentes/NumberContainer";

const StartGameScreen = ({onStartGame}) => {
  const [enteredView, setEnteredView] = useState("");
  const [confirmed, setConfirmed] = useState(false); 
  const [selectNumber, setSelectNumber] = useState("");

  const handlerInputNumber = (text) => {
    setEnteredView(text.replace(/[^0-9]/g, ""));
  };

  const handlerResetInput = () => {
    setEnteredView('');
    setConfirmed(false);
    setSelectNumber('')
  }

  const handlerConfirmInput = () =>{
    const choseNumber = parseInt(enteredView)
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setSelectNumber(choseNumber);
    setEnteredView('');
  }

  const handleStartGame = () => {
    onStartGame(confirmedValue);
  }


  let confirmedOutput = confirmed ? 
  (<Card>
    <Text>Numero Elegido:</Text>
    <NumberContainer>{selectNumber}</NumberContainer>
    <Button title="Iniciar Juego" onPress={handleStartGame} />
  </Card>
  ):
  (null)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un número</Text>
          <Input
            blurOnSubmit
            autoCapitalizacion={false}
            autoCorrect={false}
            keyBoardType="numeric"
            maxLength={2}
            value={enteredView}
            onChangeText={handlerInputNumber}
          />
          <View style={styles.buttonConatiner}>
            <View style={styles.button}>
              <Button
                title={"Limpiar"}
                onPress={handlerResetInput}
                color={COLORS.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"Confirmar"}
                onPress={handlerConfirmInput}
                color={COLORS.primary}
                style={styles.button}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontFamily:'Roboto',
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    padding: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonConatiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100
  }
});

export default StartGameScreen;
