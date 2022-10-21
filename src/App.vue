<script setup>
  import { useSourceData } from "@/composables/useSourceData.js"
  import { ref , onMounted} from "vue"
  import Splits from "@/components/splits/Splits.vue"

  const splits = ref(null);
  const { getData } = useSourceData();

  onMounted(async () => {
    splits.value = await getData('splits');
  });





</script>

<template>
  <div class="grid gap-6 place-items-center">

    <splits
        :splits="splits"
    > </splits>
<!--    <calendar :splits="splits"> </calendar>-->
  </div>
</template>
