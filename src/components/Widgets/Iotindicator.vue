<template>
  <div class="content">
    <div class="md-layout">
      <h4>{{ config.selectedDevice.name }} - {{ config.variableFullName }}</h4>
    </div>
    <md-icon>
      <i class="fa" :class="[config.icon, getIconColorClass()]"></i>
    </md-icon>
  </div>
</template>

<script>
export default {
  //   props: ["config"],
  data() {
    return {
      value: true,
      config: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "888",
          templateName: "Power Sensor",
          templateId: "Q2332DSACCSADD1",
          saverRule: false,
        },
        variableFullName: "Pump",
        variable: "uniquestr",
        icon: "fa-sun",
        column: "col-6",
        widget: "indicator",
        class: "success",
      },
    };
  },
  mounted() {
    this.$on("widget-topic", this.processReceivedData);
  },
  methods: {
    processReceivedData(data) {
      console.log("Recibio");
      console.log(data);
      this.value = data.value;
    },
    getIconColorClass() {
      if (!this.value) {
        return "text-dark";
      }

      if (this.config.class == "success") {
        return "text-success";
      }
      if (this.config.class == "danger") {
        return "text-danger";
      }
      if (this.config.class == "primary") {
        return "text-primary";
      }
      if (this.config.class == "warning") {
        return "text-warning";
      }
    },
  },
};
</script>

<style>
</style>