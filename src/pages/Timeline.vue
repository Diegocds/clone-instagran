<template>
  <div class="time-line">
    <Header />

    <v-container>
      <div class="container">
        <Sidebar />
        <div
          class=" time-line__cards d-flex justify-space-between spacing-playground pa-4 fluid"
        >
          <div
            class="time-line__cards__text"
            v-for="item in stories"
            :key="item"
          >
            <v-avatar
              color="pink"
              size="60"
              class="time-line__cards__text__avatar"
            >
              <v-img :src="item.img" />
            </v-avatar>
            <span>{{ item.name }}</span>
          </div>
        </div>

        <Card />
      </div>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default {
  data: () => ({
    stories: [
      {
        img:
          "https://jpimg.com.br/uploads/2019/05/6-helen-sloan-hbo-1-1024x682.jpg",
        name: "Cersei",
      },
      {
        img:
          "https://media.fstatic.com/qTK6Fun91pLUkT9O8TFhpX2tnPs=/full-fit-in/629x300/media/articles/main/2019/03/28/_3156f4e2-1b31-11e9-b190-a6170a1d34c9-3676146339.jpg",
        name: "rei da noite",
      },
      {
        img:
          "https://s2.glbimg.com/-Zq2oIZYXHKFRGGrSUtF7v4--A4=/695x0/s.glbimg.com/po/tt2/f/original/2015/11/16/jon-snow.jpg",
        name: "jon snow",
      },
      {
        img:
          "https://rollingstone.uol.com.br/media/_versions/sophie-turnet-got-reprod_widelg.jpg",
        name: "sansa ",
      },
      {
        img:
          "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2013/03/31/got-s3-arya-wallpaper-1600.jpg",
        name: "arya ",
      },
      {
        img:
          "https://mundoconectado.com.br/thumbs/chamadas/got-season-6jpg.jpg",
        name: "tyron ",
      },
      {
        img:
          "https://pm1.narvii.com/6346/1f4730cad720c2214001d281f8777752c1b44283_hq.jpg",
        name: "eddard",
      },
      {
        img: "https://br.jetss.com/wp-content/uploads/2019/04/Theon.jpg",
        name: "theon",
      },
      {
        img:
          "https://jpimg.com.br/uploads/2019/05/6-helen-sloan-hbo-1-1024x682.jpg",
        name: "bran",
      },
      {
        img:
          "https://jpimg.com.br/uploads/2019/05/6-helen-sloan-hbo-1-1024x682.jpg",
        name: "joffrey",
      },
    ],
  }),
  components: {
    Card,
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
.time-line {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  margin: 0 auto;
  height: 100%;
  &__cards {
    border: 1px solid #dbdbdb;
    width: 55%;
    margin-bottom: 20px;
    margin-left: 80px;
    background: #ffffff;
    overflow-x: hidden;
    &__text {
      display: flex !important;
      flex-direction: column;
      margin-right: 18px;

      span {
        text-align: center;
        font-size: 12px;
        line-height: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 5px;
        white-space: nowrap;
        text-transform: lowercase;
      }
      &__avatar {
        // min-width: 80px;

        border: 2px solid purple;
      }
    }
  }
}
// .container {
//   width: 80%;
//   height: auto;
// }
</style>
