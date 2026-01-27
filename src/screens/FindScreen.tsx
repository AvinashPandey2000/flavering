import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

export default function FindScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View>
            <Text style={styles.heroTitle}>Your Favourite Providers</Text>
          </View>
          <View style={styles.filterCircle}>
            <Text style={styles.filterIcon}>≡</Text>
          </View>
        </View>

        <View style={styles.searchWrap}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search vets, groomers, boarders..."
            placeholderTextColor={COLORS.muted}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.chipRow}>
          <View style={[styles.chip, styles.chipActive]}>
            <Text style={styles.chipTextActive}>All</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Hospital</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Groomer</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Boarding</Text>
          </View>
        </View>

        <Text style={styles.providerHint}>1 provider near you</Text>

        <View style={styles.providerCard}>
          <View style={styles.providerLogo}>
            <Text style={styles.providerLogoText}>VMC</Text>
          </View>
          <View style={styles.providerInfo}>
            <Text style={styles.providerName}>Veterinary Medical Center</Text>
            <View style={styles.providerTag}>
              <Text style={styles.providerTagText}>Hospital</Text>
            </View>
            <Text style={styles.providerAddress}>
              2765 Del Paso Rd 120, Sacr...
            </Text>
          </View>
          <View style={styles.providerActions}>
            <Text style={styles.providerAction}>❤</Text>
            <View style={styles.callCircle}>
              <Text style={styles.callIcon}>📞</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable style={styles.fab}>
        <Text style={styles.fabText}>＋ Provider</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  hero: {
    backgroundColor: COLORS.teal,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  filterCircle: {
    height: 46,
    width: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -18,
    borderRadius: 18,
    paddingHorizontal: 12,
    height: 44,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
  },
  chipRow: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 20,
  },
  chip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  chipActive: {
    backgroundColor: COLORS.teal,
  },
  chipText: {
    color: COLORS.text,
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  providerHint: {
    marginTop: 14,
    paddingHorizontal: 20,
    color: COLORS.muted,
  },
  providerCard: {
    marginTop: 14,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  providerLogo: {
    height: 56,
    width: 56,
    borderRadius: 16,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  providerLogoText: {
    fontWeight: '700',
    color: COLORS.teal,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontWeight: '700',
    color: COLORS.text,
  },
  providerTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentSoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  providerTagText: {
    color: COLORS.tealDark,
    fontWeight: '600',
  },
  providerAddress: {
    marginTop: 6,
    color: COLORS.muted,
  },
  providerActions: {
    alignItems: 'center',
  },
  providerAction: {
    color: '#E15C5C',
    fontSize: 16,
    marginBottom: 10,
  },
  callCircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callIcon: {
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    backgroundColor: COLORS.teal,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 22,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  fabText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
