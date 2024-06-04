<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contact Table</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <UserTable/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import UserTable from '@/components/UserTable.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
