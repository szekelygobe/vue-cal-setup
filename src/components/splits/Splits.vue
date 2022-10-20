<script setup>
  import Panel from "@/components/Panel.vue"
  import Split from "@/components/splits/Split.vue"
  import {useSlugify} from "@/composables/useSlugify.js"
  import axios from "axios"
  import {onMounted, ref} from "vue";

  let { slugify } = useSlugify();
  const splits = ref(null);
  const db_url = 'http://localhost:3001/splits/';
  let newSplit = ref('');

  onMounted(()=>{
    axios.get(db_url)
        .then((response) => {splits.value = response.data;})
        .catch(error => (console.log(error)));
  })

  function updateSplit(split){
    split.hide = !split.hide;

    axios.patch(db_url + split.id, split)
        .then(response  =>  console.log(response.data))
        .catch(error => console.log(error))
  }

  function deleteSplit(split){
    axios.delete(db_url + split.id)
        .then(response => console.log(response.data))
        .catch(error => (console.log(error)));
  }

  function addSplit(){
    const split = {
      class: slugify(newSplit.value),
      label: newSplit.value,
      deletable: true,
      hide: false
    }
    axios.post(db_url, split)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
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

    <form @submit.prevent="addSplit">
      <div class="border border-gray-600 text-black flex mt-2">
        <input v-model="newSplit" placeholder="New split..." class="p-2 w-full" />
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>

    <template #footer>
      Manage splits [ add new | remove | show/hide ]
    </template>

  </panel>


</template>