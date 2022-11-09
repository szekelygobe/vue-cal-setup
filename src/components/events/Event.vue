<script setup>
import { useSourceData } from "@/composables/useSourceData.js"

const { updateData } = useSourceData();

defineProps({
  event: Object,
});

const emit = defineEmits(['deleteEvent', 'editEvent']);

</script>

<template>
  <li class="flex items-center">
    <span class="p-2 flex justify-between items-center flex-1" >
      {{event.Subject}}
    </span>
    <button
        @click.prevent="emit('editEvent', event)"
        class="border rounded px-2 text-xs w-12 border-blue-500 text-blue-500"
    >
      edit
    </button>
    <button
        @click.prevent="emit('deleteEvent', event)"
        class="border rounded text-xs px-2 mx-2 text-red-500 border-red-500"
    >
      delete
    </button>
  </li>

</template>

