import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../config';

const QuickBookItem = ({ icon, label, bgColor, iconColor }) => (
    <TouchableOpacity style={styles.quickBookItem}>
        <View style={[styles.quickBookIconContainer, { backgroundColor: bgColor }]}>
            <Text style={[styles.quickBookIcon, { color: iconColor }]}>{icon}</Text>
        </View>
        <Text style={styles.quickBookLabel}>{label}</Text>
    </TouchableOpacity>
);

const AppointmentCard = ({ date, month, year, petName, clinicName, time, type }) => (
    <View style={styles.appointmentCard}>
        <View style={styles.dateContainer}>
            <Text style={styles.dateMonth}>{month}</Text>
            <Text style={styles.dateDay}>{date}</Text>
            <Text style={styles.dateYear}>{year}</Text>
        </View>
        <View style={styles.appointmentDetails}>
            <View style={styles.petHeader}>
                <Text style={styles.petName}>{petName}</Text>
                <View style={styles.typeBadge}>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
            <Text style={styles.clinicName}>{clinicName}</Text>
            <View style={styles.timeContainer}>
                <Text style={styles.timeIcon}>🕒</Text>
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </View>
    </View>
);

const SectionHeader = ({ title, action }) => (
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {action && (
            <TouchableOpacity>
                <Text style={styles.sectionAction}>{action}</Text>
            </TouchableOpacity>
        )}
    </View>
);

const BookScreen = () => {
    const insets = useSafeAreaInsets();
    const [activeTab, setActiveTab] = useState('Upcoming');

    const upcomingAppointments = [
        {
            id: '1',
            date: '14',
            month: 'Oct',
            year: '2025',
            petName: 'Kala',
            clinicName: "Susan's Clinic",
            time: '6:33 PM',
            type: 'In-Hospital',
        },
        {
            id: '2',
            date: '14',
            month: 'Oct',
            year: '2025',
            petName: 'Kala',
            clinicName: "Susan's Clinic",
            time: '6:33 PM',
            type: 'In-Hospital',
        },
    ];

    const pastAppointments = [
        {
            id: '3',
            date: '10',
            month: 'Sep',
            year: '2025',
            petName: 'Dog',
            clinicName: "Vet Care",
            time: '2:00 PM',
            type: 'Grooming',
        },
        {
            id: '4',
            date: '01',
            month: 'Aug',
            year: '2025',
            petName: 'Kala',
            clinicName: "Pet Boarding",
            time: '10:00 AM',
            type: 'Boarding',
        }
    ];

    const displayAppointments = activeTab === 'Upcoming' ? upcomingAppointments : pastAppointments;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                <Text style={styles.headerTitle}>Appointments</Text>
                <Text style={styles.headerSubtitle}>Manage your pet care schedule</Text>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.card, styles.quickBookCard]}>
                    <SectionHeader title="Quick Book" action="Browse all" />


                    {/* Let's redo the QuickBookRow to match image better */}
                    <View style={styles.quickBookRow}>
                        <View style={styles.quickBookItemContainer}>
                            <View style={[styles.quickBookCircle, { backgroundColor: COLORS.quickBookVetBg }]}>
                                <Text style={styles.quickBookEmoji}>🩺</Text>
                            </View>
                            <Text style={styles.quickBookText}>Vet Visit</Text>
                        </View>
                        <View style={styles.quickBookItemContainer}>
                            <View style={[styles.quickBookCircle, { backgroundColor: COLORS.quickBookGroomingBg }]}>
                                <Text style={styles.quickBookEmoji}>✂️</Text>
                            </View>
                            <Text style={styles.quickBookText}>Grooming</Text>
                        </View>
                        <View style={styles.quickBookItemContainer}>
                            <View style={[styles.quickBookCircle, { backgroundColor: COLORS.quickBookBoardingBg }]}>
                                <Text style={styles.quickBookEmoji}>🏠</Text>
                            </View>
                            <Text style={styles.quickBookText}>Boarding</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTabButton]}
                        onPress={() => setActiveTab('Upcoming')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>
                            Upcoming ({upcomingAppointments.length})
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === 'Past' && styles.activeTabButton]} // Use active style for Past if selected
                        onPress={() => setActiveTab('Past')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Past' && styles.activeTabText]}>
                            Past ({pastAppointments.length})
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listContainer}>
                    {displayAppointments.map((item) => (
                        <AppointmentCard key={item.id} {...item} />
                    ))}
                </View>

                <Text style={styles.footerText}>You have reached the end of the list</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundAlt,
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingBottom: 40, // Extended bottom for the curve effect if we had one, but simpler here
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: COLORS.textOnPrimary,
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 16,
        color: COLORS.textOnPrimaryMuted,
        fontWeight: '400',
    },
    content: {
        flex: 1,
        marginTop: -20, // Overlap header
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        padding: 20,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textSecondary,
    },
    sectionAction: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '600',
    },
    quickBookRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quickBookItemContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.surfaceSoft, // Slightly different bg for item area
        marginHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 16,
    },
    quickBookCircle: {
        width: 48,
        height: 48,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    quickBookEmoji: {
        fontSize: 24,
        color: COLORS.textOnPrimary,
    },
    quickBookText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.textSecondary,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 12,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: COLORS.surface,
    },
    activeTabButton: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textMuted,
    },
    activeTabText: {
        color: COLORS.textOnPrimary,
    },
    listContainer: {
        gap: 16,
    },
    appointmentCard: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        // Shadow
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    dateContainer: {
        backgroundColor: COLORS.appointmentDateBg, // Light yellow bg for date
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    dateMonth: {
        fontSize: 13,
        fontWeight: '600',
        color: COLORS.primary,
        marginBottom: 2,
    },
    dateDay: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primaryDark,
        marginBottom: 2,
    },
    dateYear: {
        fontSize: 13,
        fontWeight: '500',
        color: COLORS.primary,
    },
    appointmentDetails: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    petHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    petName: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 2,
    },
    typeBadge: {
        backgroundColor: COLORS.badgeBg,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    typeText: {
        fontSize: 10,
        color: COLORS.badgeText,
        fontWeight: '600',
    },
    clinicName: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginBottom: 8,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeIcon: {
        fontSize: 12,
        marginRight: 4,
        color: COLORS.textMutedStrong,
    },
    timeText: {
        fontSize: 13,
        color: COLORS.textMutedStrong,
        fontWeight: '500',
    },
    footerText: {
        textAlign: 'center',
        marginTop: 30,
        color: COLORS.textSubtle,
        fontSize: 14,
    }
});

export default BookScreen;
