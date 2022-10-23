<script setup>
  import Splits from "@/components/splits/Splits.vue"
  import Events from "@/components/events/Events.vue"
  import AddEvent from "@/components/events/AddEvent.vue"
  import Calendar from "@/components/calendar/Calendar.vue"

  import {reactive, onMounted, ref} from "vue"
  import { useSourceData } from "@/composables/useSourceData.js"
  import {useSlugify} from "@/composables/useSlugify.js"

  const { getData, deleteData, addData } = useSourceData();
  const { slugify }     = useSlugify();

  const splits = reactive({});
  const events = reactive({});

  let showAddEvent = ref(false)

  onMounted(async () => {
    splits.value = await getData('splits');
    events.value = await getData('events');
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

  function addEvent(){
    showAddEvent.value = true;
  }

  async function saveNewEvent(event){
    console.log(event)
  }
</script>

<template>
  <div class="grid gap-8 m-10">
    <div class="flex gap-6">
      <Events
          :events="events"
          @deleteEvent=""
          @editEvent=""
          @addEvent="addEvent"
      ></Events>
      <Splits
          :splits="splits"
          @deleteSplit="deleteSplit"
          @addSplit="addSplit"
      > </Splits>
    </div>
    <Calendar
        :splits="splits"
        :events="events"
    > </Calendar>
  </div>


  <AddEvent
      v-if="showAddEvent"
      :show="showAddEvent"
      :slots="splits"
      @close="showAddEvent=false"
      @saveNewEvent="saveNewEvent"
  ></AddEvent>
</template>
