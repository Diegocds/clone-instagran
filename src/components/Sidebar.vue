<template>
  <div class="sidebar">
    <div class="sidebar__avatar">
      <v-avatar color="pink" size="56" class="mr-6"
        ><v-img
          src="https://i.pinimg.com/originals/77/13/aa/7713aa116b6a1b7675f2449cd07c446d.jpg"
      /></v-avatar>

      <div class="sidebar__avatar__text">
        <strong>diegocarlos2534</strong>
        <span>Diego carlos</span>
      </div>
    </div>
    <div class="sidebar__subtitulos">
      <strong>Sugestões para você</strong>
      <a href="#">Ver tudo</a>
    </div>

    <div class="sidebar__sugestoes">
      <v-avatar color="pink" size="35" class="mr-4 mt-4"
        ><v-img
          src="https://telepadi.folha.uol.com.br/wp-content/uploads/2019/04/snow2.jpg"
      /></v-avatar>

      <div class="sidebar__sugestoes__text">
        <strong>jon_snow</strong>
        <p>Seguido por biancaveroneze_ e 3 outros utilizadores</p>
      </div>
      <a href="#">Seguir</a>
    </div>

    <div class="sidebar__sugestoes">
      <v-avatar color="pink" size="35" class="mr-4 mt-4"
        ><v-img
          src="https://observatoriodeseries.uol.com.br/wp-content/uploads/2019/05/game.jpg"
      /></v-avatar>

      <div class="sidebar__sugestoes__text">
        <strong>tyrion_lannister</strong>
        <p>Seguido por biancaveroneze_ e 3 outros utilizadores</p>
      </div>
      <a href="#">Seguir</a>
    </div>

    <div class="sidebar__sugestoes">
      <v-avatar color="pink" size="35" class="mr-4 mt-4"
        ><v-img
          src="https://conteudo.imguol.com.br/c/entretenimento/4c/2018/03/13/sean-bean-como-ned-stark-em-cena-de-game-of-thrones-1520969270150_v2_450x337.jpg"
      /></v-avatar>

      <div class="sidebar__sugestoes__text">
        <strong>ned__stark</strong>
        <p>Seguido por biancaveroneze_ e 3 outros utilizadores</p>
      </div>
      <a href="#">Seguir</a>
    </div>

    <div class="sidebar__sugestoes">
      <v-avatar color="pink" size="35" class="mr-4 mt-4"
        ><v-img
          src="https://static1.purebreak.com.br/articles/1/64/50/1/@/252793-em-game-of-thrones-khal-drogo-jason-amp_article_image-1.jpg"
      /></v-avatar>

      <div class="sidebar__sugestoes__text">
        <strong>khal__drogo</strong>
        <p>Seguido por biancaveroneze_ e 3 outros utilizadores</p>
      </div>
      <a href="#">Seguir</a>
    </div>

    <div class="sidebar__sugestoes">
      <v-avatar color="pink" size="35" class="mr-4 mt-4"
        ><v-img
          src="https://conteudo.imguol.com.br/2d/2016/10/19/charles-dance-o-tywin-lannister-de-game-of-thrones-1476919340374_615x300.jpg"
      /></v-avatar>

      <div class="sidebar__sugestoes__text">
        <strong>tywin_lannister</strong>
        <p>Seguido por biancaveroneze_ e 3 outros utilizadores</p>
      </div>
      <a href="#">Seguir</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 37%;
  padding: 110px 195px 0 0;
  box-sizing: border-box;

  text-align: left;

  &__avatar {
    display: flex;
    align-items: center;
    // width: 100%;
    margin-left: 10px;

    &__text {
      display: flex;
      flex-direction: column;
    }
    strong {
      font-size: 14px;
      font-weight: 600;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: #8e8e8e;
    }
  }

  &__subtitulos {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
    width: 72%;

    strong {
      font-size: 14px;
      font-weight: 500;
      color: #8e8e8e;
    }
    a {
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: black;
    }
  }

  &__sugestoes {
    width: 100%;
    display: flex;
    // align-items: center;

    &__text {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    strong {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      padding-top: 5px;
      color: #8e8e8e;
      margin: 0;
      width: 80%;
    }
    a {
      font-size: 12px;
      font-weight: 500;
      color: #0095f6;
      text-decoration: none;
      margin-top: 35px;
    }
  }
}
</style>
