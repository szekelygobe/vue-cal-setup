<script setup>
  import Modal from "@/components/Modal.vue"
  import { computed, ref} from "vue";

  defineProps({
    show:Boolean,
    splits:Object
  });



  let emit = defineEmits(['close', 'saveEvent'])
  let newEvent = ref({});
  let checkedSplits = ref([])
  let fromDate = ref(null);
  let toDate = ref(null);

</script>

<template>
  <Modal :show="show" @close="emit('close')">
    <template #header>
      <h2 class="mb-3 pb-2 font-bold  text-xl border-b-2 border-gray-100 ">Add new event</h2>
    </template>

    <template #default>

      <form >

        <section>
            <h2> Active in splits:</h2>

            <ul class="flex flex-wrap">
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

