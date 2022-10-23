<script setup>
import { ref } from "vue";
import Panel from "@/components/Panel.vue"
import Event from "@/components/events/Event.vue"

const emit = defineEmits(['deleteEvent', 'addEvent']);

defineProps({events: Object});

let newEvent = ref(null);

</script>

<template>

  <panel class="w-90">

    <template #heading>
      <h2 class="font-bold mb-2">Available events</h2>
    </template>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6" >
      <event
          v-for="event in events.value"
          :key="event.id"
          :event="event"
          @deleteEvent="emit('deleteEvent', event)"
      ></event>
    </ul>

<!--    <form @submit.prevent="emit('addSplit', newSplit)">-->
<!--      <div class="border border-gray-600 text-black flex mt-2">-->
<!--        <input v-model="newSplit" placeholder="New split..." class="p-2 w-full" />-->
<!--        <button type="submit" class="bg-white p-2 border-l">Add</button>-->
<!--      </div>-->
<!--    </form>-->

    <template #footer>
      Manage events [ add new | edit | remove ]
    </template>

  </panel>

</template>

