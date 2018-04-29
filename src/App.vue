<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarters">
            <router-link to="/"><img src="./assets/logo.png" /></router-link>
          </div>
          <div class="column is-three-quarters">
            <div class="columns">
              <div class="column">
                <div class="field has-addons">
                  <div class="control">
                    <input class="input" type="text" placeholder="Search...">
                  </div>
                  <div class="control">
                    <a class="button is-info">Search</a>
                  </div>
                </div>
              </div>
              <div class="column has-text-right">
                <span class="menu-icons fa fa-envelope is-size-3"></span>
                <span class="menu-icons fa fa-bell is-size-3"></span>
                <img class="profile-pic-small" :src="profileImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="section">
  <div class="container">
    <div class="columns">
      <div id="website-menu" class="column is-one-quarters website-menu">
        <aside class="menu">
          <h3 class="title is-5">Lori Greiner @ Merkspace</h3>
          <div class="profile-image-container">
            <img class="profile-pic-main" :src="profileImage" />
            <p>Profile strength {{ profileStrength }}%</p>
          </div>
          <progress class="progress is-success is-small rotate-90" :value="profileStrength" max="100">{{ profileStrength }}%</progress>
          <ul class="menu-list">
            <li v-for="menuItem in menuItems" :key="menuItem.text">
              <router-link v-bind:to="menuItem.link">{{ menuItem.text }}</router-link>
            </li>
          </ul>
          <br><br>
          <a class="button is-rounded">Manage your profile</a>
        </aside>
      </div>
      <div id="chat-box" class="column is-half main-vue is-hidden-mobile">
        <router-view/>
      </div>


      <div id="chat-list" class="column is-one-quarters chat-section">
        <aside class="aside hero">
          <div class="compose">
            <button v-on:click="toggleMenu" class="is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only">Menu</button><h3>CHATS</h3></div>
          <div class="tabs">
            <ul>
              <li class="is-active"><a>Individual</a></li>
              <li><a>Group Chat</a></li>
            </ul>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-primary" type="text" placeholder="Search message or people">
              <span class="add-user"> <i class="fa fa-plus" aria-hidden="true"></i></span>
            </div>
          </div>
          <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong><a hre="#" v-on:click="showChat">John Doe</a></strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
           <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong>John Doe</strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
           <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong>John Doe</strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
           <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong>John Doe</strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
           <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong>John Doe</strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
           <div class="chat-person-details">
            <div class="chat-image"><i class="fa fa-user-o" aria-hidden="true"></i></div>
            <div class="details">
              <p class="name"><strong>John Doe</strong></p>
              <p class="date">Sep, 9</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      profileImage: '../static/profile-pic.jpg',
      profileStrength: 82,
      menuItems: [
        { text: 'Home', link: '/' },
        { text: 'Members', link: '/' },
        { text: 'Chat', link: '/chat' },
        { text: 'Events', link: '/' },
        { text: 'Q&A', link: '/' },
        { text: 'Rooms', link: '/' },
        { text: 'My Merkspace', link: '/' }
      ]
    }
  },
  methods: {
    showChat: function(){
      var chatBox = document.getElementById("chat-box"),
          chatList = document.getElementById("chat-list");

      chatBox.classList.toggle("is-hidden-mobile");
      chatList.classList.toggle("is-hidden-mobile");
    },
    toggleMenu: function() {
      document.getElementById("website-menu").style.animation = "mynewmove 1s 1"
    }
  }
}
</script>

<style>
@-webkit-keyframes mynewmove {
    from {left: -290px;}
    to {left: 0px;}
}
@keyframes mynewmove {
    from {left: -290px;}
    to {left: 0px;}
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 20px;
  font-size:.7rem;
}
h1,h2{
  font-size:1.5rem !important;
}
h3{
  font-size:1rem;
}
.main-vue {
  background: #f4f4f4;
}
.profile-pic-main, .profile-pic-small {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
}
.profile-pic-small {
  width: 40px;
  height: 40px;
}
.rotate-90 {
  transform: rotate(-90deg);
  width: 200px;
  position: relative;
  left: -93px;
  top: -102px;
}
.profile-image-container {
  padding-left: 50px;
}
.menu-icons {
  display: inline-block;
  margin-right: 10px;
}
.chat-section{
  padding: 0 20px;
}
.tabs {
  margin-bottom:0px!important;
}
.tabs li {
  width:50%;
} 
.tabs a {
  border:none;
}
.control ::placeholder {
  font-size : 12px;
}
.add-user {
  position: absolute;
    right: 5px;
    top: 9px;
}
.tabs li.is-active a{
  border-bottom:5px solid #3bdb0f!important;
}
.tabs ul:first-child a {
  color:#191919!important;
  padding-left:0!important;
  float:left!important;
}
.chat-person-details {
  margin:10px 0;
}
.chat-image {
  height:36px;
  padding: 0 8px;
  float:left;
  font-size:22px;
  color:#3bdb0f!important;
  border-radius:50%;
  border:1px solid #3bdb0f!important;
  margin-right:10px;
}
.details {
  width:70%;
  float:left;
 }
.chat-summary {
  width:100%;
  position:relative;
}
.chat-summary .msg-from {
  color: #3bdb0f;
  font-size:18px;
  font-weight:600;
  margin:10px 0;
}
.sender-details {
  float:left;
  width:100%;
}
.sender-img {
  width:25px;
  height:25px;
  padding: 0 4px;
  float:left;
  font-size:17px;
  color:#3bdb0f!important;
  border-radius:50%;
  border:1px solid #3bdb0f!important;
  margin-right:10px;
  margin-top:19px;
}
.msg {
  float:left;
  width:auto;
  text-align:left;
}
.chat-time{
  margin:0 0 2px 8px;
  font-size:8px;
}
.chat-msg {
  background: #fff;
  padding: 5px 10px;
  border-radius: 15px;
} 
.myself {
  float:right;
  width:100%;
  margin-top:15px;
}
.myself .msg{
  float:right;
  text-align:right;
}
.myself .chat-time {
  margin:0 8px 2px 0;
}
.myself .chat-msg {
  float:right;
}
.myself .sender-img {
  float:right;
  margin-left:10px;
  margin-right:0;
}
.type-chat {
  background: #fff;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  width: 49%;
  margin-bottom:15px;
}
.type-chat .input {
  border:none;
  border-radius:15px;
}
@media screen and (max-width : 768px) {
  .website-menu {
    position: absolute;
    left: -290px;
    background: #fff;
    z-index: 999;
  }
}
</style>
