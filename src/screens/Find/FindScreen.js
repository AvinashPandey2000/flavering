import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../config';

const FilterChip = ({ label, icon, active }) => (
    <TouchableOpacity style={[
        styles.filterChip,
        active && styles.filterChipActive
    ]}>
        {icon && <View style={styles.filterIconContainer}><Text style={styles.filterIcon}>{icon}</Text></View>}
        <Text style={[
            styles.filterText,
            active && styles.filterTextActive
        ]}>{label}</Text>
    </TouchableOpacity>
);

const ProviderCard = () => (
    <View style={styles.providerCard}>
        <View style={styles.providerImagePlaceholder}>
            {/* Placeholder for image, using text for now if no image provided */}
            <Text style={{ fontSize: 30 }}>🏥</Text>
        </View>
        <View style={styles.providerInfo}>
            <View style={styles.providerHeader}>
                <Text style={styles.providerName}>Veterinary Medical Center</Text>
                <TouchableOpacity>
                    <Text style={styles.heartIcon}>❤️</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tagContainer}>
                <Text style={styles.tagText}>Hospital</Text>
            </View>
            <View style={styles.addressRow}>
                <Text style={styles.locationIcon}>📍</Text>
                <Text style={styles.addressText} numberOfLines={1}>
                    2765 Del Paso Rd 120, Sacramento...
                </Text>
                <TouchableOpacity style={styles.callButton}>
                    <Text style={styles.callIcon}>📞</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const FindScreen = () => {
    const insets = useSafeAreaInsets();

    const filters = [
        { id: 1, label: 'All', icon: '🏥', active: true },
        { id: 2, label: 'Hospital', icon: '🩺', active: false },
        { id: 3, label: 'Groomer', icon: '✂️', active: false },
        { id: 4, label: 'Boarding', icon: '🏠', active: false },
    ];

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                <View style={styles.headerTop}>
                    <Text style={styles.headerTitle}>Your Favourite Providers</Text>
                    <TouchableOpacity style={styles.menuButton}>
                        <View style={styles.menuIconLines}>
                            <View style={styles.menuLine} />
                            <View style={[styles.menuLine, { width: 12 }]} />
                            <View style={styles.menuLine} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search vets, groomers, boarders..."
                        placeholderTextColor={COLORS.textPlaceholder}
                    />
                </View>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Horizontal Filters */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filtersContainer}
                >
                    {filters.map(filter => (
                        <FilterChip
                            key={filter.id}
                            label={filter.label}
                            icon={filter.id === 1 ? '🏥' : filter.icon}
                            active={filter.active}
                        />
                    ))}
                </ScrollView>

                <Text style={styles.resultCount}>1 provider near you</Text>

                <ProviderCard />
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
                <Text style={styles.fabText}>Provider</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background, // Matches Home implementation
    },
    header: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingBottom: 24,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.textOnPrimary,
    },
    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.menuOverlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIconLines: {
        gap: 4,
        alignItems: 'flex-end',
    },
    menuLine: {
        width: 18,
        height: 2,
        backgroundColor: COLORS.textOnPrimary,
        borderRadius: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 50,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 10,
        opacity: 0.6,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: COLORS.textSecondary,
        height: '100%',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 100, // Space for FAB
    },
    filtersContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 12,
    },
    filterChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 25,
        gap: 8,
    },
    filterChipActive: {
        backgroundColor: COLORS.primary,
    },
    filterIconContainer: {
        width: 20,
        alignItems: 'center',
    },
    filterIcon: {
        fontSize: 16,
    },
    filterText: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.textSecondaryAlt,
    },
    filterTextActive: {
        color: COLORS.textOnPrimary,
        fontWeight: '600',
    },
    resultCount: {
        paddingHorizontal: 20,
        fontSize: 14,
        color: COLORS.textSubtle,
        marginBottom: 16,
    },
    providerCard: {
        marginHorizontal: 20,
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        padding: 16,
        flexDirection: 'row',
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    providerImagePlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: COLORS.providerImageBg, // Beige tone
        borderRadius: 16,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    providerInfo: {
        flex: 1,
    },
    providerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    providerName: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.textPrimaryAlt,
        flex: 1,
        marginRight: 8,
    },
    heartIcon: {
        fontSize: 18,
        color: COLORS.heart,
    },
    tagContainer: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.tagBg,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginVertical: 6,
    },
    tagText: {
        color: COLORS.primary,
        fontSize: 11,
        fontWeight: '600',
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        fontSize: 14,
        marginRight: 4,
    },
    addressText: {
        flex: 1,
        fontSize: 12,
        color: COLORS.textSubtle,
        marginRight: 8,
    },
    callButton: {
        backgroundColor: COLORS.callButtonBg,
        width: 32,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    callIcon: {
        fontSize: 14,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 18,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    fabIcon: {
        color: COLORS.textOnPrimary,
        fontSize: 22,
        fontWeight: '500',
        marginRight: 8,
        marginTop: -2,
    },
    fabText: {
        color: COLORS.textOnPrimary,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default FindScreen;
