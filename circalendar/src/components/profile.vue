<template>
    <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
                {{ user.name }}
            </v-btn>
        </template>
        <v-list>
            <v-list-item key="logout">
                <v-list-item-title @click.prevent="logout">Logout</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script>


export default {
    setup() {
        const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

        return {
            login: () => {
                loginWithRedirect();
            },
            logout() {
                logout()
            },
            user,
            isAuthenticated
        };
    }
};
</script>
<style>
.v-menu .v-list.item {
    cursor: pointer;
}
</style>