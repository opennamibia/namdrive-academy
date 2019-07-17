<template>
  <b-container style="max-width: 800px;" class="justify-content-center border">
    <b-row class="justify-content-center">
      <img class="w-75 my-5" src="~/assets/images/jumbo-logo.png" alt="Namdrive branding image" />
    </b-row>

    <b-row>
      <h4 class="mx-auto mb-5">BOOK YOUR DRIVING LESSONS ONLINE</h4>
    </b-row>

    <b-row class="bg-secondary text-white text-center">
      <p class="mx-auto my-2">TRAINING IN WHICH YOU WISH TO ENROLL</p>
    </b-row>

    <b-row>
      <p class="mx-auto my-3">
        <b>Please tick the appropriate box</b>
      </p>
    </b-row>

    <b-row class="justify-content-center">
      <b-form-group>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="A"
        >Learner and Driver Training Package (Code B)</b-form-radio>
        <b-form-radio
          v-model="selected"
          name="some-radios"
          value="A"
        >Driver Training Package (Code B)</b-form-radio>
        <p class="text-muted mt-0 ml-4">
          <small>(We require you to present your valid learner's license)</small>
        </p>
      </b-form-group>
    </b-row>

    <b-row class="bg-secondary text-white text-center">
      <p class="mx-auto my-2">BASIC DETAILS</p>
    </b-row>

    <b-row class="py-4">
      <b-col class="mb-4" cols="3">
        <label for="booking-date">Date</label>
        <b-form-input id="booking-date" type="date" />
      </b-col>

      <b-col class="mb-4" cols="2">
        <label for="booking-user-title">Title</label>
        <b-form-input id="booking-user-title" type="text" />
      </b-col>

      <b-col class="mb-4" cols="7">
        <label for="booking-user-names">First name(s)</label>
        <b-form-input id="booking-user-names" type="text" />
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-user-lastname">Last name</label>
        <b-form-input id="booking-user-lastname" type="text" />
      </b-col>

      <b-col class="mb-4" cols="3">
        <label for="booking-user-birth">Date of birth</label>
        <b-form-input id="booking-user-birth" type="date" />
      </b-col>

      <b-col class="mb-4" cols="4">
        <label for="booking-user-id">ID/Passport no.</label>
        <b-form-input id="booking-user-id" type="text" />
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-user-gender">Gender</label>
        <b-form-group>
          <b-form-radio class="d-inline" value="male">Male</b-form-radio>
          <b-form-radio class="d-inline ml-3" value="female">Female</b-form-radio>
        </b-form-group>
      </b-col>

      <b-col class="mb-4" cols="7">
        <label for="booking-user-email">Email address</label>
        <b-form-input id="booking-user-email" type="email" />
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-user-phone">Cell no.</label>
        <b-form-input id="booking-user-phone" type="text" />
      </b-col>

      <b-col class="mb-4" cols="7">
        <label for="booking-user-title">Title</label>
        <b-form-input id="booking-user-title" type="text" />
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mb-2" cols="12">
        <p>
          <b>If under 17, details of next of kin:</b>
        </p>
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-kin-lastname">Lastname</label>
        <b-form-input id="booking-kin-lastname" type="text" />
      </b-col>

      <b-col class="mb-4" cols="7">
        <label for="booking-kin-names">First name(s)</label>
        <b-form-input id="booking-kin-names" type="text" />
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-kin-cell">Cell no.</label>
        <b-form-input id="booking-kin-cell" type="text" />
      </b-col>

      <b-col class="mb-4" cols="4">
        <label for="booking-kin-id">ID/Passport no.</label>
        <b-form-input id="booking-kin-id" type="text" />
      </b-col>

      <b-col class="mb-4" cols="3">
        <label for="booking-kin-title">Title</label>
        <b-form-input id="booking-kin-title" type="text" />
      </b-col>

      <b-col class="mb-4" cols="5">
        <label for="booking-kin-relationship">Relationship</label>
        <b-form-input id="booking-kin-relationship" type="text" />
      </b-col>

      <b-col cols="7">
        <label for="booking-kin-email">Email address</label>
        <b-form-input id="booking-kin-email" type="text" />
      </b-col>

      <b-col class="mb-2" cols="12">
        <p>
          <b>
            <u>Note, if you are note a Namibian citizen, please provide the following on day of appointment:</u>
          </b>
        </p>
      </b-col>

      <b-col class="mb-2 text-center" cols="12">
        <p>A: Traffic Registration Certificate</p>
        <p>B: Certified copy of passport</p>
        <p>C: Copy of Learner's License</p>
      </b-col>
    </b-row>

    <b-row class="bg-secondary text-white text-center">
      <p class="mx-auto my-2">DRIVING SKILL</p>
    </b-row>

    <b-row class="py-4">
      <b-col class="mx-auto text-center" cols="12">
        <b-form-group>
          <b-form-radio class="d-inline" value="female">Amateur</b-form-radio>
          <b-form-radio class="d-inline ml-3" value="female">Intermediate</b-form-radio>
          <b-form-radio class="d-inline ml-3" value="female">Professional</b-form-radio>
        </b-form-group>
      </b-col>

      <b-col class="text-center" cols="12">
        <b-link target="_blank" to="/pricing">
          <small>
            <u>Please ensure you have reviewed our prices, click here to view.</u>
          </small>
        </b-link>
      </b-col>
    </b-row>

    <b-row class="bg-secondary text-white text-center">
      <p class="mx-auto my-2">BANKING DETAILS</p>
    </b-row>

    <b-row class="py-4">
      <b-col class="p-3" md="6">
        <p class="my-0 mb-2">
          <b>BANK WINDHOEK</b>
        </p>
        <p class="my-0">
          Account Name:
          <b>Namdrive Academy cc</b>
        </p>
        <p class="my-0">
          Account Number:
          <b>8014230696</b>
        </p>
        <p class="my-0">
          Branch:
          <b>Katatura</b>
        </p>
        <p class="my-0">
          Account:
          <b>Cheque</b>
        </p>
        <p class="my-0">
          Reference:
          <b>Your name & surname</b>
        </p>
      </b-col>

      <b-col class="d-flex align-items-end text-primary" md="6">
        <p>
          Your lessons will commence when payment has been received in full, please email your proof of payment to namdriveacademy@gmail.com
          <b>we will email/call you as soon as your booking has been approved.</b>
        </p>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col class="mb-2" cols="12">
        <b-button class="btn-theme">SUBMIT BOOKING</b-button>
      </b-col>
      <b-col cols="12">
        <p>
          <small>
            By submitting this booking, you are agreeing to our
            <a href="#">
              terms and
              conditions
            </a>
          </small>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style>
label {
  font-weight: bold;
  margin-bottom: 0;
}
</style>
