<template>
  <b-navbar class="border shadow-sm" toggleable="md" type="light">
    <b-navbar-brand to="/">
      <div class="row">
        <div class="col-4 text-right">
          <img height="44px" width="auto" src="~/assets/images/logo-car.png" alt />
        </div>
        <div class="col-8 d-flex align-items-center pl-1">
          <div>
            <h3 class="m-0 logo-title">NAMDRIVE</h3>
            <p class="m-0 text-right logo-subtitle">Academy</p>
          </div>
        </div>
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-if="$route.path !== '/pricing'"
          class="d-flex align-items-center"
          to="/pricing"
        >PRICING</b-nav-item>
        <b-nav-item v-else class="d-flex align-items-center" to="/">HOME</b-nav-item>
        <b-nav-item href="#">
          <b-button class="btn-success">BOOK NOW</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "the-navbar"
};
</script>

<style>
.logo-title,
.logo-subtitle {
  line-height: 0.9;
}
.logo-title {
  font-size: 24px;
}
.logo-subtitle {
  font-size: 16px;
  color: #d00000;
}
</style>
