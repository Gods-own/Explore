<template>
    <div class="mt-4">
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
                    <td data-label="Name">{{user.name}}</td>
                    <td data-label="Email">{{user.email}}</td>
                    <td data-label="PhoneNumber">{{user.phone}}</td>
                    <td data-label="Company Name">{{user.company.name}}</td>
                    <td data-label="Website">{{user.website}}</td>
                    <td>
                        <Button class="greenColor">
                            <router-link class="text-white text-decoration-none" :to="{ name: 'UserAlbums', params: { userId: user.id } }">View Album</router-link>
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