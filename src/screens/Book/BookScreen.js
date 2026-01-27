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
            <StatusBar barStyle="light-content" backgroundColor="#00796b" />
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
                            <View style={[styles.quickBookCircle, { backgroundColor: '#26a69a' }]}>
                                <Text style={styles.quickBookEmoji}>🩺</Text>
                            </View>
                            <Text style={styles.quickBookText}>Vet Visit</Text>
                        </View>
                        <View style={styles.quickBookItemContainer}>
                            <View style={[styles.quickBookCircle, { backgroundColor: '#ffa726' }]}>
                                <Text style={styles.quickBookEmoji}>✂️</Text>
                            </View>
                            <Text style={styles.quickBookText}>Grooming</Text>
                        </View>
                        <View style={styles.quickBookItemContainer}>
                            <View style={[styles.quickBookCircle, { backgroundColor: '#7e57c2' }]}>
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
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#00796b',
        paddingHorizontal: 20,
        paddingBottom: 40, // Extended bottom for the curve effect if we had one, but simpler here
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#b2dfdb',
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
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
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
        color: '#333333',
    },
    sectionAction: {
        fontSize: 16,
        color: '#00796b',
        fontWeight: '600',
    },
    quickBookRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quickBookItemContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fcfcfc', // Slightly different bg for item area
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
        color: '#ffffff',
    },
    quickBookText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333333',
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
        borderColor: '#e0e0e0',
        backgroundColor: '#ffffff',
    },
    activeTabButton: {
        backgroundColor: '#00796b',
        borderColor: '#00796b',
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
    },
    activeTabText: {
        color: '#ffffff',
    },
    listContainer: {
        gap: 16,
    },
    appointmentCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    dateContainer: {
        backgroundColor: '#fff8e1', // Light yellow bg for date
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    dateMonth: {
        fontSize: 13,
        fontWeight: '600',
        color: '#00796b',
        marginBottom: 2,
    },
    dateDay: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00695c',
        marginBottom: 2,
    },
    dateYear: {
        fontSize: 13,
        fontWeight: '500',
        color: '#00796b',
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
        color: '#1f1f1f',
        marginBottom: 2,
    },
    typeBadge: {
        backgroundColor: '#fce4ec',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    typeText: {
        fontSize: 10,
        color: '#c2185b',
        fontWeight: '600',
    },
    clinicName: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeIcon: {
        fontSize: 12,
        marginRight: 4,
        color: '#757575',
    },
    timeText: {
        fontSize: 13,
        color: '#757575',
        fontWeight: '500',
    },
    footerText: {
        textAlign: 'center',
        marginTop: 30,
        color: '#9e9e9e',
        fontSize: 14,
    }
});

export default BookScreen;
