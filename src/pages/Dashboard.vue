<template>
  <div class="content">
    <div class="md-layout">
      <!-- TABLA DE DISPOSITIVOS -->
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Dispositivos</h4>
          <p class="category">Lista de dispositivos agregados.</p>
        </md-card-header>
        <md-card-content>
          <md-table v-model="devices" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="ID Device">{{ item.id }}</md-table-cell>
              <md-table-cell md-label="Name Device" md-sort-by="name">{{
                item.name
              }}</md-table-cell>
              <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
              <md-table-cell md-label="User">{{ item.user }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
var URL = "http://localhost:8081";
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  JSON,
} from "@/components";
export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    JSON,
  },
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      logFailStatus: false,
      logCheck: false,
      devices: [
        {
          id: "",
          name: "",
          type: "",
          user: "",
          user_id: "",
        },
      ],
    };
  },
  mounted() {
    this.fillDevices();
    this.check();
  },
  methods: {
    check() {
      var me = this;
      if (!localStorage.getItem("jwt")) {
        me.$router.push({ name: "Login" });
      } else {
      }
    },
    fillDevices() {
      axios.get(URL + "/api/devices/").then((response) => {
        console.log(response);
        this.devices = response.data;
      });
    },
  },
};
</script>

