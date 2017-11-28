<template>
  <div class="content box has-text-centered">
    <template v-if="Object.keys(selectedUser).length === 0">
      <p>No ha seleccionado ningún usuario</p>
    </template>
    <template v-else-if="selectedUser">
      <div class="card">
        <div class="card-content">
          <figure>
            <img class="user-avatar" :src="selectedUser.picture.large" alt="Avatar del usuario" />
          </figure>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">ID</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" v-model="selectedUser.id.value" disabled aria-disabled="true">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" v-model="selectedUser.name.first">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Apellido</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" v-model="selectedUser.name.last">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" v-model="selectedUser.email">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <p class="card-footer-item" @click="deselectUser">Deseleccionar usuario</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VuelingUserEdit',
  props: ['selectedUser'],
  methods: {
    deselectUser () {
      this.$emit('user-deselected', this.selectedUser)
    }
  }
}
</script>

<style>
  .user-avatar {
    border-radius: 50%;
  }

  .link {
    cursor: pointer
  }
</style>
