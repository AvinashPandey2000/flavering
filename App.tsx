import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from './src/config'; // Direct import from Main Env

const App = () => {

  useEffect(() => {
    // Console mein wahi URL aayega jo tumne main file mein select kiya hai
    console.log(`Current API: ${Config.API_URL}`); 
  }, []);

  return (
    <View style={styles.container}>

      <Text style={{ color: Config.THEME_COLOR, fontSize: 20, fontWeight: 'bold' }}>
        Current Environment: {Config.ENV}
      </Text>
      <Text>API: {Config.API_URL}</Text>
      
      {Config.DEBUG_MODE && (
        <Text style={{color: 'red'}}>DEBUG MODE ON</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;