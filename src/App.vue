<script setup lang="ts">
import { ref } from 'vue';
import Profile from './components/Profile.vue';
import NavBar from './components/NavBar.vue';
import Experiencia from './components/Experiencia.vue';
import Proyectos from './components/Proyectos.vue';
const Experiencias = ref([]);
const callouts = ref([]);
const temp = {
  puesto: 'Desarrollador Web',
  empresa: 'Empresa',
  ubicacion: 'Remoto',
  fechaInicio: '2015',
  fechaFin: 'Presente',
  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor',
  link: 'https://arturozepeda.xyz'
};
for (let i = 0; i < 4; i++) {
  Experiencias.value.push(temp);
}
const temp1 = {
  name: "nombre testnombre test nombre test nombre test v nombre test",
  href: "https://arturozepeda.xyz",
  description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion ",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  imageAlt: "test logo"
}
for (let i = 0; i < 7; i++) {
  callouts.value.push(temp1);
}

</script>

<template>
  <NavBar />
  <div class="banner-personalizado bg-fixed justify-center space-y-15 shadow-lg  bg-gray-600 w-full antialiased colums-1">
    <div class="flex justify-center items-center w-full py-10">
      <Profile class="break-after-column w-1/2 content-center" />
    </div>
    <div class="flex justify-center items-center">
      <div class="bg-white  rounded-lg ficha-inicial w-1/2">
        <!-- This is an example component -->
        <div class="max-w-2xl mx-auto py-3">
          <h2 class="text-2xl font-bold text-gray-900">Proyectos</h2>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <Experiencia class="break-after-column w-1/2 content-center h-fit" v-for="Experiencia in Experiencias"
              :Experiencia="Experiencia" />
          </ol>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center py-10">
      <div class="bg-white  rounded-lg ficha-inicial w-1/2">
        <!-- This is an example component -->
        <div class="max-w-2xl mx-auto py-3">
          <h2 class="text-2xl font-bold text-gray-900 columns-3 px-10">Proyectos</h2>
        <div class="columns-2 ">
          <Proyectos class="break-after-column content-center " v-for="callout in callouts" :callout="callout" />
        </div>
        </div>
      </div>
    </div>
    <div class="max-w-2xl mx-auto py-3 ">
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
}
</style>
