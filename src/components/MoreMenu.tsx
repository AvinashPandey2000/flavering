import * as React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import COLORS from '../constants/colors';

type Props = {
  visible: boolean;
  onClose: () => void;
};

function MenuItem({
  label,
  icon,
  danger,
}: {
  label: string;
  icon: string;
  danger?: boolean;
}) {
  return (
    <View style={styles.menuItem}>
      <Text style={[styles.menuIcon, danger ? styles.menuDanger : null]}>
        {icon}
      </Text>
      <Text style={[styles.menuLabel, danger ? styles.menuDanger : null]}>
        {label}
      </Text>
    </View>
  );
}

export default function MoreMenu({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.menuCard} onStartShouldSetResponder={() => true}>
          <MenuItem label="My Pets" icon="🐾" />
          <MenuItem label="Reminders" icon="🔔" />
          <MenuItem label="Vaccinations" icon="💉" />
          <MenuItem label="Profile" icon="👤" />
          <View style={styles.menuDivider} />
          <MenuItem label="Logout" icon="⤴" danger />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 90,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    fontSize: 16,
    marginRight: 12,
    color: COLORS.text,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  menuDivider: {
    height: 1,
    backgroundColor: COLORS.line,
    marginVertical: 8,
  },
  menuDanger: {
    color: '#E15C5C',
  },
});
