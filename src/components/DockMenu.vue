<script setup lang="ts">
import Dock from 'primevue/dock'
import router from '@/router';

type DockItem = {
    label: string;
    icon: string;
    command: () => void;
}

const items: DockItem[] = [
    { label: 'Home', icon: 'pi pi-home', command: () => { router.push('/home') } },
    { label: 'Account', icon: 'pi pi-user', command: () => { router.push('/account') } },
    { label: 'Chat', icon: 'pi pi-comments', command: () => { router.push('/chat') } },
    { label: 'Library', icon: 'pi pi-book', command: () => { router.push('/library') } }
]

const onDockItemClick = (event: MouseEvent, item: DockItem) => {
    if (item.command) {
        item.command();
    }

    event.preventDefault();
};

</script>

<template>
    <Dock :model="items" :position="'bottom'">
        <template #itemicon="{ item }">
            <i :class="item.icon" style="font-size: 1.5rem" @click="onDockItemClick($event, item)"></i>
        </template>
    </Dock>
</template>

<style scoped></style>
