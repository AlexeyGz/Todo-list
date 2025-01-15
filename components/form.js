import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View, TouchableOpacity } from "react-native";


export default function Form({addHandler}){
    const[text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text)
    }

    return(
        <View>
            <TextInput style = {styles.input} onChangeText = {onChange} placeholder="Впишите задачу"/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => addHandler(text)}>
                <Text style={styles.buttonText}>— добавить задачу</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius:10,
        backgroundColor: 'lightgray',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: "60%",
        marginLeft: "20%",
        marginTop: 10,
      },
      
    input:{
        padding:"20px",
        textAlign:"center",
        color: "#8e8e8e",
        borderWidth: 0, 
        borderRadius: 10,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
    inputFocused: {
        borderWidth: 1,
      },
});