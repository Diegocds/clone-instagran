<template>
  <v-app-bar flat height="54px" width="100%" class=" header  mb-6" fixed app>
    <div class="header__itens">
      <div>
        <v-img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <v-text-field
        flat
        solo
        label="Prepend inner"
        prepend-inner-icon="search"
        class="pt-6 mb-0  text-center"
      ></v-text-field>
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

        <v-btn icon>
          <v-icon size="22">favorite_border</v-icon>
        </v-btn>

        <v-btn text>
          <v-avatar size="24">
            <v-img
              src="https://www.rsdireito.com/wp-content/uploads/2017/07/promo323723448.jpg"
            />
          </v-avatar>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

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
    &__icons {
    }
  }
}
</style>

<script>
// export default {
//   .
//   .
//   .
//   .
//   .
//   .
//   .
//   .
//   .
// }
//
</script>
