<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      

      <nav>
  <div>
    <router-link
      to="/"
      custom
      v-slot="{ navigate }"
    >
      <button
        @click="navigate"
        role="home"
      >
        Home
      </button>
    </router-link>
  </div>


  <div>
    <router-link
      to="/project"
      custom
      v-slot="{ navigate }"
    >
      <button
        @click="navigate"
        role="project"
      >
        Project
      </button>
    </router-link>
  </div>

  <div>
    <router-link
      to="/myskills"
      custom
      v-slot="{ navigate }"
    >
      <button
        @click="navigate"
        role="myskills"
      >
        My Skills
      </button>
    </router-link>
  </div>


      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
  <p>Author: Rhys Evans</p>
  <p><a href="rhysev4ns77@gmail.com">rhysev4ns77@gmail.com</a></p>
  </footer>

</template>



<style scoped>

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(112, 107, 178);
  color: white;
  text-align: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

button {
  text-align: center;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: rgb(100, 124, 177);
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  width:150px;
}

button:hover {background-color: rgb(112, 107, 178)}

button:active {
  background-color: rgb(112, 107, 178);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
