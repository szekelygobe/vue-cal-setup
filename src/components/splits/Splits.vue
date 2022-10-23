<script setup>
  import { ref } from "vue";
  import Panel from "@/components/Panel.vue"
  import Split from "@/components/splits/Split.vue"

  const emit = defineEmits(['deleteSplit', 'addSplit']);

  defineProps({splits: Object});

  let newSplit = ref('');
</script>

<template>

  <panel class="w-90">

    <template #heading>
      <h2 class="font-bold mb-2">Available splits</h2>
    </template>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6" >
      <split
          v-for="split in splits.value"
          :key="split.id"
          :split="split"
          @deleteSplit="emit('deleteSplit', split)"
      ></split>
    </ul>

    <form @submit.prevent="emit('addSplit', newSplit)">
      <div class="border border-gray-600 text-black flex mt-2">
        <input v-model="newSplit" placeholder="New split..." class="p-2 w-full" />
        <button type="submit" class="bg-blue-500 text-white p-2 border-l">Add</button>
      </div>
    </form>

    <template #footer>
      Manage splits [ add new | remove | show/hide ]
    </template>

  </panel>


</template>