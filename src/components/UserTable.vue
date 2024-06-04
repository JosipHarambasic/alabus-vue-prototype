<template>
    
    
    <ion-content>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Sample Table</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                
                <DataTable :value="accounts" tableStyle="min-width: 50rem" reflow="true">
    <Column field="id" header="ID"></Column>
    <Column field="accountName" header="Account Name"></Column>
    <Column field="mainphone" header="Mainphone"></Column>

</DataTable>


                        
                <div class="add-user">
                    <ion-input v-model="newAccountName" placeholder="Name"></ion-input>
                    <ion-input v-model="newMainPhone" placeholder="Email"></ion-input>
                    <ion-button @click="addUser">Add User</ion-button>
                </div>
            </ion-card-content>
        </ion-card>
    </ion-content>
</template>

<script lang="ts">
import { Ref, defineComponent, onMounted, ref } from 'vue';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput } from '@ionic/vue';
import axios from 'axios';
import { IBo } from '@/GeneralUtil/IBo';
import { RESTUtil } from '@/GeneralUtil/RESTUtil';
import { Account } from '@/GeneralUtil/Account';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional


export default defineComponent({
    name: 'TableComponent',
    components: {
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonButton,
        IonInput,
        DataTable,
        Column
    },


    setup() {
        let accounts: Ref<Account[]> = ref([]);
        RESTUtil.getAllRecords<Account>("Account", {
            auth: {
                username: 'SYSADM_TRAININGAPP',
                password: 'SYSADM_TRAININGAPP'
            }
        }).then((resolvedAccounts: Account[]) => {
            accounts.value = resolvedAccounts;
        })


        //   const newUserName = ref('');
        //   const newUserEmail = ref('');
        //   const editMode = ref(false);
        //   const editingUser = ref<User | null>(null);
        //   const errorMessage = ref('');

        //   const addUser = () => {
        //     if (newUserName.value && newUserEmail.value) {
        //       const newUser = {
        //         id: Math.max(...users.value.map(user => user.id)) + 1,
        //         name: newUserName.value,
        //         email: newUserEmail.value
        //       };
        //       users.value.push(newUser);
        //       newUserName.value = '';
        //       newUserEmail.value = '';
        //     }
        //   };

        //       const removeUser = (id: number) => {
        //         users.value = users.value.filter(user => user.id !== id);
        //       };

        //       const editUser = (user: User) => {
        //         editMode.value = true;
        //         editingUser.value = { ...user };
        //       };

        //       const saveUser = (user: User) => {
        //         const index = users.value.findIndex(u => u.id === user.id);
        //         if (index !== -1) {
        //           users.value[index] = editingUser.value!;
        //         }
        //         editMode.value = false;
        //         editingUser.value = null;
        //       };

        //       const getUsers = async () => {
        //         try {
        //           const response = await axios.get('http://localhost:8080/rest/Account');
        //           console.log("hello" + users.value)
        //           users.value = response.data.map((item: any) => ({
        //             id: item.id,
        //             name: item.name,
        //             email: item.email
        //           }));
        //         } catch (e) {
        //           console.log(e);
        //           errorMessage.value = 'Failed to fetch data. Please try again later.';
        //         }
        //       };

        //       onMounted(() => {
        //         getUsers();
        //       });

              return {
                accounts
                // newUserName,
                // newUserEmail,
                // editMode,
                // editingUser,
                // errorMessage,
                // addUser,
                // removeUser,
                // editUser,
                // saveUser
              };
    }
});
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background-color: #f2f2f2;
}

th,
td {
    padding: 8px 12px;
    text-align: left;
    border: 1px solid #ddd;
}

.add-user {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}
</style>