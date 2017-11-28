<template>
  <div class="content box has-text-centered">
    <template v-if="!!users.length">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="User avatar">Avatar</abbr></th>
            <th>ID</th>
            <th>Full name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="User avatar">Avatar</abbr></th>
            <th>ID</th>
            <th>Full name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>
          <tr class="user-row" v-for="user in users" :key="user.id.value">
            <td><img :src="user.picture.thumbnail" /></td>
            <td>{{user.id.value}}</td>
            <td>{{user.name.title}} {{user.name.first}} {{user.name.last}}</td>
            <td>{{user.email}}</td>
            <td><span class="user-row__edit" @click="selectUser(user)">EDITAR</span></td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-else>
      <p>No hay usuarios</p>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'VuelingUsersList',
  data () {
    return {
      users: [],
      errors: [],
      selectedUser: {}
    }
  },
  created () {
    axios.get(`https://randomuser.me/api/?nat=es&results=10&inc=id,email,name,picture`)
    .then(response => {
      this.users = response.data.results
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    selectUser (user) {
      this.selectedUser = user
      this.$emit('user-selected', user)
    }
  },
  computed: {
    fullName (user) {
      return this.user.name.title + ' ' + this.user.name.first + ' ' + this.user.name.last
    }
  },
  watch: {
    users (nweUsersList) {
      // console.dir(this.users)
    },
    selectedUser (user) {
      // console.log('Selected User ID is ' + user.id.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .user-row td {
    vertical-align: middle !important;
  }

  .user-row__edit {
    cursor: pointer;
  }

  .user-row img {
    border-radius: 50%;
  }

  .user-row__edit:hover {
    text-decoration: underline;
  }
</style>
