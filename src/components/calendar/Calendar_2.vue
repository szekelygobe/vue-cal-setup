1<script >
import Panel from "@/components/general/Panel.vue"
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from "@syncfusion/ej2-vue-schedule";

export default {
  name: "Calendar",

  // Declaring component and its directives
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective
  },

  props: ['events'],

  // Bound properties declaration
  data() {
    return {
      selectedDate: new Date(2022, 10, 29),
      allowMultiple: false,
      eventSettings: {
        dataSource: this.mapped_events
      },
    };
  },

  computed: {
    mapped_events (){
      return this.events.value.map(e=>({...e, StartTime: new Date(e.StartTime), EndTime: new Date(e.EndTime)}))
    }
  },

  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]
  },

};

</script>


<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' :selectedDate='selectedDate'
                    :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>


<style>
@import '@/../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '@/../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>