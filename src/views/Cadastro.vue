<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center fundo">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-card-section class="text-center">
                        <div class="text-grey-9 text-h5 text-weight-bold">Criar Conta</div>
                        <div class="text-grey-8">Informe seus dados para efetivar seu cadastro</div>
                    </q-card-section>
                    <q-card-section>
                        <q-input dense outlined label="Email"></q-input>
                        <q-input dense outlined class="q-mt-md" type="password" label="Senha"></q-input>
                        <q-input dense outlined class="q-mt-md" type="password" label="Confirmação de senha"></q-input>
                    </q-card-section>
                    <q-card-section>
                        <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Criar" no-caps
                            class="full-width"></q-btn>
                    </q-card-section>
                    <q-card-section class="text-center q-pt-none">
                        <div class="text-grey-8">Já possui uma conta?
                            <router-link to="/" class="text-dark text-weight-bold" style="text-decoration: none">Fazer
                                login</router-link>
                        </div>
                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
.fundo {
    background-image: url('https://source.unsplash.com/random');
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
    background-size: cover;
}
</style>