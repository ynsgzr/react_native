import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  cardText: {
    fontSize: 16,
  },
});

export default UserCard;