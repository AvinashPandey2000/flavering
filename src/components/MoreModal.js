import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const MoreModal = ({ isVisible, onClose, navigation }) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>More Options</Text>
                            <TouchableOpacity style={styles.option} onPress={() => console.log('My Pets')}>
                                <Text style={styles.optionText}>My Pets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => console.log('Reminders')}>
                                <Text style={styles.optionText}>Reminders</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => console.log('Vaccinations')}>
                                <Text style={styles.optionText}>Vaccinations</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => console.log('Profile')}>
                                <Text style={styles.optionText}>Profile</Text>
                            </TouchableOpacity>
                            <View style={styles.divider} />
                            <TouchableOpacity style={styles.option} onPress={() => console.log('Logout')}>
                                <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end', // Align toward bottom near the tabs
        alignItems: 'flex-end',
        paddingBottom: 80, // Adjust based on tab bar height
        paddingRight: 20,
    },
    modalContent: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        display: 'none' 
    },
    option: {
        paddingVertical: 12,
    },
    optionText: {
        fontSize: 16,
        fontWeight:'500',
        color: '#333',
    },
    logoutText: {
        color: 'red',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
});

export default MoreModal;
