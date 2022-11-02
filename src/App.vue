<template>
  <div>
    <bryntum-project-model
        ref="project"
        v-bind="projectConfig"
        :resources="resources"
        :events="events"
    />
    <bryntum-calendar
        ref="calendar"
        v-bind="calendarConfig"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

import {
  BryntumProjectModel,
  BryntumCalendar
} from '@bryntum/calendar-vue-3';

import { useCalendarConfig, useProjectConfig } from '@/AppConfig';

const calendar = ref(null);
const project = ref(null);

const calendarConfig = reactive(useCalendarConfig());
const projectConfig = reactive(useProjectConfig());

const resources = ref(null);
const events = ref(null);

resources.value = [
  {
    id         : 1,
    name       : 'Default Calendar',
    eventColor : 'green'
  }
];
events.value =  [
  {
    id         : 1,
    name       : 'Meeting',
    startDate  : '2022-01-01T10:00:00',
    endDate    : '2022-01-01T11:00:00',
    resourceId : 1
  }
];

onMounted(() => {
  calendar.value.instance.value.project = project.value.instance.value;
});


</script>

<style lang="scss">
//@import './App.scss';
</style>
