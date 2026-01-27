import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export default function MoreScreen() {
  return <View style={styles.screen} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
});
