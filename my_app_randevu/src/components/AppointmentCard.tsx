import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Appointment {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{appointment.title}</Text>
      <Text style={styles.date}>{appointment.date}</Text>
      <Text style={styles.description}>{appointment.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});