<script setup>
import {computed, ref} from "vue";
import Modal from "@/components/general/Modal.vue"
import DropDown from "@/components/general/DropDown.vue"
import DatePicker from "@/components/general/DatePicker.vue"

defineProps({
  show: Boolean,
  splits: Object
});

let emit              = defineEmits(['close', 'saveEvent'])
let newEvent          = ref({});
let checkedSplits     = ref([])
const fromDateTime    = ref(new Date());
const toDateTime      = ref(new Date());
const repeatEventType = ref('none');
const repeatEnds      = ref('never');
const repeatEndDate   = ref(null);
const repeatNumber    = ref(2);

const repeat_options = [
  {id: 1, text: "None (one time event)", value: "none"},
  {id: 2, text: "Daily (each day of the week)", value: "daily"},
  {id: 3, text: "Weekdays (from Monday to Friday)", value: "week_days"},
  {id: 4, text: "Weekly (on selected day each week)", value: "weekly"},
  {id: 5, text: "Monthly (on selected week and day number each month)", value: "monthly_wd"},
  {id: 6, text: "Monthly (on same date each month)", value: "monthly_d"},
  {id: 7, text: "Yearly (on same date yearly)", value: "yearly"}
  // {id: 8, text:"Custom (with custom settings)", value:"custom"},
];

const repeat_end_options = [
  {id: 1, text: "Never (repeat to infinity)", value: "never"},
  {id: 2, text: "Date (end at specific date)", value: "date"},
  {id: 3, text: "Number of repeats (repeat specific time)", value: "times"}
];


</script>

<template>
  <Modal :show="show" @close="emit('close')">
    <template #header>
      <h2 class="mb-3 pb-2 font-bold  text-xl border-b-2 border-gray-100 ">Add new event</h2>
    </template>

    <template #default>

      <form>

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

        <section class="mt-10 ">
          <date-picker
              label="From date/time :"
              :enable-time=true
              v-model="fromDateTime"
          />

          <date-picker
              class="mt-5"
              :enable-time=true
              label="To date/time :"
              v-model="toDateTime"
          />

        </section>

        <section class="mt-10">

          <div>
            <drop-down
                name="repeat_type"
                label="Repeat event :"
                :options="repeat_options"
                v-model="repeatEventType"
            />
          </div>

          <div class="mt-5" v-if="repeatEventType !== 'none'">
            <drop-down
                name="repeat_ends"
                label="Repeat ends :"
                :options="repeat_end_options"
                v-model="repeatEnds"
            />
          </div>

          <div class="mt-5" v-if="repeatEnds == 'date'">
            <date-picker
                label="Repeat end date:"
                v-model="repeatEndDate"
                :enable-time=false

            />
          </div>

          <div class="mt-5" v-if="repeatEnds == 'times'">
            <label
                class="w-40 mr-3 inline-block text-right"
                for="nr_reps"
            >
              Number of repetitions
            </label>
            <input
                v-model="repeatNumber"
                type="text"
                name="nr_reps"
                class="w-full max-w-xs w inline-block rounded border border-slate-200 p-2"
            >
          </div>


        </section>


      </form>

<!--      <div>-->
<!--        {{ fromDateTime }} - {{ toDateTime }}-->
<!--      </div>-->

<!--      <div class="mt-5">-->
<!--        {{ repeatEventType }} - {{ repeatEnds }}-->
<!--      </div>-->

<!--      <div class="mt-5">-->
<!--        {{ repeatNumber }}-->
<!--      </div>-->

    </template>

    <template #footer class="">
      <div class="flex justify-around border-t-2 border-gray-100 mt-10">
        <button
            type="submit"
            class="mt-5 py-3 px-5 rounded bg-blue-500 text-white "
            @click.prevent="emit('saveEvent', newEvent)"
        >Add new event
        </button>
        <button
            class="mt-5 py-3 px-5 rounded bg-gray-500/50 hover:bg-gray-500/70 text-white "
            @click.prevent="emit('close')"
        >close
        </button>
      </div>
    </template>

  </Modal>
</template>

