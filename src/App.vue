<script setup>
  import { useSourceData } from "@/composables/useSourceData.js"
  import { ref , onMounted} from "vue"
  import Splits from "@/components/splits/Splits.vue"

  const { getData, deleteData } = useSourceData();

  const splits = ref(null);

  onMounted(async () => {
    splits.value = await getData('splits');
  });

  async function deleteSplit(split){
    if(splits.value.length > 1){
      await deleteData('splits', split.id)
          .then(()=> splits.value.splice(splits.value.indexOf(split), 1))
    } else {
      console.log('Can\'t delete more splits!');
    }
  }

</script>

<template>
  <div class="grid gap-6 place-items-center">

    <splits
        :splits="splits"
        @deleteSplit="deleteSplit"
    > </splits>
<!--    <calendar :splits="splits"> </calendar>-->
  </div>
</template>
