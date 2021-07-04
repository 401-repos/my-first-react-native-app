import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import axios from 'axios'
function AddNew({navigation}) {
    const [definition, setDefinition] = useState('');
    const [term, setTerm] = useState('');
    const baseURL = "https://api-server-0.herokuapp.com";
    const url = "/term"
    const addHandler = async () => {
        if (term.length > 2 && definition.length > 10) {
            const data = await axios({
                method: 'post',
                baseURL: baseURL,
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-origin': baseURL
                },
                data: JSON.stringify({ term, definition })
            });
            console.log(data.data)
            navigation.navigate('Home')
        } else {
            Alert.alert('OOPS!!', "Term and Definition should be VALID ONES!", [{ text: "UNDERSTOOD!" }]);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>

            <View style={style.view}>
                <TextInput onChangeText={(value) => {
                    console.log(value)
                    setTerm(value)
                }} style={style.text} placeholder="e.g. SQL , JavaScript" />
                <TextInput onChangeText={(value) => {
                    console.log(value)
                    setDefinition(value)
                }} style={style.definition} multiline placeholder="New Definition Goes here ..." />
                <Button onPress={addHandler} title="Add" />
            </View>
        </TouchableWithoutFeedback>
    )
}


const style = StyleSheet.create({
    view: {

        alignItems: 'center',
        marginTop: 30
    }
    ,
    text: {
        width: '80%',
        height: 100,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#999',
        textAlign: 'center',
        fontSize: 20
    },
    definition: {
        width: '80%',
        marginTop: 20,
        height: 400,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#999',
        textAlign: 'left',
        padding: 10,
        fontSize: 20
    }
})

export default AddNew;
