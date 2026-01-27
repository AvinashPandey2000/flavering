//===< REACT APIS >===//
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//===< NAVIGATIONS >===//
// Using relative path since alias might not be set up
import RootNavigator from './src/navigation/stack/RootNavigator';

//===< MAIN FUNCTION >===//
const App = () => {

    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#00796b"
            />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
