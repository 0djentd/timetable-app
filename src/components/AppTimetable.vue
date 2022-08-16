<template>
  <v-row>
    <v-col cols="12" sm="2">
      <v-sheet rounded="lg">
        <v-card-title> How to use? </v-card-title>
        <v-card-text
          >First, click "New task" to add a new task. You can then sort, edit or
          remove tasks.</v-card-text
        >
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="8">
      <v-sheet rounded="lg" elevation="1" style="padding: 20px">
        <div v-if="showJson">
          <v-textarea dense auto-grow v-model="jsonTasks"></v-textarea>
        </div>
        <v-data-table
          v-if="!showJson"
          :dense="showDense"
          :multi-sort="multiSort"
          :loading="!tasks"
          :search="search"
          :headers="headers"
          :items="tasks"
          :items-per-page="50"
          sort-by="start"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-card-title class="text-h6">Timetable</v-card-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search tasks"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="700px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mx-2" v-bind="attrs" v-on="on">
                    New Task
                  </v-btn>
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
                          <b-form-timepicker v-model="editedItem.start">
                          </b-form-timepicker>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-slider
                            v-model="editedItem.priority"
                            label="Priority"
                            min="0"
                            max="10"
                          ></v-slider>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-textarea
                          v-model="editedItem.description"
                          label="Description"
                          auto-grow
                          dense
                          clearable
                        >
                        </v-textarea>
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
                    Are you sure you want to remove task "{{
                      editedItem.title
                    }}"?
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
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="2">
      <v-sheet rounded="lg" class="px-4 py-2">
        <v-card-title class="text-h6">Settings</v-card-title>
        <v-switch dense v-model="multiSort" label="Multi-sort"> </v-switch>
        <v-switch dense v-model="dense" label="Dense"> </v-switch>
        <v-switch
          dense
          :disabled="!dense"
          v-model="autoDense"
          label="Auto-dense"
        >
        </v-switch>
        <v-slider
          v-model="autoDenseLimit"
          :disabled="!autoDense || !dense"
          thumb-label
          dense
          max="50"
        ></v-slider>
        <v-switch dense v-model="filterTime" label="Filter-time"> </v-switch>
        <v-switch
          dense
          v-model="showDisplaySettings"
          label="Show additional settings"
        >
        </v-switch>
        <div v-if="showDisplaySettings">
          <v-switch dense v-model="showTitle" label="Show title"> </v-switch>
          <v-switch dense v-model="showDescription" label="Show description">
          </v-switch>
          <v-switch dense v-model="showStart" label="Show start time">
          </v-switch>
          <v-switch dense v-model="showPriority" label="Show priority">
          </v-switch>
          <v-switch dense v-model="showActions" label="Show actions">
          </v-switch>
        </div>
        <v-switch dense v-model="showJson" label="Show JSON"> </v-switch>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      showDisplaySettings: false,
      showJson: false,
      search: "",
      multiSort: true,
      dense: true,
      autoDense: true,
      autoDenseLimit: 5,
      filterTime: false,
      showTitle: true,
      showDescription: true,
      showStart: true,
      showPriority: true,
      showActions: true,
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
    jsonTasks: {
      get() {
        return JSON.stringify(this.tasks, null, 4);
      },
      set(val) {
        this.tasks = JSON.parse(val);
      },
    },
    headers() {
      const title = { text: "Title", value: "title" };
      const description = { text: "Description", value: "description" };
      const start = {
        text: "Start",
        value: "start",
        filter: (val) => {
          if (!this.filterTime) {
            return true;
          }
          if (val >= this.currentTime) {
            return true;
          } else {
            return false;
          }
        },
      };
      const priority = { text: "Priority", value: "priority" };
      const actions = { text: "Actions", value: "actions", sortable: false };
      let result = [];
      if (this.showTitle) {
        result.push(title);
      }
      if (this.showDescription) {
        result.push(description);
      }
      if (this.showStart) {
        result.push(start);
      }
      if (this.showPriority) {
        result.push(priority);
      }
      if (this.showActions) {
        result.push(actions);
      }
      return result;
    },
    currentTime() {
      const time = new Date();
      return time.getHours() + ":" + time.getMinutes();
    },
    formTitle() {
      if (this.editedIndex === -1) {
        return "New task";
      } else {
        return "Edit task";
      }
    },
    showDense() {
      if (this.autoDense && this.dense) {
        if (this.tasks.length >= this.autoDenseLimit) {
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
