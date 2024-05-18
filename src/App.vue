<script>

</script>

<template>
  <div id="title" class="container mt-5">
    <div class="row justify-content-center ">
      <div class="col-12 text-center">
        <RouterLink active-class="active" to="/">
          <button class="btn btn-secondary mx-4">
            <span>Home</span>
          </button>
        </RouterLink>

        <RouterLink active-class="active" to="/about">
          <button class="btn btn-secondary mx-4">
            <span>About</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>


</style>
