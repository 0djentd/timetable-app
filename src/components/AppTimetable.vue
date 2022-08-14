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
        :dense="tasks.length >= 5"
        multi-sort
        :loading="!tasks"
        :search="search"
        :headers="headers"
        :items="tasks"
        :items-per-page="50"
      >
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { example_data } from "@/data.js";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Title", value: "title" },
        { text: "Description", value: "description" },
        { text: "Start", value: "start" },
        { text: "Priority", value: "priority" },
      ],
      tasks: example_data,
    };
  },
};
</script>
