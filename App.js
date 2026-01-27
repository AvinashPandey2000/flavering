//===< REACT APIS >===//
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

//===< NAVIGATIONS >===//
// Using relative path since alias might not be set up
import RootNavigator from './src/navigation/stack/RootNavigator';

//===< MAIN FUNCTION >===//
const App = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;
