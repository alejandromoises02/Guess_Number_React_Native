import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../componentes/Card';
import NumberContainer from '../componentes/NumberContainer';

const generaterandomBetween = (min,max,exclude) =>{
    min = Math.ceil(min)
    max = Math.floor(max)

    const random =Math.floor(Math.random() * (max-min) +min);
    if(random === exclude)
        return generaterandomBetween(min,max,exclude);
    else
        return random
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generaterandomBetween(1,100,props.userOption));
    
    return(
        <View style={styles.screen}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='MENOR' OnPress={()=>{}} />
                <Button title='MAYOR' OnPress={()=>{}} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        width: 300,
        maxWidth: '80%',
        marginBottom: 10,
    }
})
  
export default GameScreen;

