<script setup>
  import { useLoadData } from "@/composables/useLoadData.js"
  import Splits from "@/components/splits/Splits.vue"


  const { bb, fff } = useLoadData();

  console.log(bb)

</script>

<template>
  <div class="grid gap-6 place-items-center">

<!--    <splits :splits="fff('splits')"> </splits>-->
<!--    <calendar :splits="splits"> </calendar>-->
  </div>
</template>
