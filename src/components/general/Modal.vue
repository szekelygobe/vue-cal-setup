<script setup>
  import { ref } from "vue";

  defineProps({show:Boolean})

  let emit = defineEmits(['close']);


</script>

<template>
  <div
      class="fixed grid place-items-center inset-0 bg-gray-700/80 z-10"
      v-if="show"
  >
    <div
        class="w-3/4 max-w-2xl p-5 rounded bg-white text-black"
    >

      <header v-if="$slots.header">
          <slot name="header"></slot>
      </header>

      <div>
        <slot name="default"></slot>
      </div>

      <footer v-if="$slots.footer">
          <slot name="footer">
            <button
                class="mt-5 py-3 px-5 rounded bg-gray-500/50 hover:bg-gray-500/70 text-white "
                @click="emit('close')"
            >close</button>
          </slot>
      </footer>

    </div>
  </div>
</template>
