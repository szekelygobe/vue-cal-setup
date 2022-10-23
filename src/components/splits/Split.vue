  <script setup>
  import { useSourceData } from "@/composables/useSourceData.js"

  const { updateData } = useSourceData();

  defineProps({
    split: Object,
  });

  const emit = defineEmits(['deleteSplit']);

  async function updateVisibility(split){
    split.hide = !split.hide;
    await updateData('splits', split );
  };

  </script>
<template>

  <li class="flex items-center">
    <span class="p-2 flex justify-between items-center flex-1" >
      {{split.label}}
    </span>
    <button
        @click.prevent="updateVisibility(split)"
        :class="{
          'border rounded px-2 text-xs w-12 ' : true,
          'border-blue-500 text-blue-500' : split.hide == true,
          'border-red-500 text-red-500' : split.hide == false
        }"
    >
      {{ split.hide ? 'show' : 'hide' }}
    </button>
    <button
        @click.prevent="emit('deleteSplit', split)"
        :disabled="!split.deletable"
        :class="{
          'border rounded text-xs px-2 mx-2': true,
          'text-red-500 border-red-500': split.deletable == true,
          'text-slate-600 border-slate-600': split.deletable == false
        }"
    >
      delete
    </button>
  </li>



</template>