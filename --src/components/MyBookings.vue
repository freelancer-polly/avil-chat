<template>
    <div>
        <div class="columns">
            <div class="column">
                <h1 class="title">My Room Bookings</h1>
            </div>
            <div class="column has-text-right">
                <router-link class="button is-success is-rounded btn-back-to-rooms" to="/">Back to all rooms</router-link>
            </div>
        </div>
        
        <p class="is-size-6"><strong>Filter</strong> 
        <a class="button is-rounded">All Locations</a> 
        <a class="button is-rounded">Date</a>
        </p>
        <br><br>
        <div class="columns is-size-6" v-for="RoomDetail in RoomDetails" :key="RoomDetail.id">
            <div class="column">                
                <div class="room-image" :style="{ backgroundImage: 'url(' + RoomDetail.imagePath + ')' }">
                    <div class="hotel-name">{{ RoomDetail.text }}</div>
                    <div class="view-details has-text-centered">
                        <router-link to="/book-a-room">View Details</router-link>
                    </div>
                </div>
            </div>
            <div class="column is-size-7">
                <table border="0">
                    <tr>
                        <td><strong>Meeting Details: </strong></td>
                        <td>{{ RoomDetail.meetingDetails }}</td>
                    </tr>
                    <tr>
                        <td><strong>Date: </strong></td>
                        <td>{{ RoomDetail.bookDate }}</td>
                    </tr>
                    <tr>
                        <td><strong>Check in: </strong></td>
                        <td>{{ RoomDetail.checkIn }}</td>
                    </tr>
                    <tr>
                        <td><strong>Check out: </strong></td>
                        <td>{{ RoomDetail.checkOut }}</td>
                    </tr>
                    <tr>
                        <td><strong>Booking ref: </strong></td>
                        <td>{{ RoomDetail.bookingRef }}</td>
                    </tr>
                </table>
            </div>
            <div class="column">
                <a class="button is-rounded">Add to gCalendar</a>
                <br>
                <a class="button is-rounded">Cancel Booking</a>             
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyBookings',
        data () {
            return {
            RoomDetails: [
                { id: 1, text: 'Round Table Room', meetingDetails: 'Sales Meeting 2', imagePath: '../static/1.jpg', bookDate: 'Dec 17, 2017', checkIn: '4:20pm', checkOut: '7:10pm', bookingRef: '17122017-ESA-1' },
                { id: 2, text: 'Event Space A', meetingDetails: 'Sales Meeting 2', imagePath: '../static/2.jpg', bookDate: 'Dec 17, 2017', checkIn: '4:20pm', checkOut: '7:10pm', bookingRef: '17122017-ESA-1' }
            ]
            }
        }
    }
</script>

<style scoped>
    .btn-back-to-rooms {
        position: relative;
        right: 0;
        top: 0;
    }
    .room-image {
        height: 130px;
        width: 260px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        box-shadow: #CCC 2px 2px 2px;
    }
    .hotel-name {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 3px 5px;
    }
    td {
        padding: 3px 5px;
    }
    .view-details {
        background: #fff;
        padding: 3px 5px;
        bottom: 0;
        width: 100%;
        position: absolute
    }
</style>
