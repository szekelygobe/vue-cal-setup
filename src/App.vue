<script setup>
  import Splits from "@/components/splits/Splits.vue"

  import { reactive , onMounted} from "vue"
  import { useSourceData } from "@/composables/useSourceData.js"
  import {useSlugify} from "@/composables/useSlugify.js"

  const { getData, deleteData, addData } = useSourceData();
  const { slugify }     = useSlugify();

  const splits = reactive({});

  onMounted(async () => {
    splits.value = await getData('splits');
  });

  async function deleteSplit(split){
    if(splits.value.length > 1){
      await deleteData('splits', split.id)
          // deleting split from
          .then(()=> splits.value.splice(splits.value.indexOf(split), 1));
    } else {
      console.log('Can\'t delete more splits!');
    }
  }

  async function addSplit(splitName){
    await addData(
        'splits',
        {
          class: slugify(splitName),
          label: splitName,
          deletable: true,
          hide: false
        })
        .then((resp)=> splits.value.push(resp));
  }

</script>

<template>
  <div class="grid gap-6 place-items-center">

    <splits
        :splits="splits"
        @deleteSplit="deleteSplit"
        @addSplit="addSplit"
    > </splits>
<!--    <calendar :splits="splits"> </calendar>-->
  </div>
</template>
