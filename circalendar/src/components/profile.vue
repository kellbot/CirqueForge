<template v-if="user">
    <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn  v-bind="props">
                {{ user.displayName }}
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
import firebase from 'firebase/compat/app';

export default {
    methods : {
        logout(e) {
        e.stopPropagation();
        firebase.auth().signOut();

    }
    },
    setup() {
       

        return {
            user: null
        };
    },
    created() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               this.user = user;
           }
       });
   }
};
</script>
<style>
.v-menu .v-list.item {
    cursor: pointer;
}
</style>