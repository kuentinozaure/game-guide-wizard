<script setup lang="ts">
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import router from '@/router';

type Game = {
    name: string;
    lastPlay: string;
    rating: number;
}

const lastGamePlayed: Game[] = [
    { name: 'Splendor', lastPlay: 'Today', rating: 3 },
    { name: 'Uno Flip', lastPlay: 'A hour ago', rating: 5 },
    { name: 'Dobble', lastPlay: '5 days ago', rating: 4 },
    { name: 'Monopoly', lastPlay: 'A while ...', rating: 3 },
]

const goToGameLibrary = () => {
    router.push('/library');
}
</script>

<template>
    <Panel header="Your latest game 🎲" class="games-panel-container">
        <div class="last-games-container">
            <!-- If user play games, display the latest one -->
            <template v-if="lastGamePlayed.length > 0">
                <Card class="last-game" v-for="(item, index) in lastGamePlayed" :key="index">
                    <template #title>{{ item.name }}</template>
                    <template #subtitle>Last play: {{ item.lastPlay }}</template>
                    <template #content>
                        <Rating v-model="item.rating" :stars="5" />
                    </template>
                </Card>
            </template>
            <!-- If user doesn't play any game yet -->
            <template v-if="lastGamePlayed.length === 0">
                <div class="no-game-played">
                    <span>😟 No games played yet, don't worry</span>
                    <span class="hint-message">you just click&nbsp;
                        <span @click="goToGameLibrary()" class="clickable-link">here</span>
                        &nbsp;to start a game 😉</span>
                </div>
            </template>
        </div>
    </Panel>
</template>

<style scoped>
.games-panel-container {
    max-width: 80%;
    min-width: 100%;
    height: 214px;

    .last-games-container {
        display: flex;
        gap: 16px;
        overflow: auto;

        .last-game {
            max-width: 30%;
            min-width: 30%;
            border: 1px solid #3f3f46;
            overflow: hidden
        }

        .no-game-played {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: xx-large;
            height: 100%;
            width: 100%;

            .hint-message {
                width: 100%;
                font-size: medium;
                display: flex;
                justify-content: center;
                align-items: center;

                .clickable-link {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
