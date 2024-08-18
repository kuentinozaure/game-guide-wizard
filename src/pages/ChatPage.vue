<script setup lang="ts">
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import axios from 'axios';

let userSearch = '';
let aiResponse = ref<string>('');

const onSearch = async () => {
    aiResponse.value = (await axios.get(`http://localhost:3000/game-guide?prompt=${userSearch}`)).data
    userSearch = '';
}
</script>

<template>
    <div class="question-container">
        <Panel header="Response to your answer" class="answer-container">
            <p class="m-0" v-if="aiResponse.length !== 0">
                {{ aiResponse }}
            </p>

            <div class="no-answer" v-if="aiResponse.length === 0">
                <p>
                    Why not ask a question about your game manual?
                    You can ask various questions like:
                <ul>
                    <li>How to play to my favorite game</li>
                    <li>Who are created this game</li>
                    <li>And many more !!, we let us discover that 😉</li>
                </ul>
                </p>
            </div>

        </Panel>
        <div class="question-field">
            <InputText v-model="userSearch" placeholder="Ask a question about your manual here" class="text-input"
                v-on:keyup.enter="onSearch()" />
            <Button icon="pi pi-search" iconPos="top" @click="onSearch()" />
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

        .no-answer {
            display: flex;
            font-size: large;
            justify-content: center;
        }
    }

    .question-field {
        display: flex;
        flex: 1;
        justify-content: space-between;
        gap: 1rem;

        .text-input {
            width: 100%;
        }
    }
}
</style>
