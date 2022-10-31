<template>
  <div>Страница новости {{$route.params.id}}</div>
  <div :id="item.id" :key="item.id" class="news" v-for="item in $store.state.news">
    <div v-if="item.id === parseInt($route.params.id)">
      <div class="news_heading">
        <router-link to="/courseWork_Sem4-front/">{{item.news_heading}}</router-link>
      </div>
      <div class="news_text">
        {{ item.news_text }}
      </div>
      <div class="news_date">
        {{ item.news_date }}
      </div>
      <div class="news_source">
        {{ item.news_source }}
      </div>
      <div class="news_photo">
        <img :src="item.news_photo" alt="news photo" class="news_photo"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSingle"
}
</script>

<style scoped>

</style>
