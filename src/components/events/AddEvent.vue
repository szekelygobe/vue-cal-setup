<script setup>
  import Modal from "@/components/Modal.vue"
  import { computed, ref} from "vue";
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  defineProps({
    show:Boolean,
    splits:Object
  });



  let emit = defineEmits(['close', 'saveEvent'])
  let newEvent = ref({});
  let checkedSplits = ref([])
  const fromDateTime = ref(null);
  const toDateTime = ref(null);
  const repeatEvent= ref(null);
  const repeatEnds= ref(null);

  const repeat_options = [
    {id: 1, text:"None (one time event)", value:"none"},
    {id: 2, text:"Daily (each day of the week)", value:"daily"},
    {id: 3, text:"Weekdays (from Monday to Friday)", value:"week_days"},
    {id: 4, text:"Weekly (on selected day each week)", value:"weekly"},
    {id: 5, text:"Monthly (on selected week and day number each month)", value:"monthly_wd"},
    {id: 6, text:"Monthly (on same date each month)", value:"monthly_d"},
    {id: 7, text:"Yearly (on same date yearly)", value:"yearly"}
    // {id: 8, text:"Custom (with custom settings)", value:"custom"},
  ];

  const repeat_end_options = [
    {id: 1, text:"Never (repeat to infinity)", value:"never"},
    {id: 2, text:"Date (end at specific date)", value:"date"},
    {id: 3, text:"Number of repeats (repeat specific time)", value:"times"}
  ];


</script>

<template>
  <Modal :show="show" @close="emit('close')">
    <template #header>
      <h2 class="mb-3 pb-2 font-bold  text-xl border-b-2 border-gray-100 ">Add new event</h2>
    </template>

    <template #default>

      <form >

        <section class="mt-10">
            <h2> Active in splits:</h2>

            <ul class="flex flex-wrap mt-2">
              <li
                  v-for="split in splits.value"
                  class=""
              >

                <div class="m-1">
                  <label class="ml-2 text-sm  text-gray-600 flex gap-2 items-center cursor-pointer">
                    <input
                        :id="split.id"
                        :value="split.id"
                        name="split"
                        type="checkbox"
                        v-model="checkedSplits"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300
                    ">
                    <span class="block">{{ split.label }}</span>
                  </label>
                </div>

              </li>
            </ul>

          </section>

        <section class="mt-10 flex place-content-between">
          <label> From date/time:
            <Datepicker v-model="fromDateTime" />
          </label>
          <label> To date/time
            <Datepicker v-model="toDateTime" />
          </label>
        </section>

        <section class="mt-10">
          <div>
            <label>
              Repeat event :
              <select v-model="repeatEvent" class="px-2 py-2 rounded border border-slate-300 outline-none box-border">
                <option v-for="repeat in repeat_options" :key="repeat.id" :value="repeat.value" >{{repeat.text}}</option>
              </select>
            </label>
          </div>

          <div class="mt-5">
            <label>
              Repeat ends :
              <select v-model="repeatEnds" class="px-2 py-2 rounded border border-slate-300 outline-none box-border">
                <option v-for="repeat_end in repeat_end_options" :key="repeat_end.id" :value="repeat_end.value" >{{repeat_end.text}}</option>
              </select>
            </label>
          </div>

        </section>


      </form>

    </template>

    <template #footer class="">
      <div class="flex justify-around border-t-2 border-gray-100 mt-5">
        <button
            type="submit"
            class="mt-5 py-3 px-5 rounded bg-blue-500 text-white "
            @click.prevent="emit('saveEvent', newEvent)"
        >Add new event</button>
        <button
            class="mt-5 py-3 px-5 rounded bg-gray-500/50 hover:bg-gray-500/70 text-white "
            @click.prevent="emit('close')"
        >close</button>
      </div>
    </template>

  </Modal>
</template>

