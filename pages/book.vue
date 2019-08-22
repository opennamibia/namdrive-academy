<template>
  <b-container style="max-width: 800px;" class="justify-content-center border">
    <form
      ref="bookingForm"
      name="namdrive-booking"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="namdrive-booking" />
      <p v-show="false">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <b-row class="justify-content-center">
        <b-col class="text-center mx-auto" md="12">
          <img class="w-75 my-5" src="~/assets/images/jumbo-logo.png" alt="Namdrive branding image" />
        </b-col>
      </b-row>

      <b-row>
        <h4 class="mx-auto mb-5 text-center">BOOK YOUR DRIVING LESSONS ONLINE</h4>
      </b-row>

      <b-row class="bg-secondary text-white text-center">
        <p class="mx-auto my-2">TRAINING IN WHICH YOU WISH TO ENROLL</p>
      </b-row>

      <b-row>
        <p class="mx-auto my-3">
          <b>Please tick the appropriate box</b>
        </p>
      </b-row>

      <b-row class="justify-content-center px-3">
        <b-form-group>
          <b-form-radio
            v-model="client.package"
            name="package-choice"
            value="Learner + Drivers"
            required
          >Learner and Driver Training Package (Code B)</b-form-radio>
          <b-form-radio
            v-model="client.package"
            name="package-choice"
            value="Drivers Only"
            required
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
        <b-col class="mb-4" md="3">
          <label for="booking-date">Date</label>
          <b-form-input
            v-model="client.bookingDate"
            id="booking-date"
            name="bookingDate"
            type="date"
            required
          />
        </b-col>

        <b-col class="mb-4" md="2">
          <label for="booking-user-title">Title</label>
          <b-form-input
            v-model="client.title"
            id="booking-user-title"
            type="text"
            name="title"
            key="title"
            required
            maxlength="10"
          />
        </b-col>

        <b-col class="mb-4" md="7">
          <label for="booking-user-names">First name(s)</label>
          <b-form-input
            v-model="client.firstnames"
            id="booking-user-names"
            name="firstnames"
            type="text"
            required
            maxlength="50"
          />
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-user-lastname">Last name</label>
          <b-form-input
            v-model="client.lastname"
            id="booking-user-lastname"
            type="text"
            name="lastname"
            required
            maxlength="20"
          />
        </b-col>

        <b-col class="mb-4" md="3">
          <label for="booking-user-birth">Date of birth</label>
          <b-form-input
            v-model="client.birthday"
            id="booking-user-birth"
            type="date"
            name="birthday"
            required
          />
        </b-col>

        <b-col class="mb-4" md="4">
          <label for="booking-user-id">ID/Passport no.</label>
          <b-form-input
            v-model="client.idNumber"
            id="booking-user-id"
            type="text"
            name="idNumber"
            required
          />
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-user-gender">Gender</label>
          <b-form-group>
            <b-form-radio
              v-model="client.gender"
              class="d-inline"
              value="male"
              name="client-gender"
              required
            >Male</b-form-radio>
            <b-form-radio
              v-model="client.gender"
              class="d-inline ml-3"
              value="female"
              name="client-gender"
              required
            >Female</b-form-radio>
          </b-form-group>
        </b-col>

        <b-col class="mb-4" md="7">
          <label for="booking-user-email">Email address</label>
          <b-form-input
            v-model="client.email"
            id="booking-user-email"
            type="email"
            name="email"
            required
          />
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-user-phone">Cell no. (eg. +264812345678)</label>
          <b-form-input
            v-model="client.cellphone"
            id="booking-user-phone"
            type="text"
            name="cellphone"
            required
            pattern="^\+[1-9]{1}[0-9]{3,14}$"
            title="Please enter a valid cellphone number."
          />
        </b-col>

        <b-col class="mb-4" md="7">
          <label for="booking-user-title">Physical Address</label>
          <b-form-input
            v-model="client.address"
            id="booking-user-title"
            type="text"
            name="address"
            required
            maxlength="128"
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mb-2" md="12">
          <p>
            <b>If under 17, details of next of kin:</b>
          </p>
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-kin-lastname">Lastname</label>
          <b-form-input
            v-model="kin.lastname"
            id="booking-kin-lastname"
            type="text"
            name="kin-lastname"
            maxlength="20"
          />
        </b-col>

        <b-col class="mb-4" md="7">
          <label for="booking-kin-names">First name(s)</label>
          <b-form-input
            v-model="kin.firstnames"
            id="booking-kin-names"
            type="text"
            name="kin-firstnames"
            maxlength="50"
          />
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-kin-cell">Cell no. (eg. +264812345678)</label>
          <b-form-input
            v-model="kin.cellphone"
            id="booking-kin-cell"
            type="text"
            name="kin-phone"
            pattern="^\+[1-9]{1}[0-9]{3,14}$"
            title="Please enter a valid cellphone number."
          />
        </b-col>

        <b-col class="mb-4" md="4">
          <label for="booking-kin-id">ID/Passport no.</label>
          <b-form-input
            v-model="kin.idNumber"
            id="booking-kin-id"
            type="text"
            name="kin-id"
            maxlength="30"
          />
        </b-col>

        <b-col class="mb-4" md="3">
          <label for="booking-kin-title">Title</label>
          <b-form-input
            v-model="kin.title"
            id="booking-kin-title"
            type="text"
            name="kin-title"
            maxlength="10"
          />
        </b-col>

        <b-col class="mb-4" md="5">
          <label for="booking-kin-relationship">Relationship</label>
          <b-form-input
            v-model="kin.relationship"
            id="booking-kin-relationship"
            type="text"
            name="kin-relationship"
            maxlength="50"
          />
        </b-col>

        <b-col md="7">
          <label for="booking-kin-email">Email address</label>
          <b-form-input v-model="kin.email" id="booking-kin-email" type="text" name="kin-email" />
        </b-col>

        <b-col class="my-2" md="12">
          <p>
            <b>
              <u>
                Note, if you are note a Namibian citizen, please provide the
                following on day of appointment:
              </u>
            </b>
          </p>
        </b-col>

        <b-col class="mb-2 text-center" md="12">
          <p>A: Traffic Registration Certificate</p>
          <p>B: Certified copy of passport</p>
          <p>C: Copy of Learner's License</p>
        </b-col>
      </b-row>

      <b-row class="bg-secondary text-white text-center">
        <p class="mx-auto my-2">DRIVING SKILL</p>
      </b-row>

      <b-row class="py-4">
        <b-col class="mx-auto text-center" md="12">
          <b-form-group>
            <b-form-radio
              v-model="client.experience"
              style="font-size: 0.9em;"
              class="d-inline"
              name="experience-choice"
              value="amateur"
              required
            >Amateur</b-form-radio>
            <b-form-radio
              v-model="client.experience"
              style="font-size: 0.9em;"
              class="d-inline ml-3"
              name="experience-choice"
              value="intermediate"
              required
            >Intermediate</b-form-radio>
            <b-form-radio
              v-model="client.experience"
              style="font-size: 0.9em;"
              class="d-inline ml-3"
              name="experience-choice"
              value="professional"
              required
            >Professional</b-form-radio>
          </b-form-group>
        </b-col>

        <b-col class="text-center" md="12">
          <b-link target="_blank" to="/pricing">
            <small>
              <u>
                Please ensure you have reviewed our prices, click here to
                view.
              </u>
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
            Your lessons will commence when payment has been received in full,
            please email your proof of payment to namdriveacademy@gmail.com
            <b>
              we will email/call you as soon as your booking has been
              approved.
            </b>
          </p>
        </b-col>
      </b-row>

      <b-row class="pb-4">
        <b-col class="mb-2" md="12">
          <b-button type="submit" @click="makeBooking" class="btn-theme">SUBMIT BOOKING</b-button>
          <input ref="hiddenValidate" type="submit" hidden />
        </b-col>
        <b-col md="12">
          <p>
            <small>
              By submitting this booking, you are agreeing to our
              <a href="#">terms and conditions</a>
            </small>
          </p>
        </b-col>
      </b-row>
    </form>
  </b-container>
</template>

<script>
export default {
  name: "book",
  data: () => ({
    client: {
      package: "",
      bookingDate: "",
      firstnames: "",
      lastname: "",
      birthday: "",
      idNumber: "",
      gender: "",
      email: "",
      cellphone: "",
      address: "",
      experience: ""
    },
    kin: {
      firstnames: "",
      lastname: "",
      cellphone: "",
      idNumber: "",
      title: "",
      relationship: "",
      email: ""
    }
  }),
  computed: {
    enteredKin() {
      const isEntered = Object.keys(this.kin).filter(key => {
        if (this.kin[key] !== "") {
          let prop = `kin-${key}`;
          return {
            prop: this.kin[key]
          };
        }
      });
    }
  },
  methods: {
    makeBooking(e) {
      e.preventDefault();
      if (!this.$refs.bookingForm.checkValidity()) {
        this.$refs.hiddenValidate.click();
      } else {
        fetch("/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/w-xxx-form-urlencoded"
          },
          body: this.encode({
            "form-name": "namdrive-booking",
            ...this.enteredKin,
            ...this.client
          })
        })
          .then(() => {
            alert("Thank you for your booking!");
            this.$refs.bookingForm.reset();
            this.$router.push("/");
          })
          .catch(err => {
            alert("An error occurred, plwase try again later!");
          });
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    }
  }
};
</script>

<style>
label {
  font-weight: bold;
  margin-bottom: 0;
}
</style>
