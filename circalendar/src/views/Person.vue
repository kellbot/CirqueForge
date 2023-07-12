<template>
    <section>
        
        <ul id="nav-mobile" class="right">
                <li v-show="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-show="user">
                    <router-link to="/profile">Profile</router-link>
                </li>
                <li v-show="user">
                    <a @click="signoutButtonPressed">Logout</a>
                </li>
            </ul>
        <h5 class="center-align">Profile</h5>

        <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;">
                <img
                    :src="user.photoURL"
                    style="width:75px;height:75px;border-radius:50%;border:4px solid #333"
                />
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        name:
                        <strong>{{user.displayName}}</strong>
                        <br />email:
                        <strong>{{user.email}}</strong>
                        <br />uid:
                        <strong>{{user.uid}}</strong>
                        <br />provider:
                        <strong class="teal-text">{{user.providerData[0].providerId}}</strong>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
    data() {
        return {
            user: null
        };
    },
    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation();
            firebase.auth().signOut();
            this.$router.push({ name: "Login" });
        }
    },
   
};
</script>