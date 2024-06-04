<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Login</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <keep-alive>
      <ion-list>
        <ion-item>
          <ion-label>Username:</ion-label>
          <ion-input placeholder="Enter your username" v-model="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password:</ion-label>
          <ion-input placeholder="Enter your password" v-model="password" type="password"></ion-input>
        </ion-item>
      </ion-list>
    </keep-alive>
      <ion-button expand="full" @click="callServer">Login</ion-button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </ion-card-content>
  </ion-card>
</template>


<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { IonInput, IonItem, IonList, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton} from '@ionic/vue';
import BaseClass from '@/GeneralUtil/BaseClass';
import AccountContact from '@/GeneralUtil/Account';

export default defineComponent({
  name: "LoginForm",
  components: {
    IonInput, IonItem, IonList, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
  },

  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const baseClass = new BaseClass();
    const account = new AccountContact("10", "Jole", "hello", "lastName");
    const callServer = async () => {
      try {
        const response = await axios.get('http://localhost:8080/rest/Account', {
          auth: {
            username: username.value,
            password: password.value
          }
        });

        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("password", password.value);
        const account = {
          id: response.data[0].id,
          accountName: response.data[0].accountName,
          mainphone: response.data[0].mainphone
        };
        console.log(account);
        errorMessage.value = ''; // Clear error message on success
        router.push("/tabs/tab2");

      } catch (e) {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
        console.log(e);
        errorMessage.value = 'Login failed. Please check your username and password.';
      }
    };

    return { username, password, errorMessage, callServer, baseClass };
  }
});
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
