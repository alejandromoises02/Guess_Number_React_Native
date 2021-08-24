import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {COLORS} from '../constants/colors'

const Header = props =>{
    const {title} = props;
    return (
        <View style={styles.header} > 
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header:{
    width:'100%',
    paddingTop:36,
    height:70,
    backgroundColor:COLORS.primary,
    alignItems:'center',
    justifyContent:'center'
},
headerTitle:{
    color:'black',
    fontSize: 22
}
});

export default Header;