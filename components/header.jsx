import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu}>
                <View style={styles.hamburger} />
                <View style={styles.hamburger} />
                <View style={styles.hamburger} />
            </TouchableOpacity>
            <Text style={styles.logo}>
                Developer Dictionary
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        height: "15%",
        backgroundColor: '#f3cd32',
        width: "100%",
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        flex:1,
        textAlign: 'center'
    },
    hamburger: {
        width: '100%',
        height: 7,
        backgroundColor: 'white',
        marginVertical: 5
    },
    menu: {
        zIndex:100,
        backgroundColor: '#f3cd32',
        height:"100%",
        width:"15%",
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginLeft:13
    }
});

export default Header;