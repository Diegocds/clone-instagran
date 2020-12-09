<template>
  <v-card class="card">
    <div class="card__section">
      <div class="card__section__instagram">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          max-height="80"
          max-width="280"
          class="card__section__instagram__img mt-10 "
        />
        <v-card-title class="pa-0 mx-10">
          <strong>Cadastre-se para ver fotos e vídeos dos seus amigos.</strong>
          <v-btn
            color="#0095f6"
            dark
            class="card__section__instagram__button mb-6"
            elevation="0"
            type="submit"
          >
            <v-icon color="white">facebook</v-icon>Entrar com Facebook
          </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-form @submit="registerUser" class="card__section__instagram__form">
          <v-col cols="12" sm="10" class=" pb-1  ">
            <v-text-field
              v-model="email"
              label="E-mail"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="card__section__instagram__form__input"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="10" class=" py-1  ">
            <v-text-field
              v-model="nomeCompleto"
              label="Nome completo"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="card__section__instagram__form__input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="10" class=" py-1  ">
            <v-text-field
              v-model="nomeUsuario"
              label="Nome de usuário"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="card__section__instagram__form__input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="10" class=" pt-1 ">
            <v-text-field
              v-model="password"
              label="Senha"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="card__section__instagram__form__input"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-btn
            color="#0095f6"
            dark
            class="card__section__instagram__form__button mb-6"
            elevation="0"
            type="submit"
          >
            Cadastre-se
          </v-btn>

          <span>
            Ao se cadastrar, você concorda com nossos
          </span>
          <strong>Termos, Política de dados e Política de Cookies.</strong>
        </v-form>

        <div class="card__section__instagram__text"></div>
      </div>
      <div class="card__section__instagram__register">
        <p>
          Tem uma conta?
          <router-link to="/">Conecte-se</router-link>
        </p>
      </div>
      <p class="card__section__aplication">Obtenha o aplicativo.</p>
      <div class="section__app">
        <a
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
        >
          <img
            alt="Disponível na App Store"
            class="card__section__app__img mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DFCCA8C4D-AFC5-4E55-87E6-F6DBB941841C%26utm_content%3Dlo%26utm_medium%3Dbadge"
        >
          <img
            alt="Disponível no Google Play"
            class="card__section__app__img"
            src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"
          />
        </a>
      </div>
    </div>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      nomeCompleto: "",
      nomeUsuario: "",
      password: "",
      show: false,
    };
  },
  methods: {
    async registerUser(e) {
      e.preventDefault();

      await axios.post("http://localhost:3000/users", {
        email: this.email,
        nomeCompleto: this.nomeCompleto,
        nomeUsuario: this.nomeUsuario,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  display: flex;
  justify-content: center;
  align-items: center;
  &__section {
    &__instagram {
      width: 350px;
      height: 100%;
      margin-top: 30px;
      border: 1px solid #dbdbdb;
      background: #ffffff;

      strong {
        color: rgba(var(--f52, 142, 142, 142), 1);
        font-size: 17px;
        font-weight: 500;
        line-height: 20px;
        margin: 0 20px 20px;
        text-align: center;
      }

      &__button {
        width: 265px;
        height: 36px;
        text-transform: unset;
      }
      &__form {
        display: flex;
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;

        &__input {
          width: 258px !important;
          height: 36px !important;
          padding: 0 !important;
          margin-bottom: 20px;
        }
        &__button {
          width: 265px;
          height: 36px;
          text-transform: unset;
        }
        span {
          color: rgba(var(--f52, 142, 142, 142), 1);
          font-size: 12px;
          line-height: 10px;
          margin: 0px 40px;
          text-align: center;
        }
        strong {
          color: rgba(var(--f52, 142, 142, 142), 1);
          font-size: 13px;
          line-height: 10px;
          margin: 10px 34px;
          text-align: center;
        }
      }

      &__img {
        margin: 20px 82px 12px 82px;
        height: 51px;
        width: 175px;
      }
      &__text {
        text-align: center;
        padding-top: 25px;
        strong {
          font-size: 14px;
          color: #385185;
          font-weight: bold;
        }
        a {
          font-size: 12px;
          color: #385185;
          text-decoration: none;
        }
      }
      &__register {
        width: 350px;
        height: 60px;
        border: 1px solid #dbdbdb;
        background: #ffffff;
        margin: 10px 0 20px;
        padding-top: 18px;
        p {
          font-size: 14px;
          text-align: center;
        }
        a {
          font-size: 14px;
          color: #0095f6;
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
    p {
      text-align: center;
      font-size: 14px;
    }
    &__app {
      display: flex;
      justify-content: center;

      &__img {
        width: 135px;
        height: 40px;
      }
    }
  }
}
</style>
