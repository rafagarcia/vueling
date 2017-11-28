<template>
  <div class="content has-text-centered">
    <vueling-user-edit :selected-user="selectedUser" @user-deselected="onUserDeselected"></vueling-user-edit>
    <vueling-users-list @user-selected="onUserSelected"></vueling-users-list>
    <router-link to="/page-one">Go to Page One</router-link>
  </div>
</template>

<script>
import VuelingUsersList from './VuelingUsersList'
import VuelingUserEdit from './VuelingUserEdit'
export default {
  name: 'VuelingAdmin',
  data () {
    return {
      selectedUser: {}
    }
  },
  components: {
    VuelingUsersList,
    VuelingUserEdit
  },
  methods: {
    onUserSelected (value) {
      this.selectedUser = value
    },
    onUserDeselected (value) {
      this.selectedUser = {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    padding: 1rem;
  }
</style>
