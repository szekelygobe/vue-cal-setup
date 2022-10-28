<script setup>
  import {ref} from "vue "
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const props = defineProps({
    name: String,
    label: String,
    modelValue:Date,
    enableTime: Boolean,
  });

  let emit = defineEmits(['update:modelValue'])

  // Read more at https://flatpickr.js.org/options/
  const config = ref({
    altInput: false,
    enableTime: props.enableTime,
    dateFormat: "Y-m-d H:i",
  });


  // function update(selectedDate){
  //   emit('update:modelValue', selectedDate)
  // }
</script>

<template>
  <div>
    <label
        for="{{ name }}"
        class="w-40 mr-3 inline-block text-right"
    >
      {{ label }}
    </label>

    <div class="w-full max-w-xs w inline-block rounded border border-slate-200 p-2">

      <flat-pickr
          v-model=modelValue
          :config="config"
          placeholder="Select date"
          name="date"
          class="w-full outline-none"
      />

    </div>
  </div>
</template>

