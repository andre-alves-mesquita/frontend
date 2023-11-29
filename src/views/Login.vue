<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center fundo">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                        <q-card-section class="text-center">
                            <div class="text-grey-9 text-h5 text-weight-bold">Login</div>
                            <div class="text-grey-8">Logue para acessar sua conta</div>
                        </q-card-section>
                        <q-card-section>
                            <q-input dense outlined label="Email" required v-model="email" name="email"></q-input>
                            <q-input dense outlined class="q-mt-md" type="password" label="Senha" required name="password"
                                v-model="password"></q-input>
                        </q-card-section>
                        <q-card-section>
                            <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Logar" no-caps
                                class="full-width" type="submit"></q-btn>
                        </q-card-section>
                        <q-card-section class="text-center q-pt-none">
                            <div class="text-grey-8">Não tem uma conta ainda
                                <router-link to="/cadastro" class="text-dark text-weight-bold"
                                    style="text-decoration: none">Criar
                                    conta</router-link>
                            </div>
                        </q-card-section>
                    </q-form>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
  
<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
    setup() {
        const submitResult = ref([])

        return {
            email: ref(''),
            password: ref(''),
            submitResult,

            async onSubmit(evt) {
                const formData = new FormData(evt.target)

                const data = []

                for (const [field, value] of formData.entries()) {
                    data.push({
                        field, value
                    })
                }

                submitResult.value = data

                let resposta = await axios.post('http://localhost:8000/api/user-login', { email: data[0].value, password: data[1].value }).then((response) => {
                    return response.data
                })

                console.log(resposta)
            }
        }
    },
    data() {
        return {
            posts: null,
            response: null
        }
    },
    methods: {
        async getPosts(data) {
            console.log(data[0])
            // this.posts = await axios.post('http://localhost:8000/api/user', { email: "" }).then((response) => {
            //     return response.data
            // })
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
  