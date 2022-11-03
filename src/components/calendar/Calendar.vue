<script setup>
  import Panel from "@/components/general/Panel.vue"
  import {onMounted} from "vue";

  defineProps({events: Object, splits: Object});

</script>

<template>
  <panel>
<!--    <vue-cal-->
<!--        selected-date="2022-10-31"-->
<!--        active-view="day"-->
<!--        locale="ro"-->
<!--        editable-events-->

<!--        :hide-title-bar=true-->
<!--        :disable-views="['years', 'year', ]"-->

<!--        :time-from="8 * 60"-->
<!--        :time-to="18 * 60"-->
<!--        :time-step="30"-->

<!--        :min-split-width="100"-->
<!--        :sticky-split-labels="true"-->
<!--        :split-days="splits.value"-->
<!--        :events="events.value"-->
<!--    />-->
  </panel>
</template>


<style >

</style>