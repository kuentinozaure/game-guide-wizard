<script setup lang="ts">
import Textarea from 'primevue/textarea';
import Panel from 'primevue/panel';
import Button from 'primevue/button';

let userSearch = '';

const onSearch = () => {
    console.log('Searching ...');
    userSearch = '';
}
</script>

<template>
    <div class="question-container">
        <Panel header="Response to your answer" class="answer-container ">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.
            </p>
        </Panel>
        <div class="question-field">
            <Textarea v-model="userSearch" rows="1" placeholder="Ask a question about your manual here"
                class="text-area" />
            <Button icon="pi pi-search" iconPos="top" @click="onSearch" />
        </div>

    </div>

</template>

<style scoped>
.question-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 80dvh;
    gap: 2rem;

    .answer-container {
        height: 100%;
        overflow: auto;


    }

    .question-field {
        display: flex;
        flex: 1;
        justify-content: space-between;
        gap: 1rem;

        .text-area {
            width: 100%;
        }
    }
}
</style>
