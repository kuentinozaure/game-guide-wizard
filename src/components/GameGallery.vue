<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import router from '@/router';

type Game = {
    name: string;
    price: number;
    added: string;
    rating: number;
    place: string;
}
const value = ''

const games: Game[] = [
    { name: 'Splendor', price: 3.50, added: '2023-10-02', rating: 0, place: 'Renaissance Masson' },
    { name: 'Dobble', price: 12.95, added: '2023-11-05', rating: 3, place: 'Divertioz' },
    { name: 'Monopoly Simpsons', price: 3.50, added: '2023-01-03', rating: 4, place: 'Renaissance Pie 9' },
    { name: 'Uno Flip', price: 2.95, added: '2024-01-03', rating: 3, place: 'Renaissance Masson' },
]

const onSearch = (typedSearch: string) => {
    console.log('searching for', typedSearch)
}

const onCreateGame = () => {
    router.push('/game')
}
</script>

<template>
    <div class="search-field-container">
        <IconField v-on:keyup.enter="onSearch(value)">
            <InputIcon class="pi pi-search" />
            <InputText v-model="value" placeholder="Search" />
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
