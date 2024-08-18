<script setup lang="ts">
import Textarea from 'primevue/textarea';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import { ref } from 'vue';
import axios from 'axios';


let userSearch = '';
let aiResponse = ref<string>('');

const onSearch = async () => {
    aiResponse.value = (await axios.get(`http://localhost:3000?prompt=${userSearch}`)).data
    userSearch = '';
}
</script>

<template>
    <div class="question-container">
        <Panel header="Response to your answer" class="answer-container ">
            <p class="m-0">
                {{ aiResponse }}
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
