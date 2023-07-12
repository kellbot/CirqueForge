<template>
     <v-hover v-slot="{ isHovering, props }">
    <v-card elevation="3" color="white" :class="['ma-4', selectedClass, 'text-left']" v-bind="props" width="250">
        <v-img height="200" :src="cardEvent.img" cover class="text-white">

            <div v-if="isHovering"
                class="d-flex flex-column transition-fast-in-fast-out bg-secondary v-card--reveal text-h2"
                style="height: 100%;">
                <v-btn v-if="loggedIn" class="w-75 ma-5 bg-white" @click="rsvp(cardEvent.id, !isSelected)" v-on:click="toggle"><span v-if="isSelected">Cancel</span>
                    RSVP</v-btn>
                <v-btn class="w-75">More Info</v-btn>
            </div>
            <div v-if="isSelected" class="text-center going w-100 bg-success">
                GOING
            </div>
        </v-img>
        <v-card-title class="pt-2 pb-0">{{ cardEvent.summary }}</v-card-title>

        <v-card-subtitle class="pb-2">{{ new Date(cardEvent.start.dateTime).format('l, F j g:i a') }}</v-card-subtitle>


    </v-card>
</v-hover>
</template>
<script>
const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

export default {
    props: {
        loggedIn: Boolean,
        cardEvent: Object,
        isSelected: Boolean,
        selectedClass: Boolean | Array,
        rsvp: Function,
        toggle: Function,
    },
}
</script>