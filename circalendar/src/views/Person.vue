<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in People" :key="person._id">
                        <td>{{ person.name }}</td>
                        <td>{{ person.email }}</td>
                        <td>{{ person.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: person._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(person._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                People: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/person';
            axios.get(apiURL).then(res => {
                this.People = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deletePerson(id){
                let apiURL = `http://localhost:4000/api/delete-person/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.People.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>

