<template>
  <div class="p-4 border rounded-lg bg-gray-700 border-gray-600">
    <h2
        v-if="$slots.heading"
        class="font-bold mb-3"
    >
      <slot name="heading"/>
    </h2>

    <slot/>

    <footer
        v-if="$slots.footer"
        class="border-gray-600 border-t mt-4 text-sm text-slate-500 pt-2"
    >
      <slot name="footer"/>
    </footer>
  </div>
</template>