<script setup>
  defineProps({
    name: String,
    label: String,
    options: Object,
    selected: Object,
    modelValue:String,
  });

  let emit = defineEmits(['update:modelValue'])

  function update(e){
    emit('update:modelValue', e.target.value)
  }

</script>

<template>
  <div>
    <label
        for="{{ name }}"
        class="w-40 mr-3 border border-red-500 inline-block text-right"
    >
      {{ label }}
    </label>
    <select
        name="{{ name }}"
        @change="update"
        class="w-96 px-2 py-2 rounded border border-slate-300 outline-none box-border "
    >
      <option
          v-for="option in options"
          :key="option.id"
          :value="option.value"
      >
        {{option.text}}
      </option>
    </select>
  </div>

</template>
