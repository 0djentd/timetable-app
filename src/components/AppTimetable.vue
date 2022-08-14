<template>
  <div>
    <v-card>
      <v-card-title>
        Timetable
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search tasks"
          class="mr-4"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :dense="showDense"
        :multi-sort="multi_sort"
        :loading="!tasks"
        :search="search"
        :headers="headers"
        :items="tasks"
        :items-per-page="50"
      >
      </v-data-table>
      <v-switch v-model="multi_sort" label="multi-sort"> </v-switch>
      <v-switch v-model="dense" label="dense"> </v-switch>
      <v-switch v-model="auto_dense" label="auto-dense"> </v-switch>
      <v-btn @click="saveToLocalStorage()">Save</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      multi_sort: true,
      dense: true,
      auto_dense: true,
      headers: [
        { text: "Title", value: "title" },
        { text: "Description", value: "description" },
        { text: "Start", value: "start" },
        { text: "Priority", value: "priority" },
      ],
      tasks: [],
    };
  },
  computed: {
    showDense() {
      if (this.auto_dense) {
        if (this.tasks.length > 5) {
          return true;
        } else {
          return false;
        }
      } else {
        return this.dense;
      }
    },
  },
  methods: {
    loadFromLocalStorage: function () {
      const localStorageStr = "timetable-app-tasks";
      const tasksJson = localStorage.getItem(localStorageStr, '{"tasks": []}');
      const tasks = JSON.parse(tasksJson).tasks;
      if (tasks) {
        this.tasks = tasks;
      } else {
        this.tasks = [];
      }
    },
    saveToLocalStorage: function () {
      const localStorageStr = "timetable-app-tasks";
      const tasksJson = JSON.stringify({ tasks: this.tasks });
      localStorage.setItem(localStorageStr, tasksJson);
    },
  },
  mounted() {
    this.loadFromLocalStorage();
  },
};
</script>
