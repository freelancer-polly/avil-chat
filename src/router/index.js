import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import BookARoom from  '@/components/BookARoom'
import BookingConfirmation from  '@/components/BookingConfirmation'
import MyBookings from  '@/components/MyBookings'
import chat from  '@/components/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/book-a-room',
      name: 'Book a Room',
      component: BookARoom
    },
    {
      path: '/booking-confirmation',
      name: 'Booking Confirmation',
      component: BookingConfirmation
    },
    {
      path: '/my-bookings',
      name: 'My Bookings',
      component: MyBookings
    },
     {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
