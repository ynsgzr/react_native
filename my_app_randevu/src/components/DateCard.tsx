import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DateCardProps {
  date: string;
  onPress: () => void;
}

const DateCard: React.FC<DateCardProps> = ({ date, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardText}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d1e7dd',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  cardText: {
    fontSize: 16,
  },
});

export default DateCard;