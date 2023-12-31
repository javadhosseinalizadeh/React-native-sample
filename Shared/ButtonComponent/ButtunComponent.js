import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonComponent = ({title, onPress, color = 'tomato' }) => {
    return (    
        <TouchableOpacity style= {[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      );
}
 
export default ButtonComponent;


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'tomato',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 5
    },
    text: {
        color: 'white',
        fontFamily: 'ih',
        fontSize: 18
    }
});