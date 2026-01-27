import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import BookScreen from '../screens/BookScreen';
import MoreScreen from '../screens/MoreScreen';
import MoreMenu from '../components/MoreMenu';

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
  onMorePress: () => void;
};

function CustomTabBar({
  state,
  descriptors,
  navigation,
  onMorePress,
}: TabBarProps) {
  return (
    <View style={styles.tabBarWrap}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const label =
            descriptors[route.key]?.options?.tabBarLabel ??
            descriptors[route.key]?.options?.title ??
            route.name;

          const onPress = () => {
            if (route.name === 'More') {
              onMorePress();
              return;
            }
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={[styles.tabItem, isFocused ? styles.tabItemActive : null]}
            >
              <Text style={styles.tabIcon}>
                {route.name === 'Home'
                  ? '🏠'
                  : route.name === 'Find'
                    ? '🔍'
                    : route.name === 'Book'
                      ? '📅'
                      : '⋯'}
              </Text>
              <Text style={isFocused ? styles.tabLabelActive : styles.tabLabel}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <View style={styles.appRoot}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <CustomTabBar {...props} onMorePress={() => setMenuVisible(true)} />
        )}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Find" component={FindScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
      <MoreMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  tabBarWrap: {
    position: 'absolute',
    bottom: 18,
    left: 16,
    right: 16,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E7F3F0',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 16,
  },
  tabItemActive: {
    backgroundColor: '#D6ECE7',
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 4,
  },
  tabLabel: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: COLORS.teal,
    fontWeight: '700',
  },
});
