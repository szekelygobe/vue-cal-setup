1<script >
import Panel from "@/components/general/Panel.vue"
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from "@syncfusion/ej2-vue-schedule";
import useBaseUrl from "@/composables/useBaseUrl.js";

const { baseURL } = useBaseUrl();

const eventsDataManager = new DataManager({
  url: baseURL+'events',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

const splitsDataManager = new DataManager({
  url: baseURL+'splits',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

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
      group: {
        byDate: true,
        resources: ['Owners']
      },
      allowMultiple: true,
      eventSettings: {
        dataSource: eventsDataManager
      },
      ownerDataSource: splitsDataManager
    };
  },

  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]
  },

};

</script>


<template>
  <div id='app'>
    <div id='container' v-if="events">
      <ejs-schedule
          height='550px'
          :selectedDate='selectedDate'
          :eventSettings='eventSettings'
          :group='group'
      >
        <e-resources>
          <e-resource
              field='OwnerId'
              title='Owner'
              name='Owners'
              :allowMultiple='allowMultiple'
              :dataSource='ownerDataSource'
              textField='text'
              idField='id'
              colorField='color'
          >
          </e-resource>
        </e-resources>
      </ejs-schedule>
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