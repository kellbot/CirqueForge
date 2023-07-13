<template v-if="user">
    <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
                {{ activeName }}
            </v-btn>
        </template>
        <v-list>
            <v-list-item key="logout" >
                <v-list-item-title @click.prevent="doLogout">Logout</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script setup>
const props = defineProps(['activeName', 'doLogout']);
</script>
<style>
.v-menu .v-list.item {
    cursor: pointer;
}
</style>