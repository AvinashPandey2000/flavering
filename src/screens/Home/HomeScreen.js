import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../config';

const MetricCard = ({ iconLabel, iconBg, value, title, action }) => (
    <View style={styles.metricCard}>
        <View style={[styles.metricIconCircle, { backgroundColor: iconBg }]}>
            <Text style={styles.metricIconText}>{iconLabel}</Text>
        </View>
        <Text style={styles.metricValue}>{value}</Text>
        <Text style={styles.metricTitle}>{title}</Text>
        <TouchableOpacity>
            <Text style={styles.metricAction}>{action}</Text>
        </TouchableOpacity>
    </View>
);

const PetCard = ({ iconLabel, name, details }) => (
    <TouchableOpacity style={styles.petCard}>
        <View style={styles.petLeft}>
            <View style={styles.petIconCircle}>
                <Text style={styles.petIconText}>{iconLabel}</Text>
            </View>
            <View>
                <Text style={styles.petName}>{name}</Text>
                <Text style={styles.petDetails}>{details}</Text>
            </View>
        </View>
        <Text style={styles.chevron}>{'>'}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.safeArea} >
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.headerCard, { paddingTop: insets.top + 12 }]}>
                    <View style={styles.headerTopRow}>
                        <View>
                            <Text style={styles.greeting}>Good morning, Jk</Text>
                            <Text style={styles.subGreeting}>How are your pets today?</Text>
                        </View>
                        <View style={styles.profileCircle}>
                            <Text style={styles.profileIcon}>P</Text>
                        </View>
                    </View>

                    <View style={styles.metricsRow}>
                        <MetricCard
                            iconLabel="C"
                            iconBg={COLORS.metricScheduleBg}
                            value="0"
                            title="Schedule"
                            action="Book Now"
                        />
                        <MetricCard
                            iconLabel="V"
                            iconBg={COLORS.metricVaccinesBg}
                            value="0"
                            title="Vaccines Due"
                            action="View Due"
                        />
                        <MetricCard
                            iconLabel="R"
                            iconBg={COLORS.metricRemindersBg}
                            value="0"
                            title="Reminders"
                            action="Manage"
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Your Pets</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionAction}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <PetCard
                        iconLabel="H"
                        name="Kala"
                        details="Abyssinian Horse · 0.0 yrs"
                    />
                    <PetCard
                        iconLabel="D"
                        name="Dog"
                        details="Affenpinscher · 5.0 yrs"
                    />
                </View>

                <View style={styles.section}>
                    <View style={styles.reminderHeader}>
                        <View style={styles.reminderIconCircle}>
                            <Text style={styles.reminderIcon}>B</Text>
                        </View>
                        <Text style={styles.sectionTitle}>Reminders</Text>
                    </View>

                    <View style={styles.reminderCard}>
                        <Text style={styles.reminderEmptyTitle}>No Reminders</Text>
                        <Text style={styles.reminderEmptyText}>
                            Set reminders for medications, vaccines, and more.
                        </Text>
                        <TouchableOpacity style={styles.addReminderButton}>
                            <Text style={styles.addReminderText}>Add Reminder</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 24,
    },
    headerCard: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingBottom: 24,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
    },
    headerTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },
    greeting: {
        color: COLORS.textOnPrimary,
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 4,
    },
    subGreeting: {
        color: COLORS.textOnPrimarySoft,
        fontSize: 16,
        fontWeight: '500',
    },
    profileCircle: {
        width: 48,
        height: 48,
        borderRadius: 32,
        backgroundColor: COLORS.surface,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIcon: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.primary,
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    metricCard: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: 22,
        paddingVertical: 16,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    metricIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    metricIconText: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.textPrimaryAlt,
    },
    metricValue: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimaryAlt,
        marginBottom: 2,
    },
    metricTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.textMuted,
        marginBottom: 8,
        textAlign: 'center',
    },
    metricAction: {
        color: COLORS.primary,
        fontWeight: '500',
        fontSize: 14,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 22,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    sectionAction: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.primary,
    },
    petCard: {
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    petLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    petIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 33,
        backgroundColor: COLORS.petIconBg,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    petIconText: {
        fontSize: 26,
        fontWeight: '800',
        color: COLORS.petIconText,
    },
    petName: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 2,
    },
    petDetails: {
        fontSize: 12,
        fontWeight: '500',
        color: COLORS.textMutedAlt,
    },
    chevron: {
        fontSize: 26,
        color: COLORS.iconMuted,
        fontWeight: '600',
        marginLeft: 12,
    },
    reminderHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 12,
    },
    reminderIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.reminderBorder,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.reminderBg,
    },
    reminderIcon: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: '800',
    },
    reminderCard: {
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 26,
        alignItems: 'center',
    },
    reminderEmptyTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: COLORS.textPrimaryAlt,
        marginBottom: 6,
    },
    reminderEmptyText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.textMutedAlt,
        textAlign: 'center',
        marginBottom: 16,
    },
    addReminderButton: {
        backgroundColor: COLORS.addReminderBg,
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 14,
    },
    addReminderText: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 16,
    },
});

export default HomeScreen;
