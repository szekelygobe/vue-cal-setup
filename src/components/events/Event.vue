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
      {{event.title}}
    </span>
    <button
        @click.prevent="emit('editEvent', event)"
        :class="{
          'border rounded px-2 text-xs w-12 ' : true,
          'border-blue-500 text-blue-500' : event.hide == true,
          'border-red-500 text-red-500' : event.hide == false
        }"
    >
      edit
    </button>
    <button
        @click.prevent="emit('deleteEvent', event)"
        :class="{
          'border rounded text-xs px-2 mx-2': true,
          'text-red-500 border-red-500': event.deletable == true,
          'text-slate-600 border-slate-600': event.deletable == false
        }"
    >
      delete
    </button>
  </li>

</template>

