<template>
  <div>
    <AppTimetable :tasks="tasks" />
  </div>
</template>

<script>
import AppTimetable from "@/components/AppTimetable.vue";
import { example_data } from "@/data.js";

export default {
  components: {
    AppTimetable,
  },
  data() {
    return {
      tasks: example_data,
    };
  },
};
</script>
