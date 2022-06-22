<template>
  <div class="md-layout md-alignment-center" id="container">
    <md-card class="md-layout-item md-size-50 md-small-size-90">
      <md-card-header :data-background-color="'green'">
        <div class="md-title">Login</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label for="">Email</label>
          <md-input v-model="loginData.email"></md-input>
          <span class="md-helper-text"
            >No compartiremos tu información con nadie.</span
          >
        </md-field>
        <md-field>
          <label for="">Password</label>
          <md-input v-model="loginData.password" type="password"></md-input>
          <span class="md-helper-text">
            Tu contraseña debe tener entre 8-20 caracteres, conteniendo letras y
            numeros.</span
          >
        </md-field>
        <md-checkbox v-model="rememberMe">Recuerdame</md-checkbox>

        <md-card-actions>
          <label class="" for=""
            >¿No estás registrado?
            <router-link :to="{ name: 'Register' }"
              >Registrate</router-link
            ></label
          >
          <md-button
            type="submit"
            class="md-success"
            id="margin"
            @click="login()"
            >Ingresar</md-button
          >
        </md-card-actions>
      </md-card-content>
    </md-card>
    {{ check() }}
  </div>
</template>

<script>
const axios = require("axios").default;
var URL = "http://localhost:8081";
export default {
  data() {
    return {
      logFailStatus: false,
      logCheck: false,
      rememberMe: false,
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    check() {
      var me = this;
      if (localStorage.getItem("jwt")) {
        me.$router.push({ name: "Dashboard" });
      } else {
      }
    },
    login() {
      var me = this;
      console.log("Login");
      const form = new FormData();
      form.append("email", me.loginData.email);
      form.append("password", me.loginData.password);
      console.log(me.loginData.email);
      console.log(me.loginData.password);
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(URL + "/api/login", me.loginData, config)
        .then(function (response) {
          if (response.status == 200) {
            localStorage.setItem("jwt", response.data.token);
            localStorage.setItem("email", response.data.email);
            // console.log(response.data);
            me.$router.push({ name: "Dashboard" });
            me.$swal.fire(
              "Sesión iniciada!",
              "Bienvenido " + me.loginData.email,
              "success"
            );
          }
          //   this.$cookie.set("jwt", response.data.cookie)
        })
        .catch(function (error) {
          me.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario y/o contraseña incorrectos!",
          });
          console.log(error);
          // this.logFailStatus = "true";
        });
    },
  },
  props: {
    logChecks: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
#margin {
  margin-left: 10px;
}
#container {
  margin: 0;
  position: static;
  top: 50%;
  transform: translateY(+30%);
}
</style>