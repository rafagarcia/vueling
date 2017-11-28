<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vueling-users-admin</h1>
          <h2 class="subtitle">Users admin tool</h2>
        </div>
      </div>
    </section>
    <div class="content">
      <router-view/>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content is-small has-text-centered">
          <p>
            <b>Users Admin Tool</b> by <b>Vueling Workshop</b>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  padding: 1rem 0;
  flex: 1;
}

.footer {
  padding: 0;
}
</style>
