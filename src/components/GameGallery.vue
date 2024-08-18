<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import router from '@/router';
import type { Game } from '@/type/Game';
import { useGameStore } from '@/stores/game';
import { onMounted, ref } from 'vue';
import axios from 'axios';


let userSearch = '';
let games = ref<Game[]>(useGameStore().getGames);

onMounted(async () => {
    games.value = (await axios.get('http://localhost:3000/game')).data
    useGameStore().addGames(games.value)
});

const onSearch = (typedSearch: string) => {
    userSearch = typedSearch
    games.value = useGameStore().getGameBySearchCriteria(userSearch);
}


const onCreateGame = () => {
    router.push('/game')
}

</script>

<template>
    <div class="search-field-container">
        <IconField v-on:keyup.enter="onSearch(userSearch)">
            <InputIcon class="pi pi-search" />
            <InputText v-model="userSearch" placeholder="Search" />
            <!-- To do implement the loader after we have a db -->
            <!-- <InputIcon class="pi pi-spin pi-spinner" />
          -->
        </IconField>

        <Button label="Create game" icon="pi pi-plus" @click="onCreateGame()" />


    </div>

    <div class="table-container">
        <DataTable :value="games" tableStyle="min-width: 50rem" stripedRows>
            <Column field="name" header="Name"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="added" header="Founded at"></Column>
            <Column field="rating" header="Rated"></Column>
            <Column field="place" header="Where"></Column>
        </DataTable>

    </div>

</template>

<style scoped>
.search-field-container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.table-container {
    max-width: 80%;
    min-width: 100%;
    max-height: 25rem;
    overflow: auto;
}
</style>
