<script setup lang="ts">
import Profile from './components/Profile.vue';
import NavBar from './components/NavBar.vue';
import Experiencia from './components/Experiencia.vue';
</script>

<template>
  <NavBar />
  <div
    class="banner-personalizado bg-fixed justify-center space-x-12 space-y-36 shadow-lg bg-gray-600 w-full antialiased">
    <div class="w-full flex justify-center items-center colum">
      <div class="break-after-column"><Profile /></div>
      <div class="break-after-column"><Experiencia /></div>
    </div>
    <div class="h-96">

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
}
</style>
