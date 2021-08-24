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
import { COLORS } from '../constants/colors'



const NumberContainer = props => {

  return (
      <View style={styles.container}>
          <Text style={styles.number}>{props.children}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.accent,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
      color: COLORS.accent,
      fontSize: 22,
    },
});

export default NumberContainer;
