import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';
import { ref} from 'vue';

export function getRsvps(user) {

    const rsvps = ref([]);
    if (!user || !user.uid)return; 
    firebase
        const rsvpRef = firebase.firestore()
        .collection("users")
        .doc(user.uid)
        .collection("rsvps");
        
        rsvpRef.onSnapshot(snap => {
        rsvps.value = [];
        snap.forEach(doc => {
            const thisDoc = doc.data();
            thisDoc.id = doc.id;
            rsvps.value.push(thisDoc);

        });
    });
    return rsvps;
}