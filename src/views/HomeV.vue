<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const redirectToNews = () => {
    router.push('/newscomponent');
};
</script>

<template>
  <div id="title" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1>Google Maps - API</h1>
        <p>Home🏡</p>
      </div>
    </div>
  </div>
  
</template>

<style>
</style>
