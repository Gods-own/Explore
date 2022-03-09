<template>
    <div>
        <h3>Users</h3>
        <Table>
            <template #thead>
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Company Name</th>
                <th>Website</th>
            </template>
            <template #tbody>
                <tr v-for="user in allUsers" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.company.name}}</td>
                    <td>{{user.website}}</td>
                    <td>
                        <Button>
                            <router-link :to="{ name: 'UserAlbums', params: { userId: user.id } }">View Album</router-link>
                        </Button>
                    </td>
                </tr>
            </template>
        </Table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Table from '@/components/Table.vue'
import Button from '@/components/Button.vue'
export default {
   name: "Users",
    components: {
        Table,
        Button,
    },
   methods: {
       ...mapActions(['fetchUsers'])
   },
   computed: mapGetters(['allUsers']),
   created() {
       this.fetchUsers();
   }
};
</script>