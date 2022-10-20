<script setup>
  import Panel from "@/components/Panel.vue"
  import Split from "@/components/splits/Split.vue"
  import axios from "axios"
  import {onMounted, ref} from "vue";

  const splits = ref(null);

  onMounted(()=>{
    axios.get('http://localhost:3001/splits')
        .then((response) => {
          splits.value = response.data;
        })
        .catch(error => (console.log(error)));
  })

  function updateSplit(split){
    split.hide = !split.hide;
    fetch('http://localhost:3001/splits/' + split.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(split)
    })
        .then(res =>  console.log(res.text(), '>>updated<<')) // or res.json()
        .then(res => console.log(res))
  }

  function deleteSplit(split){
    axios.delete('http://localhost:3001/splits/' + split.id)
        .then(response => (console.log(response.data)))
        .catch(error => (console.log(error)));
  }

</script>

<template>

  <panel class="w-90">

    <template #heading>
      <h2 class="font-bold mb-2">Available splits</h2>
    </template>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6" >
      <split
          v-for="split in splits"
          :split="split"
          @update-split="updateSplit"
          @delete-split="deleteSplit"
      ></split>
    </ul>

    <template #footer>
      Manage splits [ add new | remove | show/hide ]
    </template>

  </panel>

</template>