<script setup>
  import Panel from "@/components/Panel.vue"
  import VueCal from "vue-cal"
  import 'vue-cal/dist/vuecal.css'
  import {computed, onMounted, ref} from 'vue'
  import axios from "axios";


  const db_url = 'http://localhost:3001/events';
  let events = ref(null)

  defineProps({
    splits: {type:Object, required:true}
  })

  onMounted(()=>{
    axios.get(db_url)
        .then((response) => {events.value = response.data;})
        .catch(error => (console.log(error)));
  })

</script>

<template>

  <panel>
    <vue-cal
        selected-date="2018-11-19"
        active-view="day"
        :hide-title-bar=true
        :time-from="8 * 60"
        :time-to="18 * 60"
        :time-step="30"
        :disable-views="['years', 'year', 'month']"
        :min-split-width="100"
        :sticky-split-labels="true"
        locale="ro"
    />


  </panel>
</template>


