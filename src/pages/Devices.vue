<template>
  <div class="content">
    <div class="md-layout">
      <!-- CARD PARA REGISTRO BÁSICO -->
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Alta de dispositivos</h4>
          <p class="category">Ingrese la información de sus dispositivos</p>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-30">
              <md-field>
                <label>Nombre del dispositivo</label>
                <md-input v-model="device.name" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-30">
              <md-field>
                <label>Tipo de dispositivo</label>
                <md-input v-model="device.type" type="email"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-30">
              <md-field>
                <label>ID de usuario</label>
                <md-input v-model="device.user_id" type="email"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button @click="insertDevices()" class="md-raised md-success"
                >AGREGAR</md-button
              >
            </div>
          </div>
        </md-card-content>
      </md-card>

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

              <!-- TOOLTIPS / OPCIONES -->
              <md-table-cell v-if="devices.id == null" md-label="Options">
                <div class="md-layout">
                  <md-icon>
                    <i
                      class="fas fa-database"
                      :class="{
                        'text-success': item.saverRule,
                        'text-dark': !item.saverRule,
                      }"
                    ></i>
                  </md-icon>

                  <md-switch v-model="item.saverRule"></md-switch>
                  <md-button
                    class="md-icon-button md-danger"
                    @click="deleteDevice(item)"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </div>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
      <!-- JSON TOOL -->
      <JSON :value="devices"></JSON>
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
      device: {
        id: 0,
        name: "",
        type: "",
        user_id: "",
        saverRule: true,
      },
      devices: [],
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
    clean() {
      this.device.name =  "",
      this.device.type =  ""
      this.device.user_id =  ""
    },
    fillDevices() {
      axios.get(URL + "/api/devices/").then((response) => {
        console.log(response);
        this.devices = response.data;
      });
    },

    insertDevices() {
      var me = this;
      const form = new FormData();
      form.append("name", me.device.name);
      form.append("type", me.device.type);
      form.append("user_id", me.device.user_id);
      form.append("saverRule", 1);

      axios
        .post(URL + "/api/devices/", me.device)
        .then(function (response) {
          console.log(response);
          me.fillDevices();
          me.$swal.fire(
            "Dispositivo agregado!",
            "Device: " + me.device.name,
            "success"
          );
          clean();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteDevice(item) {
      this.$swal
        .fire({
          title: "¿Deseas eliminar el dispositivo?",
          text: "No se podrá revertir!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Confirmar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // console.log("http://localhost:8081/api/mascotas/" + i);
            this.$swal.fire(
              "Eliminado!",
              "El dispositivo ha sido eliminado.",
              "success"
            );
            console.log(item.id);
            axios
              .delete(URL + "/api/devices/" + item.id)
              .then((response) => {
                console.log(response.data);
                this.fillDevices();
              })
              .catch((error) => console.log("Error ", error));
          }
        });
    },
  },
};
</script>
