import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
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

export default function BookScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <View>
            <Text style={styles.heroTitle}>Appointments</Text>
            <Text style={styles.heroSubtitle}>Manage your pet care schedule</Text>
          </View>
        </View>

        <View style={styles.quickBookCard}>
          <SectionTitle title="Quick Book" action="Browse all ›" />
          <View style={styles.quickBookRow}>
            <View style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickEmoji}>🩺</Text>
              </View>
              <Text style={styles.quickLabel}>Vet Visit</Text>
            </View>
            <View style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickEmoji}>✂️</Text>
              </View>
              <Text style={styles.quickLabel}>Grooming</Text>
            </View>
            <View style={styles.quickCard}>
              <View style={styles.quickIcon}>
                <Text style={styles.quickEmoji}>🏠</Text>
              </View>
              <Text style={styles.quickLabel}>Boarding</Text>
            </View>
          </View>
        </View>

        <View style={styles.segmentRow}>
          <View style={styles.segmentPill}>
            <Text style={styles.segmentLabel}>Upcoming (0)</Text>
          </View>
          <View style={[styles.segmentPill, styles.segmentActive]}>
            <Text style={styles.segmentLabelActive}>Past (2)</Text>
          </View>
        </View>

        <View style={styles.appointmentCard}>
          <View style={styles.dateBadge}>
            <Text style={styles.dateMonth}>Oct</Text>
            <Text style={styles.dateDay}>14</Text>
            <Text style={styles.dateYear}>2025</Text>
          </View>
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentName}>Kala</Text>
            <View style={styles.appointmentTag}>
              <Text style={styles.appointmentTagText}>In-Hospital</Text>
            </View>
            <Text style={styles.appointmentClinic}>Susan's Clinic</Text>
            <Text style={styles.appointmentTime}>6:33 PM</Text>
          </View>
        </View>

        <View style={styles.appointmentCard}>
          <View style={styles.dateBadge}>
            <Text style={styles.dateMonth}>Oct</Text>
            <Text style={styles.dateDay}>14</Text>
            <Text style={styles.dateYear}>2025</Text>
          </View>
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentName}>Kala</Text>
            <View style={styles.appointmentTag}>
              <Text style={styles.appointmentTagText}>In-Hospital</Text>
            </View>
            <Text style={styles.appointmentClinic}>Susan's Clinic</Text>
            <Text style={styles.appointmentTime}>6:33 PM</Text>
          </View>
        </View>

        <Text style={styles.endOfList}>You have reached the end of the list</Text>
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
  quickBookCard: {
    marginTop: -18,
    padding: 16,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  sectionAction: {
    color: COLORS.teal,
    fontWeight: '600',
  },
  quickBookRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  quickCard: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    backgroundColor: '#F7F2ED',
    width: '30%',
  },
  quickIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickEmoji: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  quickLabel: {
    fontWeight: '600',
    color: COLORS.text,
    fontSize: 12,
  },
  segmentRow: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  segmentPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.line,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
  },
  segmentActive: {
    backgroundColor: COLORS.teal,
    borderColor: COLORS.teal,
  },
  segmentLabel: {
    color: COLORS.muted,
    fontWeight: '600',
  },
  segmentLabelActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  appointmentCard: {
    marginTop: 16,
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
  dateBadge: {
    width: 72,
    borderRadius: 16,
    backgroundColor: '#F7E8C9',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 12,
  },
  dateMonth: {
    fontWeight: '700',
    color: COLORS.tealDark,
  },
  dateDay: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.tealDark,
  },
  dateYear: {
    color: COLORS.tealDark,
    fontWeight: '600',
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentName: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.text,
  },
  appointmentTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentSoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  appointmentTagText: {
    color: COLORS.tealDark,
    fontWeight: '600',
    fontSize: 12,
  },
  appointmentClinic: {
    marginTop: 8,
    color: COLORS.text,
    fontWeight: '600',
  },
  appointmentTime: {
    marginTop: 4,
    color: COLORS.muted,
  },
  endOfList: {
    textAlign: 'center',
    marginTop: 24,
    color: COLORS.muted,
  },
});
