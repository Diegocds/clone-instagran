<template>
  <v-card class=" card">
    <div class="home">
      <v-img
        class="home__img "
        src="https://i0.wp.com/www.digitalmarketingceo.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-03-at-11.05.04-PM-e1536030535339.png?fit=372%2C600&ssl=1"
        alt=""
      />
    </div>
    <div class="section">
      <div class="section__instagram">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          max-height="80"
          max-width="280"
          class="section__instagram__img mt-10 "
        />

        <v-form @submit="submit" class="section__instagram__form">
          <v-col cols="12" class=" pb-1 ">
            <v-text-field
              v-model="email"
              label="E-mail"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="section__instagram__form__input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" class=" pt-1 ">
            <v-text-field
              v-model="password"
              label="Senha"
              outlined
              hide-details
              background-color="#FAFAFA"
              class="section__instagram__form__input"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-btn
            color="#0095f6"
            dark
            class="section__instagram__form__button mb-6"
            elevation="0"
            type="submit"
          >
            Iniciar sessão
          </v-btn>
        </v-form>

        <v-divider></v-divider>
        <div class="section__instagram__text">
          <v-icon color="#385185">facebook</v-icon>
          <strong> Entrar com o Facebook</strong><br />
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>
      <div class="section__instagram__register">
        <p>
          Não tem uma conta?
          <router-link to="/cadastro">Cadastre-se</router-link>
        </p>
      </div>
      <p class="section__aplication">Obtenha o aplicativo.</p>
      <div class="section__app">
        <a
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
        >
          <img
            alt="Disponível na App Store"
            class="section__app__img mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DFCCA8C4D-AFC5-4E55-87E6-F6DBB941841C%26utm_content%3Dlo%26utm_medium%3Dbadge"
        >
          <img
            alt="Disponível no Google Play"
            class="section__app__img"
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
      password: "",
      show: false,
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      const { data } = await axios.get("http://localhost:3000/users", {
        params: {
          email: this.email,
          password: this.password,
        },
      });
      if (data.length === 0) {
        alert("Usuário ou senha incorretos");
      } else {
        this.$router.push({ name: "timeline" });
      }
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
}
.home {
  width: 454px;
  height: 620px;
  &__img {
    height: 600px;
    width: 400px;
  }
}
.section {
  &__instagram {
    width: 350px;
    height: 400px;
    margin-top: 30px;
    border: 1px solid #dbdbdb;
    background: #ffffff;
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
        height: 20px;
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
</style>
