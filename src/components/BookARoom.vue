<template>
<div>    
	<img :src="roomDetails.imagePath" />
	<div class="columns">
		<div class="column is-two-thirds room-details">
			<h1 class="title is-3">{{ roomDetails.text }}</h1>
			<p class="is-size-6">{{ roomDetails.description }}</p>
			<h3> About</h3>
			<!-- Amenities loop -->
			<div class="columns" v-for="amenities in roomDetails.amenities" 					:key="amenities.text">
				<div class="column is-size-6" v-for="amenity in amenities" :key="amenity.class" >
					<span v-bind:class=amenity.icon></span> {{ amenity.text }}
				</div>
			</div>
		</div>
		<div class="column meeting-details is-one-third is-size-6">
			<div class="book-room"><span>Book this room</span></div>
			<label for="meeting-details">Meeting details</label>
			<input type="text" placeholder="Sales meeting 2" id="meeting-details" class="meeting-details-input">
			<label for="meeting-details">Select date and time</label>
			<div class="select-date">
				<input type="date">
				<input type="time">
				<input type="time">
			</div>
			<div class="book-holder">
				<router-link class="button is-success" to="/booking-confirmation">Book</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import _ from 'lodash'

export default {
	name: 'BookARoom',
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
.meeting-details label {
display:block;
margin: 15px 0 4px 0;
font-weight:600;
}
input.meeting-details-input {
width:100%;
padding:2px 10px;
}
.select-date input{
width:28%;
}
.book-room {
width: 170px;
padding:4px;
background-color: #000;
position: absolute;
top: -19px;
opacity: 0.8;
text-align:center;
}
.book-room span {
color:#fff;
}
.book-holder {
	text-align:center;
	margin: 20px 0 0 0;
}
.book-this-room-btn{
	padding: 4px 29px;
    border-radius: 5px;
    border: 0;
    background-color: #21c439;
    color: #fff;
    font-weight: 600;
}
</style>
