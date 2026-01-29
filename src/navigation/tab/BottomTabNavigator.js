import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';

// Screens
import HomeScreen from '../../screens/Home/HomeScreen';
import FindScreen from '../../screens/Find/FindScreen';
import BookScreen from '../../screens/Book/BookScreen';
// Modal
import MoreModal from '../../components/MoreModal';
import { Images } from '../../assets/images';
import { COLORS, CURRENT_ENV } from '../../config';

const Tab = createBottomTabNavigator();

// Placeholder component for More tab since it won't be navigated to
const MorePlaceholder = () => <View />;

const BottomTabNavigator = () => {
    const [isMoreModalVisible, setMoreModalVisible] = useState(false);

    const renderTabIcon = (source, color) => (
        <Image
            source={source}
            style={{
                width: 22,
                height: 22,
                tintColor: color,
                resizeMode: 'contain',
            }}
        />
    );

    const findIcon = CURRENT_ENV === 'two' ? Images.findingTwo : Images.search;
    const bookIcon = CURRENT_ENV === 'two' ? Images.calendarTwo : Images.calendar;

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.tabActive, // Example teal color from screenshot
                    tabBarInactiveTintColor: COLORS.tabInactive,
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: '600',
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => renderTabIcon(Images.home, color),
                    }}
                />
                <Tab.Screen
                    name="Find"
                    component={FindScreen}
                    options={{
                        tabBarLabel: 'Find',
                        tabBarIcon: ({ color }) => renderTabIcon(findIcon, color),
                    }}
                />
                <Tab.Screen
                    name="Book"
                    component={BookScreen}
                    options={{
                        tabBarLabel: 'Book',
                        tabBarIcon: ({ color }) => renderTabIcon(bookIcon, color),
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
                        tabBarIcon: ({ color }) => renderTabIcon(Images.more, color),
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
