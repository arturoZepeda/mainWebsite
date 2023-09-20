<script setup lang="ts">
import Profile from './components/Profile.vue';
import NavBar from './components/NavBar.vue';
import Experiencia from './components/Experiencia.vue';
</script>

<template>
  <NavBar />
  <div
    class="banner-personalizado bg-fixed justify-center space-y-36 shadow-lg bg-gray-600 w-full antialiased colums-1">
    <div class="flex justify-center items-center w-full">
        <Profile class="break-after-column w-1/2 content-center" />
    </div>
    <div class="flex justify-center items-center w-full ">
        <Experiencia class="break-after-column w-1/2 content-center h-fit" />
    </div>
    <div class="h-96">
      <div class="flex justify-center items-center">
        Horizontally Centered Element
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.banner-personalizado {
  background-repeat: no-repat;
  background-image: url(./assets/IMG_2997.jpeg);
  background-blend-mode: multiply;
  background-size: cover;
}</style>
