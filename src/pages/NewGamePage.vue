<script setup lang="ts">
import Panel from 'primevue/panel';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import router from '@/router';
import { ref } from 'vue';
import { useGameStore } from '@/stores/game';
import type { Game } from '@/type/Game';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import axios from 'axios';

const toast = useToast();

const gameForm = ref<Game>({
    name: '',
    price: 0,
    added: '2023-01-01',
    rating: 0,
    place: 'n/a',
    lastPlay: 'n/a',
});

const onSubmit = async () => {
    if (gameForm.value.name !== '') {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/'
        const createdGame = await axios.post(backendUrl, gameForm.value);
        useGameStore().addGame(createdGame.data);
        router.push('/home');
    } else {
        toast.add({ severity: 'contrast', summary: 'Oops, You must fill your game name', group: 'br', life: 3000 });
    }

};
</script>

<template>
    <div class="page-container">
        <Panel header="Add new game to your library 🎲" class="panel-container">
            <div class="form-container">
                <!--  1st row for game name / price -->
                <div class="first-form-row ">
                    <InputGroup>

                        <InputGroupAddon>
                            <i class="pi pi-user"></i>
                        </InputGroupAddon>
                        <InputText placeholder="Game name" v-model="gameForm.name" />
                    </InputGroup>

                    <InputGroup>
                        <InputGroupAddon>$</InputGroupAddon>
                        <InputNumber placeholder="Price you found the game" v-model="gameForm.price" />
                    </InputGroup>
                </div>

                <Divider />
            </div>
            <Toast position="bottom-right" group="br" />
            <Button label="Submit" @click="onSubmit()" />
        </Panel>
    </div>


</template>

<style scoped>
.page-container {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 80%;

    .panel-container {
        width: 100%;

        .form-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .first-form-row {
                display: flex;
                gap: 1rem;
            }
        }
    }
}
</style>
