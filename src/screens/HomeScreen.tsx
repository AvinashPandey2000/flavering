import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

function StatCard({
  icon,
  label,
  action,
}: {
  icon: string;
  label: string;
  action: string;
}) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIconCircle}>
        <Text style={styles.statIcon}>{icon}</Text>
      </View>
      <Text style={styles.statNumber}>0</Text>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statAction}>{action} →</Text>
    </View>
  );
}

function PetRow({
  emoji,
  name,
  meta,
}: {
  emoji: string;
  name: string;
  meta: string;
}) {
  return (
    <View style={styles.petRow}>
      <View style={styles.petAvatar}>
        <Text style={styles.petEmoji}>{emoji}</Text>
      </View>
      <View style={styles.petInfo}>
        <Text style={styles.petName}>{name}</Text>
        <Text style={styles.petMeta}>{meta}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View>
            <Text style={styles.heroTitle}>Good morning, JK</Text>
            <Text style={styles.heroSubtitle}>How are your pets today?</Text>
          </View>
          <View style={styles.heroAvatar}>
            <Text style={styles.heroAvatarIcon}>🐾</Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <StatCard icon="📅" label="Schedule" action="Book Now" />
          <StatCard icon="💉" label="Vaccines Due" action="View Due" />
          <StatCard icon="🔔" label="Reminders" action="Manage" />
        </View>

        <View style={styles.sectionBlock}>
          <SectionTitle title="Your Pets" action="View All ›" />
          <PetRow emoji="🐴" name="Kala" meta="Abyssinian Horse · 0.0 yrs" />
          <PetRow emoji="🐶" name="Dog" meta="Affenpinscher · 5.0 yrs" />

          <View style={styles.reminderBlock}>
            <View style={styles.reminderIcon}>
              <Text style={styles.reminderIconText}>🔔</Text>
            </View>
            <Text style={styles.reminderTitle}>Reminders</Text>
            <Text style={styles.reminderText}>
              No reminders set yet. Set reminders for meds, grooming, or
              checkups.
            </Text>
            <Pressable style={styles.reminderButton}>
              <Text style={styles.reminderButtonText}>Add Reminder</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 26,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: '#DDF3EE',
    marginTop: 6,
    fontSize: 14,
  },
  heroAvatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroAvatarIcon: {
    fontSize: 22,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F8FBFA',
    borderRadius: 18,
    marginHorizontal: 6,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statIconCircle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 16,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  statLabel: {
    color: COLORS.muted,
    marginTop: 4,
    fontSize: 12,
  },
  statAction: {
    color: COLORS.teal,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
  },
  sectionBlock: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 160,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  sectionAction: {
    color: COLORS.teal,
    fontWeight: '600',
  },
  petRow: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  petAvatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  petEmoji: {
    fontSize: 24,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.text,
  },
  petMeta: {
    color: COLORS.muted,
    marginTop: 2,
  },
  chevron: {
    fontSize: 20,
    color: COLORS.muted,
  },
  reminderBlock: {
    marginTop: 18,
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.surface,
  },
  reminderIcon: {
    height: 52,
    width: 52,
    borderRadius: 26,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reminderIconText: {
    fontSize: 22,
  },
  reminderTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  reminderText: {
    marginTop: 6,
    color: COLORS.muted,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  reminderButton: {
    marginTop: 14,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 18,
    backgroundColor: '#DCEEE9',
  },
  reminderButtonText: {
    color: COLORS.teal,
    fontWeight: '700',
  },
});
