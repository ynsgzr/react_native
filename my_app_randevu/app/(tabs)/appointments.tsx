import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Link } from 'expo-router';
import AppointmentsScreen from '@/src/features/Appointments/AppointmentsScreen';

const AppointmentsPage = () => {
  return (
    <View style={styles.container}>
     
      <AppointmentsScreen />

       
      <Link href="/past-appointments" style={styles.link}>
        Randevular Listesine Dön
      </Link>
    </View>
  );
};

export default AppointmentsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});