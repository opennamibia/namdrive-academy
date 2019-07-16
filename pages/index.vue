<template>
  <main>
    <b-jumbotron class="jumbo bg-white border d-flex align-items-center justify-content-center">
      <img class="jumbo-image" src="~/assets/images/jumbo-logo.png" alt="Namdrive Logo" />
    </b-jumbotron>
    <section class="container-fluid border-bottom mx-auto pb-4">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 text-right d-flex align-items-center justify-content-center mx-auto"
        >
          <b-button class="ml-2 btn-success">BOOK NOW</b-button>
          <img
            height="80%"
            class="ml-4"
            src="~/assets/images/car-action.png"
            alt="Driver's test car"
          />
        </div>
      </div>
      <div class="row">
        <p class="mx-auto">
          <a href="#">or view our pricing</a>
        </p>
      </div>
    </section>
    <section class="success-lead py-4 text-center inner-shadow">
      <h4 class="m-0 success-lead-text">Your success is our objective</h4>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
.jumbo-image {
  max-width: 100%;
}

.inner-shadow {
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.success-lead {
  background-color: #f4f4f4;
}

.success-lead-text {
  color: black;
  font-weight: medium;
}
</style>
