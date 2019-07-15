<template>
  <div>
    <the-navbar />
    <div class="divider"></div>
    <nuxt />
  </div>
</template>

<script>
import "~/assets/reset.css";
import TheNavbar from "~/components/TheNavbar";

export default {
  components: {
    TheNavbar
  }
};
</script>


<style>
.divider {
  height: 56px;
}
</style>
