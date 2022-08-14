<template>
  <div>
    <v-card>
      <v-data-table
        :dense="showDense"
        :multi-sort="multi_sort"
        :loading="!tasks"
        :search="search"
        :headers="headers"
        :items="tasks"
        :items-per-page="50"
        sort-by="start"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Timetable</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search tasks"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="700px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="mx-2" v-bind="attrs" v-on="on"> New Task </v-btn>
              </template>
              <v-card class="pb-2">
                <v-card-title>
                  {{ formTitle }}
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.title"
                          label="Title"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-slider
                          v-model="editedItem.priority"
                          label="Priority"
                          thumb-label
                          min="0"
                          max="10"
                        ></v-slider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-textarea
                        v-model="editedItem.description"
                        label="Description"
                      >
                      </v-textarea>
                      <v-time-picker
                        full-width
                        v-model="editedItem.start"
                      ></v-time-picker>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="close"> Cancel </v-btn>
                  <v-btn text @click="save"> Save </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="700px">
              <v-card class="pb-2">
                <v-card-title>Remove task</v-card-title>
                <v-card-text>
                  Are you sure you want to remove task "{{ editedItem.title }}"?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="closeDelete">Cancel</v-btn>
                  <v-btn text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
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
        { text: "Actions", value: "actions", sortable: false },
      ],
      tasks: [],
      editedIndex: -1,
      editedItem: {
        title: "",
        description: "",
        start: 0,
        priority: 0,
      },
      defaultItem: {
        title: "",
        description: "",
        start: 0,
        priority: 0,
      },
      dialog: false,
      dialogDelete: false,
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  computed: {
    formTitle() {
      if (this.editedIndex === -1) {
        return "New task";
      } else {
        return "Edit task";
      }
    },
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
    loadFromLocalStorage() {
      const localStorageStr = "timetable-app-tasks";
      const tasksJson = localStorage.getItem(localStorageStr, '{"tasks": []}');
      const tasks = JSON.parse(tasksJson).tasks;
      if (tasks) {
        this.tasks = tasks;
      } else {
        this.tasks = [];
      }
    },
    saveToLocalStorage() {
      const localStorageStr = "timetable-app-tasks";
      const tasksJson = JSON.stringify({ tasks: this.tasks });
      localStorage.setItem(localStorageStr, tasksJson);
    },

    editItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.tasks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.tasks.splice(this.editedIndex, 1);
      this.closeDelete();
      this.saveToLocalStorage();
    },
    resetEditedItem() {
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    close() {
      this.dialog = false;
      this.resetEditedItem();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.resetEditedItem();
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tasks[this.editedIndex], this.editedItem);
      } else {
        this.tasks.push(this.editedItem);
      }
      this.close();
      this.saveToLocalStorage();
    },
  },
  mounted() {
    this.loadFromLocalStorage();
  },
};
</script>
