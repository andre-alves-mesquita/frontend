<template>
    <div class="q-pa-md example-row-equal-width" style="display: flex; align-items: center; justify-content: center ;">
        <q-card-section style="margin-top: 200px;">
            <q-uploader url="http://localhost:8000/api/upload" color="teal" flat bordered style="max-width: 300px" :headers="[{ name: 'Accept', value: 'application/json' }, {
                name: 'Authorization', value: `Bearer ${logged.token}`
            }]" />
        </q-card-section>

    </div>
</template>

<script>
import { ref } from 'vue'
import { loadState, removeState, saveState } from './../localStorage'
export default {
    setup() {
        return {
            logged: ref(loadState("user")),
        }
    },
}
</script>
