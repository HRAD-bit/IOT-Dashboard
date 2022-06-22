<template>
  <div class="md-layout md-alignment-center">
    <md-card class="md-layout-item md-size-50 md-small-size-90">
      <md-card-header :data-background-color="'purple'">
        <div class="md-title">Register</div>
        <p class="category">Ingresa la información solicitada.</p>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label for="">User</label>
          <md-input v-model="registerData.user"></md-input>
          <span class="md-helper-text">Ejemplo: Paquita123</span>
        </md-field>
        <md-field>
          <label for="">Email</label>
          <md-input v-model="registerData.email"></md-input>
          <span class="md-helper-text">Ejemplo: example@mail.com</span>
        </md-field>
        <md-field>
          <label for="">Password</label>
          <md-input v-model="registerData.password" type="password"></md-input>
          <span class="md-helper-text">
            Tu contraseña debe tener entre 8-20 caracteres, conteniendo letras y
            numeros. No compartiremos tu información con nadie.
          </span>
        </md-field>
        <br />
        <md-checkbox v-model="rememberMe">Recuerdame</md-checkbox>

        <md-card-actions>
          <label class="" for=""
            >¿Ya estás registrado?
            <router-link :to="{ name: 'Login' }"
              >Inicia sesión</router-link
            ></label
          >
          <md-button
            type="submit"
            class="md-success"
            id="margin"
            @click="register()"
            >Registrate</md-button
          >
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
const axios = require("axios").default;
var URL = "http://localhost:8081";
export default {
  data() {
    return {
      rememberMe: false,
      registerData: {
        user: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      var me = this;
      if (localStorage.getItem("jwt")) {
        me.$router.push({ name: "Dashboard" });
      } else {
      }
    },
    register() {
      var me = this;
      const form = new FormData();
      form.append("user", me.registerData.user);
      form.append("email", me.registerData.email);
      form.append("password", me.registerData.password);
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post(URL + "/api/register", me.registerData, config)
        .then(function (response) {
          if (response.status == 200) {
            console.log(response);
            localStorage.setItem("jwt", response.data.token);
            localStorage.setItem("email", response.data.email);
            // console.log(response.data);
            me.$swal.fire(
              "Registro exitoso!",
              "Bienvenido " + me.registerData.email,
              "success"
            );
            me.$router.push({ name: "Dashboard" });
          } else {
            me.$swal.fire(
              "Falla en el registro",
              "Intentelo de nuevo",
              "error"
            );
          }
        })
        .catch(function (error) {
          console.log(error);
          // this.logFailStatus = "true";
        });
    },
  },
};
</script>


<style>
#margin {
  margin-left: 10px;
}
</style>