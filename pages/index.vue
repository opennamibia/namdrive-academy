<template>
  <main>
    <b-jumbotron class="jumbo bg-white border d-flex align-items-center justify-content-center">
      <img class="jumbo-image" src="~/assets/images/jumbo-logo.png" alt="Namdrive Logo" />
    </b-jumbotron>
    <b-container class="border-bottom mx-auto pb-4">
      <b-row class="justify-content-center mx-auto">
        <div class="mx-auto">
          <b-card
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 550px; min-width: 285px;"
          >
            <b-row no-gutters>
              <b-col md="6" class="text-center">
                <b-card-img
                  style="max-height: 200px; width: auto;"
                  src="~/assets/images/card-car.jpg"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Book online">
                  <b-card-text>Booking your driving lessons has never been easier. Just fill out our form.</b-card-text>
                  <b-button to="/pricing" class="btn-success shadow-sm mx-auto">BOOK NOW</b-button>
                  <b-link class="ml-3" to="/pricing">PRICING</b-link>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-row>
    </b-container>
    <section class="success-lead py-4 text-center inner-shadow">
      <h4 class="m-0 success-lead-text">Your success is our objective</h4>
    </section>
    <b-container>
      <b-row class="my-5 justify-content-center">
        <b-col md="4" class="d-flex justify-content-md-end justify-content-center">
          <div
            style="width: fit-content; height: fit-content;"
            class="shadow-sm border rounded p-3"
          >
            <img width="200px" src="~/assets/images/passing.jpg" alt="Man passing driver's test" />
          </div>
        </b-col>
        <b-col md="6" class="d-flex align-items-center text-center mt-5 mt-md-0">
          <p
            class="lead"
          >“From our instructors to our marketing - our mission is dependant on your success as a competent driver. The more our clients succeed, the more pride we take in our work.”</p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {};
</script>

<style>
.jumbo {
  border-radius: unset;
}
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
