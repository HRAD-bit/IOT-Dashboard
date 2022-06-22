<template>
  <div class="content">
    <div class="md-layout">
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Widgets {{ iotIndicatorConfig.column }}</h4>
          <p class="category">Ingrese la información de sus widgets</p>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <!-- WIDGET SELECTOR AND FORMS  -->
            <div class="col-6">
              <!-- WIDGETS SELECTOR -->
              <md-field>
                <label for="movie">Widget</label>
                <md-select
                  name="widget"
                  id="widget"
                  class="select-success"
                  placeholder="Select Widget"
                >
                  <md-option
                    class="text-dark"
                    value="indicator"
                    label="Boolean Indicator INPUT"
                    >Boolean Indicator INPUT</md-option
                  >
                  <md-option class="text-dark" value="map" label="Map INPUT"
                    >Map INPUT</md-option
                  >
                  <md-option
                    class="text-dark"
                    value="switch"
                    label="Switch OUTPUT"
                    >Switch OUTPUT</md-option
                  >
                  <md-option
                    class="text-dark"
                    value="button"
                    label="Button OUTPUT"
                    >Button OUTPUT</md-option
                  >
                </md-select>
              </md-field>
              <!-- FORMS NUMBER CHART TYPE -->
              <div v-if="widgetType == 'numberchart'">
                <md-field>
                  <label>Type here!</label>
                  <md-input v-model="ncConfig.variableFullName"></md-input>
                </md-field>
                <md-field>
                  <label>Unit</label>
                  <md-input v-model="ncConfig.unit"></md-input>
                </md-field>
                <md-field>
                  <label for="">Decimal Places</label>
                  <md-input
                    v-model.number="ncConfig.decimalPlaces"
                    type="number"
                  ></md-input>
                </md-field>
                <md-field>
                  <label for="">Icon</label>
                  <md-input v-model="ncConfig.icon"></md-input>
                </md-field>

                <md-field>
                  <label for="">Send Freq</label>
                  <md-input
                    v-model.number="ncConfig.variableSendFreq"
                    type="number"
                  ></md-input>
                </md-field>
                <md-field>
                  <label for="">Chart Back Time (mins)</label>
                  <md-input
                    type="number"
                    v-model.number="ncConfig.chartTimeAgo"
                  ></md-input>
                </md-field>
                <!-- md-field>label+md-input -->
                <md-field>
                  <label for=""></label>
                  <md-select
                    v-model="ncConfig.class"
                    class="select-success"
                    placeholder="Select Class"
                    style="width: 100%"
                  >
                    <md-option
                      class="text-success"
                      value="success"
                      label="Success"
                      >Success</md-option
                    >
                    <md-option
                      class="text-primary"
                      value="primary"
                      label="Primary"
                      >Primary</md-option
                    >
                    <md-option
                      class="text-warning"
                      value="warning"
                      label="Warning"
                      >Warning</md-option
                    >
                    <md-option class="text-danger" value="danger" label="Danger"
                      >Danger</md-option
                    >
                  </md-select>
                </md-field>
                <br /><br /><br />

                <!-- md-field>label+md-select>md-option*4 -->
                <!-- COLUMNS SIZE -->
                <md-field>
                  <label for="">Select Column Width</label>
                  <md-select
                    v-model="ncConfig.column"
                    class="select-success"
                    placeholder="Select Column Width"
                    style="width: 100%"
                  >
                    <md-option class="text-dark" value="col-3" label="col-3"
                      >col-3</md-option
                    >
                    <md-option class="text-dark" value="col-4" label="col-4"
                      >col-4</md-option
                    >
                    <md-option class="text-dark" value="col-5" label="col-5"
                      >col-5</md-option
                    >
                    <md-option class="text-dark" value="col-6" label="col-6"
                      >col-6</md-option
                    >
                    <md-option class="text-dark" value="col-7" label="col-7"
                      >col-7</md-option
                    >
                    <md-option class="text-dark" value="col-8" label="col-8"
                      >col-8</md-option
                    >
                    <md-option class="text-dark" value="col-9" label="col-9"
                      >col-9</md-option
                    >
                    <md-option class="text-dark" value="col-10" label="col-10"
                      >col-10</md-option
                    >
                    <md-option class="text-dark" value="col-11" label="col-11"
                      >col-11</md-option
                    >
                    <md-option class="text-dark" value="col-12" label="col-12"
                      >col-12</md-option
                    >
                  </md-select>
                </md-field>

                <!-- SWITCH -->
                <div v-if="widgetType == 'switch'">
                  <!-- Inputs -->
                  <md-field>
                    <label for="">Var Name</label>
                    <md-input
                      v-model="iotSwitchConfig.variableFullName"
                      label="Var Name"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Icon</label>
                    <md-input
                      v-model="iotSwitchConfig.icon"
                      label="Icon"
                      type="text"
                    ></md-input>
                  </md-field>
                  <!-- selector -->
                  <md-field>
                    <label for="">Select Class</label>
                    <md-select
                      v-model="iotSwitchConfig.class"
                      class="select-success"
                      placeholder="Select Class"
                      style="width: 100%"
                    >
                      <md-option
                        class="text-success"
                        value="success"
                        label="Success"
                        >Success</md-option
                      >
                      <md-option
                        class="text-primary"
                        value="primary"
                        label="Primary"
                        >Primary</md-option
                      >
                      <md-option
                        class="text-warning"
                        value="warning"
                        label="Warning"
                        >Warning</md-option
                      >
                      <md-option
                        class="text-danger"
                        value="danger"
                        label="Danger"
                        >Danger</md-option
                      >
                    </md-select>
                  </md-field>

                  <br /><br /><br />

                  <md-field>
                    <label for="">Select Column Width</label>
                    <md-select
                      v-model="iotSwitchConfig.column"
                      class="select-success"
                      placeholder="Select Column Width"
                      style="width: 100%"
                    >
                      <md-option class="text-dark" value="col-3" label="col-3"
                        >col-3</md-option
                      >
                      <md-option class="text-dark" value="col-4" label="col-4"
                        >col-4</md-option
                      >
                      <md-option class="text-dark" value="col-5" label="col-5"
                        >col-5</md-option
                      >
                      <md-option class="text-dark" value="col-6" label="col-6"
                        >col-6</md-option
                      >
                      <md-option class="text-dark" value="col-7" label="col-7"
                        >col-7</md-option
                      >
                      <md-option class="text-dark" value="col-8" label="col-8"
                        >col-8</md-option
                      >
                      <md-option class="text-dark" value="col-9" label="col-9"
                        >col-9</md-option
                      >
                      <md-option class="text-dark" value="col-10" label="col-10"
                        >col-10</md-option
                      >
                      <md-option class="text-dark" value="col-11" label="col-11"
                        >col-11</md-option
                      >
                      <md-option class="text-dark" value="col-12" label="col-12"
                        >col-12</md-option
                      >
                    </md-select>
                  </md-field>
                  <br /><br />
                </div>

                <!-- FORM BUTTON TYPE -->
                <div v-if="widgetType == 'button'">
                  <md-field>
                    <label for="">Var Name</label>
                    <md-input
                      v-model="configButton.variableFullName"
                      label="Var Name"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Message to send</label>
                    <md-input
                      v-model="configButton.message"
                      label="Message to send"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Button Text</label>
                    <md-input
                      v-model="configButton.text"
                      label="Button Text"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Icon</label>
                    <md-input
                      v-model="configButton.icon"
                      label="Icon"
                      type="text"
                    ></md-input>
                  </md-field>
                  <br />
                  <md-field>
                    <label for="">Select Class</label>
                    <md-select
                      v-model="configButton.class"
                      class="select-success"
                      placeholder="Select Class"
                      style="width: 100%"
                    >
                      <md-option
                        class="text-success"
                        value="success"
                        label="Success"
                        >Success</md-option
                      >
                      <md-option
                        class="text-primary"
                        value="primary"
                        label="Primary"
                        >Primary</md-option
                      >
                      <md-option
                        class="text-warning"
                        value="warning"
                        label="Warning"
                        >Warning</md-option
                      >
                      <md-option
                        class="text-danger"
                        value="danger"
                        label="Danger"
                        >Danger</md-option
                      >
                    </md-select>
                  </md-field>
                  <br /><br /><br />

                  <md-field>
                    <label for="">Select Column Width</label>
                    <md-select
                      v-model="configButton.column"
                      class="select-success"
                      placeholder="Select Column Width"
                      style="width: 100%"
                    >
                      <md-option class="text-dark" value="col-3" label="col-3"
                        >col-3</md-option
                      >
                      <md-option class="text-dark" value="col-4" label="col-4"
                        >col-4</md-option
                      >
                      <md-option class="text-dark" value="col-5" label="col-5"
                        >col-5</md-option
                      >
                      <md-option class="text-dark" value="col-6" label="col-6"
                        >col-6</md-option
                      >
                      <md-option class="text-dark" value="col-7" label="col-7"
                        >col-7</md-option
                      >
                      <md-option class="text-dark" value="col-8" label="col-8"
                        >col-8</md-option
                      >
                      <md-option class="text-dark" value="col-9" label="col-9"
                        >col-9</md-option
                      >
                      <md-option class="text-dark" value="col-10" label="col-10"
                        >col-10</md-option
                      >
                      <md-option class="text-dark" value="col-11" label="col-11"
                        >col-11</md-option
                      >
                      <md-option class="text-dark" value="col-12" label="col-12"
                        >col-12</md-option
                      >
                    </md-select>
                  </md-field>
                  <br /><br />
                </div>

                <!-- FORM INDICATOR TYOE -->
                <div v-if="widgetType == 'indicator'">
                  <md-field>
                    <label for="">Var Name</label>
                    <md-input
                      v-model="iotIndicatorConfig.variableFullName"
                      label="Var Name"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Icon</label>
                    <md-input
                      v-model="iotIndicatorConfig.icon"
                      label="Icon"
                      type="text"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label for="">Send Freq</label>
                    <md-input
                      v-model="iotIndicatorConfig.variableSendFreq"
                      label="Send Freq"
                      type="text"
                    ></md-input>
                  </md-field>
                  <br />
                  <md-field>
                    <label for=""></label>
                    <md-select
                      v-model="iotIndicatorConfig.class"
                      class="select-success"
                      placeholder="Select Class"
                      style="width: 100%"
                    >
                      <md-option
                        class="text-success"
                        value="success"
                        label="Success"
                        >Success</md-option
                      >
                      <md-option
                        class="text-primary"
                        value="primary"
                        label="Primary"
                        >Primary</md-option
                      >
                      <md-option
                        class="text-warning"
                        value="warning"
                        label="Warning"
                        >Warning</md-option
                      >
                      <md-option
                        class="text-danger"
                        value="danger"
                        label="Danger"
                        >Danger</md-option
                      >
                    </md-select>
                  </md-field>
                  <br /><br /><br />
                  <!-- COLUMNS SIZE -->
                  <md-field>
                    <label for="">Select Column Width</label>
                    <md-select
                      v-model="iotIndicatorConfig.column"
                      class="select-success"
                      placeholder="Select Column Width"
                      style="width: 100%"
                    >
                      <md-option class="text-dark" value="col-3" label="col-3"
                        >col-3</md-option
                      >
                      <md-option class="text-dark" value="col-4" label="col-4"
                        >col-4</md-option
                      >
                      <md-option class="text-dark" value="col-5" label="col-5"
                        >col-5</md-option
                      >
                      <md-option class="text-dark" value="col-6" label="col-6"
                        >col-6</md-option
                      >
                      <md-option class="text-dark" value="col-7" label="col-7"
                        >col-7</md-option
                      >
                      <md-option class="text-dark" value="col-8" label="col-8"
                        >col-8</md-option
                      >
                      <md-option class="text-dark" value="col-9" label="col-9"
                        >col-9</md-option
                      >
                      <md-option class="text-dark" value="col-10" label="col-10"
                        >col-10</md-option
                      >
                      <md-option class="text-dark" value="col-11" label="col-11"
                        >col-11</md-option
                      >
                      <md-option class="text-dark" value="col-12" label="col-12"
                        >col-12</md-option
                      >
                    </md-select>
                  </md-field>
                  <br /><br />
                </div>
              </div>
            </div>

            <!-- WIDGET PREVIEW -->
            <div class="col-6">
              <Rtnumberchart
                v-if="widgetType == 'numberchart'"
                :config="ncConfig"
              ></Rtnumberchart>
              <Iotswitch
                v-if="widgetType == 'switch'"
                :config="iotSwitchConfig"
              ></Iotswitch>
              <Iotbutton
                v-if="widgetType == 'button'"
                :config="configButton"
              ></Iotbutton>
              <Iotindicator
                v-if="widgetType == 'indicator'"
                :config="iotIndicatorConfig"
              ></Iotindicator>
            </div>
            <!-- ADD WIDGET BUTTON -->
            <div class="ms-3 pull-right">
              <div class="col-12">
                <md-button
                  native-type="submit"
                  type="primary"
                  size="lg"
                  @click="addNewWidget()"
                  class="md-raised md-accent mb-3 mx-3"
                  >Add Widget</md-button
                >
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>

    <!-- DASHBOARD PREVIEW -->
    <div class="md-layout">
      <div
        v-for="(widget, index) in widgets"
        :key="index"
        :class="[widget.column]"
      >
        <i
          aria-hidden="true"
          class="fa fa-trash text-warning pull-right"
          @click="deleteWidget(index)"
          style="margin-bottom: 10px"
        ></i>
        <Rtnumberchart
          v-if="widget.widget == 'numberchart'"
          :config="widget"
        ></Rtnumberchart>

        <Iotswitch
          v-if="widget.widget == 'switch'"
          :config="widget"
        ></Iotswitch>

        <Iotbutton
          v-if="widget.widget == 'button'"
          :config="widget"
        ></Iotbutton>

        <Iotindicator
          v-if="widget.widget == 'indicator'"
          :config="widget"
        ></Iotindicator>
      </div>
    </div>

    <!-- SAVE TEMPLATE FORM -->
    <div class="md-layout">
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Save Template</h4>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <md-field>
              <label for="">Template Name</label>
              <md-input
                class="col-4"
                v-model="templateName"
                label="Template Name"
                type="text"
              ></md-input>
            </md-field>
            <md-field>
              <label for="">Template Description</label>
              <md-input
                class="col-8"
                v-model="templateDescription"
                label="Template Description"
                type="text"
              ></md-input>
            </md-field>
          </div>
          <br /><br />
          <div class="md-layout">
            <div class="col-12">
              <md-button
                native-type="submit"
                type="primary"
                class="mb-3 pull-right"
                size="lg"
                @click="saveTemplate()"
                :disabled="widgets.length == 0"
              >
                Save Template

              </md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>

    <!-- TEMPLATES TABLE -->
    <div class="md-layout">
      <md-card>
        <md-card-header data-background-color="green">
          <h4 class="title">Dispositivos</h4>
          <p class="category">Lista de dispositivos agregados.</p>
        </md-card-header>
        <md-card-content>
          <md-table :data="templates">
            <md-table-row slot="md-table-row" slot-scope="{ item, index }">
              <md-table-cell min-width="50" align="center" md-label="#"
                ><div class="photo">{{ $index + 1 }}</div></md-table-cell
              >
              <md-table-cell md-label="Name" prop="name"></md-table-cell>
              <md-table-cell
                prop="description"
                md-label="Description"
              ></md-table-cell>
              <md-table-cell
                prop="widgets.length"
                md-label="Widgets"
              ></md-table-cell>
              <!-- TOOLTIPS / OPCIONES -->
              <md-table-cell md-label="Options">
                <div class="md-layout">
                  <md-button
                    class="md-icon-button md-danger"
                    @click="deleteDevice(item, index)"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </div>
              </md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import {
  IotIndicator,
  Iotbutton,
  Iotswitch,
  Rtnumberchart,
} from "@/components";
export default {
  components: {
    IotIndicator,
    Iotbutton,
    Iotswitch,
    Rtnumberchart,
  },

  data() {
    return {
      widgets: [],
      templates: [],
      widgetType: "",
      templateName: "",
      templateDescription: "",

      ncConfig: {
        userId: "sampleuserid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
        },
        variableFullName: "temperature",
        variable: "varname",
        variableType: "input",
        variableSendFreq: "30",
        unit: "Watts",
        class: "success",
        column: "col-12",
        decimalPlaces: 2,
        widget: "numberchart",
        icon: "fa-sun",
        chartTimeAgo: 60,
        demo: true,
      },

      iotSwitchConfig: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
        },
        variableFullName: "Luz",
        variable: "varname",
        variableType: "output",
        class: "danger",
        widget: "switch",
        icon: "fa-bath",
        column: "col-6",
      },

      iotIndicatorConfig: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
        },
        variableFullName: "temperature",
        variable: "varname",
        variableType: "input",
        variableSendFreq: "30",
        class: "success",
        widget: "indicator",
        icon: "fa-bath",
        column: "col-6",
      },

      configButton: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "984237562348756ldksjfh",
          saverRule: false,
        },
        variableFullName: "Pump",
        variable: "var1",
        variableType: "output",
        icon: "fa-sun",
        column: "col-4",
        widget: "button",
        class: "danger",
        message: "{'fanstatus': 'stop'}",
      },
    };
  },
  mounted() {
    this.getTemplates();
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
    //    Get template
    async getTemplates() {
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token,
        },
      };
      try {
        const res = await this.$axios.get("/template", axiosHeaders);
        console.log(res.data);

        if (res.data.status == "success") {
          this.templates = res.data.data;
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Error getting templates...",
        });
        console.log(error);
        return;
      }
    },
    //Save Template
    async saveTemplate() {
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token,
        },
      };

      console.log(axiosHeaders);

      const toSend = {
        template: {
          name: this.templateName,
          description: this.templateDescription,
          widgets: this.widgets,
        },
      };

      try {
        const res = await this.$axios.post("/template", toSend, axiosHeaders);

        if (res.data.status == "success") {
          this.$notify({
            type: "success",
            icon: "tim-icons icon-alert-circle-exc",
            message: "Template created!",
          });
          this.getTemplates();

          this.widgets = [];
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Error creating template...",
        });
        console.log(error);
        return;
      }
    },
    //Delete Template
    async deleteTemplate(template) {
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token,
        },
        params: {
          templateId: template._id,
        },
      };

      console.log(axiosHeaders);

      try {
        const res = await this.$axios.delete("/template", axiosHeaders);

        console.log(res.data);

        if (res.data.status == "fail" && res.data.error == "template in use") {
          this.$notify({
            type: "danger",
            icon: "tim-icons icon-alert-circle-exc",
            message:
              template.name +
              " is in use. First remove the devices linked to the template!",
          });

          return;
        }

        if (res.data.status == "success") {
          this.$notify({
            type: "success",
            icon: "tim-icons icon-check-2",
            message: template.name + " was deleted!",
          });

          this.getTemplates();
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: "Error getting templates...",
        });
        console.log(error);
        return;
      }
    },

    //Add Widget
    addNewWidget() {
      if (this.widgetType == "numberchart") {
        this.ncConfig.variable = this.makeid(10);
        this.widgets.push(JSON.parse(JSON.stringify(this.ncConfig)));
      }

      if (this.widgetType == "switch") {
        this.iotSwitchConfig.variable = this.makeid(10);
        this.widgets.push(JSON.parse(JSON.stringify(this.iotSwitchConfig)));
      }

      if (this.widgetType == "button") {
        this.configButton.variable = this.makeid(10);
        this.widgets.push(JSON.parse(JSON.stringify(this.configButton)));
      }

      if (this.widgetType == "indicator") {
        this.iotIndicatorConfig.variable = this.makeid(10);
        this.widgets.push(JSON.parse(JSON.stringify(this.iotIndicatorConfig)));
      }
    },

    //Delete Widget
    deleteWidget(index) {
      this.widgets.splice(index, 1);
    },

    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
  },
};
</script>
