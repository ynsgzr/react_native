import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import {
  useGetUsersQuery,
  useGetAvailableDatesQuery,
  useCreateAppointmentMutation,
} from '../../api/appointmentsApi';
import UserCard from '../../components/UserCard';
import DateCard from '../../components/DateCard';

const AppointmentsScreen = () => {
  const { data: users, isLoading: usersLoading } = useGetUsersQuery('1');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: availableDates, isLoading: datesLoading } = useGetAvailableDatesQuery(selectedUserId || '', {
    skip: !selectedUserId, // Kullanıcı seçilmediyse istek atma
  });

  const [createAppointment] = useCreateAppointmentMutation();

  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
  };

  const handleDateSelect = async (date: string) => {
    if (!selectedUserId) return;
    try {
      const result = await createAppointment({ userId: selectedUserId, date }).unwrap();
      if (result.success) {
        Alert.alert('Başarılı', `Randevu oluşturuldu: ${date}`);
      }
    } catch (error) {
      Alert.alert('Hata', 'Randevu oluşturulamadı.');
    }
  };

  if (usersLoading) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View style={styles.container}> <Text style={styles.header}>Kullanıcı Seç</Text>
      <FlatList data={users} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<UserCard name={item.name} onPress={() => handleUserSelect(item.id)} />)}
        contentContainerStyle={styles.listContainer} /> {selectedUserId && (
          <>
            <Text style={styles.header}>Müsait Tarihler</Text> {datesLoading ? (<ActivityIndicator size="large" color="#0000ff" />) :
              (<FlatList data={availableDates} keyExtractor={(item) => item} renderItem={({ item }) =>
                (<DateCard date={item} onPress={() => handleDateSelect(item)} />)}
                horizontal contentContainerStyle={styles.datesListContainer} />)} </>)}
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, }, header: { fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: '#333', }, listContainer: { paddingBottom: 20, }, datesListContainer: { paddingVertical: 10, }, });

export default AppointmentsScreen;