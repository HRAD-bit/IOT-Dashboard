<template>
  <div class="md-layout">
    <md-empty-state
      md-rounded
      md-icon="construction"
      md-label="No hay nada aquí"
      md-description="Este sitio aún sigue en construcción y mantenimiento, hacemos todo lo posible por brindarte la mejor experiencia."
    >
      <label for="">- Equipo de desarrollo</label>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
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
  },
};
</script>
