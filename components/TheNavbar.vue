<template>
  <nav class="the-navbar">
    <div class="branding">
      <img
        width="48px"
        src="~/assets/namibian-flag-namdrive.png"
        alt="Namdrive Logo (Namibian Flag with text)"
      />
      <div class="branding-text">
        <h3 class="branding-title">Namdrive</h3>
        <p class="branding-subtitle">academy</p>
      </div>
    </div>
    <div class="navigation">
      <ul class="menu">
        <li class="menu-link">PRICING</li>
        <li v-if="$route.path != '/'" class="menu-link">HOME</li>
        <li class="menu-link-button">BOOK NOW</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "the-navbar"
};
</script>

<style>
.the-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0 5%;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.75px solid rgba(0, 0, 0, 0.4);
}

.branding {
  display: flex;
  align-items: center;
}

.branding-title,
.branding-subtitle {
  margin: 0;
  line-height: 0.9em;
}

.branding-text {
  margin-left: 10px;
}

.branding-title {
  font-weight: 400;
  font-size: 18px;
}

.branding-subtitle {
  font-size: 12px;
  text-align: right;
  color: #3c70bf;
}

.navigation {
  display: flex;
}

.menu {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
}

.menu-link,
.menu-link-button {
  margin-left: 14px;
  font-size: 14px;
}

.menu-link:hover,
.menu-link-button:hover {
  font-weight: bold;
  cursor: pointer;
}

.menu-link-button:hover {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.menu-link-button {
  background: #39e14a;
  padding: 0.6em 0.75em;
  font-weight: bold;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
