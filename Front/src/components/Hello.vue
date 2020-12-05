<template>
  <header id="header">
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <img src="../assets/images/Logos.jpg" alt title />
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <router-link class="nav-link" to="/catalog">catalog</router-link>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <router-link :to="{name: 'dashboard', params: { user: this.$store.state.user}}">Dashboard</router-link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/login">login</router-link>
            </li>
            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/register">register</router-link>
            </li>
            <li v-if="loggedIn">
              <router-link class="nav-link" to="/logout">logout</router-link>
            </li>
            <b-nav-item-dropdown  v-if="loggedIn"  i class="icon-person">
              <b-dropdown-item>
                <li v-if="loggedIn">
                  <router-link
                    :to="{name: 'projects', params: {id: this.$store.state.user}}"
                  >Profile</router-link>
                </li>
                <li v-if="loggedIn">
                  <router-link class="nav-link" to="/upload">upload</router-link>
                </li>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </div>
  </header>
  <!-- #header -->
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style scoped>
.bold{
font-size: 50px;
}
</style>