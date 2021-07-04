import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/header'
import Main from '../components/main';
export default function App({ navigation, route  }) {
  return (
    <View style={styles.container}>
      {/* <Header style={styles.header}/> */}
      <Main navigation={navigation} route={route} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
