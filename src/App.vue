<template>
  <q-layout view="lHh Lpr lFf" v-if="logged !== undefined && isExternal === false">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>
          Upload App
        </q-toolbar-title>

        <q-item clickable style="display: flex; justify-content: center;align-items: center;">
          <span style="display: flexbox; justify-content: center;" v-on:click="deslogar" clickable><q-icon name="logout"
              style="margin-right: 4px;" />Deslogar</span>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Links</q-item-label>
        <router-link to="/upload" class="text-dark text-weight-bold" style="text-decoration: none">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="upload" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Upload Arquivos</q-item-label>
              <q-item-label caption>Suba seus arquivos para o servidor</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link to="/gerenciar-upload" class="text-dark text-weight-bold" style="text-decoration: none">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="recommended" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Gerenciar Upload</q-item-label>
              <q-item-label caption>Autorize os uploads</q-item-label>
            </q-item-section>

          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>

  <Login v-if="logged === undefined && isExternal === false"></Login>

  <Cadastro v-if="logged === teste && isExternal === true"></Cadastro>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './views/Login.vue';
import { loadState, removeState, saveState } from './localStorage'
import { externalVerify } from './external'
import Cadastro from './views/Cadastro.vue';
import axios from 'axios'


export default {


  name: 'LayoutDefault',


  components: {
    HelloWorld,
    Login,
    Cadastro,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      logged: ref(loadState("user")),
      isExternal: ref(externalVerify())
    }
  },
  methods: {
    deslogar: async function () {
      let user = loadState("user")

      console.log(user.token)

      await axios.get('http://localhost:8000/api/user-logout', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        }
      }).then((response) => {
        removeState("user")
        window.location.reload()
        return response.data

      })
    },
  }
}
</script>


<style lang="scss" scoped>
.separator+.separator {
  margin-top: 24px;
}
</style>


