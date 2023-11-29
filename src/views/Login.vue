<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center fundo">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-card-section class="text-center">
                        <div class="text-grey-9 text-h5 text-weight-bold">Login</div>
                        <div class="text-grey-8">Logue para acessar sua conta</div>
                    </q-card-section>
                    <q-card-section>
                        <q-input dense outlined label="Email"></q-input>
                        <q-input dense outlined class="q-mt-md" type="password" label="Senha"></q-input>
                    </q-card-section>
                    <q-card-section>
                        <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Logar" no-caps
                            class="full-width" @click="getPosts"></q-btn>
                    </q-card-section>
                    <q-card-section class="text-center q-pt-none">
                        <div class="text-grey-8">Não tem uma conta ainda
                            <router-link to="/cadastro" class="text-dark text-weight-bold"
                                style="text-decoration: none">Criar
                                conta</router-link>
                            {{ posts }}
                        </div>
                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
  
<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: null
        }
    },
    methods: {
        async getPosts() {
            this.posts = await axios.get('http://localhost:8000/api/user').then((response) => {
                return response.data
            })
        }
    }
}
</script>
  
<style scoped>
.fundo {
    background-image: url('https://source.unsplash.com/random');
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
    background-size: cover;
}
</style>
  