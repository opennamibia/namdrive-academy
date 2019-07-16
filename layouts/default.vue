<template>
  <div>
    <the-navbar />
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
.btn-theme {
  background: #d00000;
  color: white;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.btn-theme:hover,
.btn-theme:active,
.btn-theme:focus {
  background: #a00000;
}
</style>
