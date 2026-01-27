import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Screens
import HomeScreen from '../../screens/Home/HomeScreen';
import FindScreen from '../../screens/Find/FindScreen';
import BookScreen from '../../screens/Book/BookScreen';
// Modal
import MoreModal from '../../components/MoreModal';

const Tab = createBottomTabNavigator();

// Placeholder component for More tab since it won't be navigated to
const MorePlaceholder = () => <View />;

const BottomTabNavigator = () => {
    const [isMoreModalVisible, setMoreModalVisible] = useState(false);

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#008ba3', // Example teal color from screenshot
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        // Add tabBarIcon here using an icon library
                    }}
                />
                <Tab.Screen
                    name="Find"
                    component={FindScreen}
                    options={{
                        tabBarLabel: 'Find',
                    }}
                />
                <Tab.Screen
                    name="Book"
                    component={BookScreen}
                    options={{
                        tabBarLabel: 'Book',
                    }}
                />
                <Tab.Screen
                    name="More"
                    component={MorePlaceholder}
                    listeners={() => ({
                        tabPress: (e) => {
                            // Prevent default action
                            e.preventDefault();
                            // Show the custom modal
                            setMoreModalVisible(true);
                        },
                    })}
                    options={{
                        tabBarLabel: 'More',
                    }}
                />
            </Tab.Navigator>

            <MoreModal
                isVisible={isMoreModalVisible}
                onClose={() => setMoreModalVisible(false)}
            />
        </>
    );
};

export default BottomTabNavigator;
