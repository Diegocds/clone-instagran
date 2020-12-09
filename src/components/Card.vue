<template>
  <div class="post">
    <div class="post__avatar">
      <v-avatar color="pink" size="32" class="mr-2"
        ><v-img
          src="https://sm.ign.com/t/ign_br/event/default/got_4zkf.1200.jpg"
        />
      </v-avatar>
      <span>Game of Thrones</span>
    </div>

    <div class="post__img">
      <v-card-text flat class="spacing-playground pa-0 fluid ">
        <v-img
          src="https://d176s39pnpenan.cloudfront.net/wp-content/uploads/2019/05/game-of-thrones-character-poster.jpg"
        />
      </v-card-text>
    </div>

    <div>
      <v-btn icon @click="like = !like">
        <v-icon :color="liked">favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: false,
    };
  },
  computed: {
    liked() {
      return this.like ? "red" : "black";
    },
  },
};
</script>

<script>
import Card from "@/components/Card";
import Header from "@/components/Header";
export default {
  components: {
    Card,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.post {
  border: 1px solid #dbdbdb;
  width: 55%;
  margin-left: 80px;
  background: #ffffff;

  &__avatar {
    padding: 10px;
  }

  &__img {
    width: 100% !important;
  }
}
</style>
