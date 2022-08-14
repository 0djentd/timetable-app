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
    };
  },
  props: ["tasks"],
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
};
</script>
