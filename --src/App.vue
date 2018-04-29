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
      <div class="column is-one-quarters">
        <aside class="menu">
          <h3 class="title is-5">Lori Greiner @ Merkspace</h3>
          <div class="profile-image-container">
            <img class="profile-pic-main" :src="profileImage" />
            <p>Profile strength {{ profileStrength }}%</p>
          </div>
          <progress class="progress is-success is-small rotate-90" :value="profileStrength" max="100">{{ profileStrength }}%</progress>
          <ul class="menu-list">
            <li v-for="menuItem in menuItems" :key="menuItem.text">
              <router-link to="/">{{ menuItem.text }}</router-link>
            </li>
          </ul>
          <br><br>
          <a class="button is-rounded">Manage your profile</a>
        </aside>
      </div>
      <div class="column is-three-quarters main-vue">
        <router-view/>
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
        { text: 'Group', link: '/' },
        { text: 'Events', link: '/' },
        { text: 'Q&A', link: '/' },
        { text: 'Rooms', link: '/' },
        { text: 'My Merkspace', link: '/' }
      ]
    }
  }
}
</script>

<style>
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
</style>
