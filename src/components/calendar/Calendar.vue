<script setup>
  import Panel from "@/components/general/Panel.vue"
  import VueCal from "vue-cal"
  import 'vue-cal/dist/vuecal.css'
  import {onMounted} from "vue";

  defineProps({events: Object, splits: Object});

</script>

<template>
  <panel>
    <vue-cal
        selected-date="2018-11-19"
        active-view="day"
        locale="ro"
        editable-events

        :hide-title-bar=true
        :disable-views="['years', 'year', ]"

        :time-from="8 * 60"
        :time-to="18 * 60"
        :time-step="30"

        :min-split-width="100"
        :sticky-split-labels="true"
        :split-days="splits.value"
        :events="events.value"
    />
  </panel>
</template>


<style >

/* You can easily set a different style for each split of your days. */
.vuecal__cell-split.lane_1 {background-color: rgba(221, 238, 255, 0.5);}
.vuecal__cell-split.lane_2 {background-color: rgba(255, 232, 251, 0.5);}
.vuecal__cell-split.lane_3 {background-color: rgba(221, 255, 239, 0.5);}
.vuecal__cell-split.lane_4 {background-color: rgba(255, 250, 196, 0.5);}
.vuecal__cell-split.lane_5 {background-color: rgba(255, 206, 178, 0.5);}
.vuecal__cell-split .split-label {color: rgba(0, 0, 0, 0.1);font-size: 26px;}

/* Different color for different event types. */
.vuecal__event.leisure {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.health {background-color: rgba(164, 230, 210, 0.9);border: 1px solid rgb(144, 210, 190);}
.vuecal__event.sport {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}

</style>