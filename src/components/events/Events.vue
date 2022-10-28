<script setup>
import { ref } from "vue";
import Panel from "@/components/general/Panel.vue"
import Event from "@/components/events/Event.vue"

const emit = defineEmits(
    ['deleteEvent', 'editEvent', 'addEvent']
);

defineProps({events: Object});

let newEvent = ref(null);

</script>

<template>

  <panel class="w-90 flex flex-col">

    <template #heading class="flex-none">
      <h2 class="font-bold mb-2">Available events</h2>
    </template>

    <div class="flex-1">
      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6" >
        <event
            v-for="event in events.value"
            :key="event.id"
            :event="event"
            @deleteEvent="emit('deleteEvent', event)"
            @editEvent="emit('editEvent', event)"
        ></event>
      </ul>
    </div>

    <button
        type="submit"
        class="mt-5 py-3 px-5 rounded bg-blue-500 text-white flex-none w-80 m-auto"
        @click.prevent="emit('addEvent')"
    >Add new event</button>

    <template #footer>
      Manage events [ add new | edit | remove ]
    </template>

  </panel>

</template>

