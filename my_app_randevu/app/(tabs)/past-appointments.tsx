import { useGetPastAppointmentsQuery } from '@/src/api/appointmentsApi';
import AppointmentCard from '@/src/components/AppointmentCard';
import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
 
 

export default function PastAppointmentsScreen() {
  const { data, error, isLoading } = useGetPastAppointmentsQuery('123');

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="tomato" />
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Bir hata oluştu!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data} // API'den dönen randevular
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AppointmentCard appointment={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});