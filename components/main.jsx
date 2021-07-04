import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

function Main({ navigation }) {
    const baseURL = "https://api-server-0.herokuapp.com";
    const url = "/term"
    const [terms, setTerms] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            baseURL: baseURL,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': baseURL
            }
        })
            .then((res) => {
                setTerms([...res.data])
            })
            .catch((e) => {
                setTaskItems([]);
            });
    }, [])
    return (
            
            <SafeAreaView style={style.main}>
            <FlatList
                data={terms}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Definition', item)}>
                                <Text style={style.term}>
                                    {item.term}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            </SafeAreaView>
            
    )
}

const style = StyleSheet.create({
    main: {
        marginTop:20,
        alignItems: 'center',
        flex: 1, width: "100%",
    },
    term: {
        height: 100,
        width: '100%',
        fontSize: 25
    },

})

export default Main
