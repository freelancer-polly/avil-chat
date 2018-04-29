<template>
<div>    
<img :src="roomDetails.imagePath" />
	<div class="columns">
		<div class="column is-two-thirds room-details is-size-6">
			<h1 class="title is-3">{{ roomDetails.text }}</h1>
			<p>{{ roomDetails.description }}</p>
			<h3> About</h3>
			<!-- Amenities loop -->
			<div class="columns" v-for="amenities in roomDetails.amenities" 					:key="amenities.text">
				<div class="column" v-for="amenity in amenities" :key="amenity.text" >
					<span v-bind:class= amenity.icon></span> {{ amenity.text }}
				</div>
			</div>
		</div>
		<div class="column is-one-third meeting-details pad-adjst">
			<div class="booking-confirmed">
				<span>Booking confirmed</span>
				<router-link to="/my-bookings" class="my-bookings">My bookings</router-link>
			</div>
				<div class="details-holder" v-for="confirmations in roomDetails.confirmations" :key="confirmations.text">
					<div v-for="conf in confirmations" :key="conf.label">
						<p class="t-right">{{conf.label}} :</p>
						<p class="t-left">{{conf.details}}</p>
					</div>
				</div>
			<div class="column">
				<input type="button" value="Add to gCalender" class="g-calender">
				<input type="button" value="Cancel booking" class="cancel">
			</div>
		</div>
	</div>
</div>
</template>

<script>
import _ from 'lodash'

export default {
name: 'BookingConfirmation',
data () {
return {
roomDetails: { 
	text: 'Round Table Room', 
	description: 'Merkspace Herengracht 499, 1051XL Amsterdam', 
	imagePath: '../static/book-a-room-banner.jpg',
	amenities: _.chunk([
	{text: 'Up to 12 people', icon: 'fa fa-users'},
	{text: 'Wireless', icon: 'fa fa-wifi'},
	{text: 'Laptop friendly workshop', icon: 'fa fa-laptop'},
	{text: 'Television', icon: 'fa fa-television'}
	], 2),
	confirmations: _.chunk([
	{label: 'Meeting Details', details: 'sales meeting 2'},
	{label: 'Date', details: 'Dec 17, 2017'},
	{label: 'Check in', details: '4:20pm'},
	{label: 'Check out', details: '7:10pm'},
	{label: 'Booking ref', details: '1222345'}
	], 2)
}
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
	font-size:.7rem!important;
}
h1, h2 {
font-weight: 600;
margin:12px 0px 4px 0px!important;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
.room-details, .meeting-details {
position:relative;
padding:20px;
}
.pad-adjst{
	padding:40px;
}
.room-details {
border-right:1px solid #ccc;
}
.room-details p{
border-bottom: 1px solid #ccc;
padding-bottom:10px;
}
.room-details span {
margin-right : 10px;
}
.room-details h3{
padding:10px 0;
font-weight:600;
}
.booking-confirmed {
width: 100%;
padding:8px 15px;
background-color: #008000;
position: absolute;
top: -19px;
left:0;
}
.booking-confirmed span {
color:#fff;
font-size:.8rem;
font-weight:600;
}
.my-bookings {
	float:right;
	border-radius: 5px;
    border: 1px solid #ccc;
    padding: 1px 8px;
    font-size:.68rem;
	background: #fff;
}
.book-holder {
	text-align:center;
	margin: 20px 0 0 0;
}
.details-holder {
	text-align:center;
}
.details-holder p {
	margin: 5px;
	display:inline-block;
	width:44%
}
.details-holder p.t-left{
	text-align:left
}
.details-holder p.t-right {
	text-align:right;
}
.g-calender {
	float:left;
	border-radius: 5px;
    border: 1px solid #ccc;
    padding: 2px 8px;
}
.cancel{
	float:right;
	border-radius: 5px;
    border: 1px solid #ccc;
    padding: 2px 8px;
}
</style>