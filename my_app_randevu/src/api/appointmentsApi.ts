import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// RTK Query API tanımı
// export const appointmentsApi = createApi({
//   reducerPath: 'appointmentsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://api.example.com', // Buraya gerçek API URL'nizi koyun
//   }),
//   endpoints: (builder) => ({
//     getPastAppointments: builder.query({
//       query: () => '/appointments/past', // Geçmiş randevular için endpoint
//     }),
//   }),
// });

const mockData = [
    { id: 1, title: 'Doktor Ziyareti', date: '2024-12-01', description: 'Diş kontrolü' },
    { id: 2, title: 'Fizyoterapi', date: '2024-11-25', description: 'Bel ağrısı tedavisi' },
];

// Mock veriler
const mockUsers = [
    { id: '1', name: 'Ali Yılmaz' },
    { id: '2', name: 'Ayşe Demir' },
    { id: '3', name: 'Mehmet Kaya' },
];

const mockAvailableDates: { [key: string]: string[] } = { '1': ['2024-12-02', '2024-12-03', '2024-12-05', '2024-12-08', '2024-12-10'], '2': ['2024-12-01', '2024-12-04', '2024-12-06', '2024-12-07', '2024-12-09'], '3': ['2024-12-02', '2024-12-03', '2024-12-07', '2024-12-11', '2024-12-12'], '4': ['2024-12-05', '2024-12-08', '2024-12-09', '2024-12-10', '2024-12-11'], '5': ['2024-12-01', '2024-12-03', '2024-12-04', '2024-12-06', '2024-12-13'], '6': ['2024-12-02', '2024-12-05', '2024-12-09', '2024-12-10', '2024-12-14'], '7': ['2024-12-04', '2024-12-07', '2024-12-08', '2024-12-12', '2024-12-15'], '8': ['2024-12-01', '2024-12-03', '2024-12-05', '2024-12-11', '2024-12-13'], '9': ['2024-12-02', '2024-12-04', '2024-12-06', '2024-12-09', '2024-12-14'], '10': ['2024-12-01', '2024-12-05', '2024-12-07', '2024-12-10', '2024-12-12'], };

//const mockAvailableDates: { [key: string]: { [date: string]: string[] } } = { '1': { '2024-12-02': ['09:00', '09:30', '10:00', '10:30', '11:00'], '2024-12-03': ['09:00', '09:30', '10:00', '10:30', '11:00'], // Diğer tarihler... }, '2': { '2024-12-01': ['09:00', '09:30', '10:00', '10:30', '11:00'], '2024-12-04': ['09:00', '09:30', '10:00', '10:30', '11:00'], // Diğer tarihler... }, // Diğer kullanıcılar... };

export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: async () => ({ data: mockData }),
    // baseQuery: fetchBaseQuery({ baseUrl: '/' }), 
    endpoints: (builder) => ({
        getPastAppointments: builder.query({
            query: () => '/appointments/past',
        }),
        getUsers: builder.query({
            queryFn: async () => {
                return { data: mockUsers }; // Kullanıcıları döndür
            },
        }),
        getAvailableDates: builder.query({
            // query: (userId: string) => `/users/${userId}/available-dates`, // URL mock
            queryFn: async (userId: string) => {
                return { data: mockAvailableDates[userId] || [] };  
            },
        }),

        createAppointment: builder.mutation({
            // query: ({ userId, date }: { userId: string; date: string }) => ({
            //     url: `/users/${userId}/appointments`,
            //     method: 'POST',
            //     body: { date },
            // }),
            queryFn: async ({ userId, date }) => {
                console.log(`Randevu oluşturuldu: ${userId} için ${date}`);
                return { data: { success: true } }; // Mock başarı cevabı
            },
        }),



    }),
});

// API hook'u dışa aktar
export const { useGetPastAppointmentsQuery, useGetUsersQuery,
    useGetAvailableDatesQuery,
    useCreateAppointmentMutation } = appointmentsApi;




