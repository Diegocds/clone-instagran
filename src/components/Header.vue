<template>
  <v-app-bar flat height="54px" width="100%" class=" header  mb-6" fixed app>
    <div class="header__itens">
      <div>
        <v-img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <v-spacer />

      <v-text-field
        class=" header__itens__search"
        v-model="search"
        prepend-inner-icon="search"
        label="Pesquisar"
        clear-icon="mdi-close"
        flat
        solo
      ></v-text-field>

      <v-spacer />
      <div class="header__itens__icons">
        <v-btn icon>
          <v-icon size="22">home</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon size="22">send</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon size="22">explore</v-icon>
        </v-btn>

        <v-btn @click="dialog" icon>
          <v-icon size="22">add_circle_outline</v-icon>
        </v-btn>

        <router-link to="/"
          ><v-btn text>
            <v-avatar size="24">
              <v-img
                src="https://sm.ign.com/t/ign_br/event/default/got_4zkf.1200.jpg"
              />
            </v-avatar> </v-btn
        ></router-link>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      dialog: Boolean,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff !important;
  border-bottom: 1px solid #dbdbdb !important;
  &__itens {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    &__search {
      border: 1px solid rgba(25, 25, 25, 0.32);
      padding: 0;
      height: 55px;
      max-width: 350px;
    }
    &__icons {
    }
  }
}
</style>
