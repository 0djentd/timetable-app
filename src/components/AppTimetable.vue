<template>
  <div>
    <v-data-table :headers="headers" :items="tasks" :items-per-page="50">
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Task title",
          align: "start",
          value: "title",
        },
        { text: "Description", value: "description" },
        { text: "Start", value: "start" },
        { text: "End", value: "end" },
        { text: "Priority", value: "priority" },
      ],
      tasks: [],
    };
  },
};
</script>
