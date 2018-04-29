<template>
  <div>
    <h1 class="title is-2">Meeting Rooms</h1>
    <p class="is-size-6"><strong>Filter</strong> 
    <a class="button is-rounded">All Locations</a> 
    <a class="button is-rounded">Date</a> 
    <a class="button is-rounded">Time</a></p>
    <br><br>
    <div class="columns" v-for="roomChunk in RoomDetails" :key="roomChunk.text">
      <router-link to="/book-a-room/" class="column is-half" v-for="roomDetail in roomChunk" :key="roomDetail.text">
        <img :src="roomDetail.imagePath" />
        <p class="is-size-6">{{ roomDetail.description }}</p>
        <h1 class="title is-3">{{ roomDetail.text }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  data () {
    return {
      RoomDetails: _.chunk([
        { id: 1, text: 'Round Table Room', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/1.jpg' },
        { id: 2, text: 'Event Space A', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/2.jpg' },
        { id: 3, text: 'Executive Bedroom', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/3.jpg' },
        { id: 4, text: 'Powow Meeting Room', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/4.jpg' },
        { id: 5, text: 'Room Table B', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/5.jpg' },
        { id: 6, text: 'Event Space B', description: 'Merkspace Herengracht 499, 1051XL Amsterdam', imagePath: './static/6.jpg' }
      ], 2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
