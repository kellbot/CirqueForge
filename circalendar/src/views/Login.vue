<template>

<v-container ><p class="mx-auto w-50" >Sign in with an existing Google account or using an email address. </p></v-container>
    <section>
        <section id="firebaseui-auth-container"></section>
    </section>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

import "firebaseui/dist/firebaseui.css";
import * as firebaseui from 'firebaseui'

export default {
    name: "Login",
    data() {
        return {};
    },
    components: {
        navigation
    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        var uiConfig = {
            signInSuccessUrl: "/", // This redirect can be achived by route using callback.
            signInFlow: "popup",

            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
};
</script>