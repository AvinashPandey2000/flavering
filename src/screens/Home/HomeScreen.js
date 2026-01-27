import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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
                            iconBg="#ffe2cf"
                            value="0"
                            title="Schedule"
                            action="Book Now"
                        />
                        <MetricCard
                            iconLabel="V"
                            iconBg="#e6fbf5"
                            value="0"
                            title="Vaccines Due"
                            action="View Due"
                        />
                        <MetricCard
                            iconLabel="R"
                            iconBg="#fff1d9"
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
        backgroundColor: '#f7f8f7',
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 24,
    },
    headerCard: {
        backgroundColor: '#00796b',
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
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 4,
    },
    subGreeting: {
        color: '#d9f3ee',
        fontSize: 16,
        fontWeight: '500',
    },
    profileCircle: {
        width: 48,
        height: 48,
        borderRadius: 32,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIcon: {
        fontSize: 24,
        fontWeight: '700',
        color: '#00796b',
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    metricCard: {
        flex: 1,
        backgroundColor: '#ffffff',
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
        color: '#2b2b2b',
    },
    metricValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2b2b2b',
        marginBottom: 2,
    },
    metricTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#666666',
        marginBottom: 8,
        textAlign: 'center',
    },
    metricAction: {
        color: '#00796b',
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
        color: '#1f1f1f',
    },
    sectionAction: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00796b',
    },
    petCard: {
        backgroundColor: '#ffffff',
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
        backgroundColor: '#fff3e2',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    petIconText: {
        fontSize: 26,
        fontWeight: '800',
        color: '#a55a00',
    },
    petName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f1f1f',
        marginBottom: 2,
    },
    petDetails: {
        fontSize: 12,
        fontWeight: '500',
        color: '#777777',
    },
    chevron: {
        fontSize: 26,
        color: '#b0b0b0',
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
        borderColor: '#00796b',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9f7f4',
    },
    reminderIcon: {
        color: '#00796b',
        fontSize: 18,
        fontWeight: '800',
    },
    reminderCard: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 26,
        alignItems: 'center',
    },
    reminderEmptyTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: '#2b2b2b',
        marginBottom: 6,
    },
    reminderEmptyText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#777777',
        textAlign: 'center',
        marginBottom: 16,
    },
    addReminderButton: {
        backgroundColor: '#d7f3ec',
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 14,
    },
    addReminderText: {
        color: '#00796b',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default HomeScreen;
