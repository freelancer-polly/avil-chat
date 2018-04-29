<template>
  <div>
    <h1 class="title is-4 green-text"><i v-on:click="toggleDisplay" class="fa fa-chevron-left is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only"></i> {{ other.userName }}</h1>
    <div class="chat-container">
      <div v-for="chats in chatRecords" :key="chats.time">
        <div :class="'bubble bubble-' + chats.who">
          <div v-if="chats.who == 'other'" :class="'is-pulled-left image-for-' + chats.who"><img :src="self.displayPic" /></div>
          <div class="is-size-6 is-pulled-left">
            <div class="is-size-7 time-stamp" v-if="chats.who == 'self'">{{ chats.time }}</div>
            <div class="is-size-7 time-stamp" v-if="chats.who == 'other'">{{ other.userName }}, {{ chats.time }}</div>
            <div class="chat-bubble">{{ chats.text }}</div>
          </div>
          <div v-if="chats.who == 'self'" :class="'is-pulled-left image-for-' + chats.who"><img :src="other.displayPic" /></div>
        </div>
        <div class="is-clearfix"></div>
      </div>
    </div>
    <div class="chat-text-box">
      <input type="text" class="input is-primary is-rounded" placeholder="Write something..." />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'chat',
  data () {
    return {
      self: {
        userName: "Lori Greiner",
        displayPic: "./static/other.jpg"
      },
      other: {        
        userName: "John Doe",
        displayPic: "./static/self.jpg"
      },
      chatRecords: [
        {
          who: "other",
          text: "Hey do you have any advice for me about software development?",
          time: "9:48 PM"
        },{
          who: "self",
          text: "No really John... Sorry!",
          time: "9:49 PM"
        },{
          who: "other",
          text: "Hey do you have any other advice for me?",
          time: "9:50 PM"
        },{
          who: "self",
          text: "No!",
          time: "9:51 PM"
        }
      ]
    }
  },
  methods: {
    toggleDisplay: function(){
      var chatBox = document.getElementById("chat-box"),
          chatList = document.getElementById("chat-list");

      chatBox.classList.toggle("is-hidden-mobile");
      chatList.classList.toggle("is-hidden-mobile");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chat-bubble {
    background: #fff;
    border-radius: 50px;
    padding: 5px 20px;
    display: inline-block;
    width: auto;
    max-width: 500px;
  }
  .bubble {
    display: inline-block;
    margin-bottom: 5px;
    clear: both;
  }
  .bubble-self {
    float: right;
  }
  .image-for-self {
    margin-left: 10px;
    padding-top: 17px;
  }
  .image-for-other {
    margin-right: 10px;
    padding-top: 17px;
  }
  .chat-container {
    height: 520px;
    overflow-y: auto;
  }
  .chat-text-box {
    padding-top: 10px;
  }
  .green-text {
    color: #7ed320;
  }
  .time-stamp {
    padding-left: 20px;
  }
</style>