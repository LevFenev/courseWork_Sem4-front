<template>
  <div class="news">
    <div :id="item.id" :key="item.id" class="news" v-for="item in $store.state.news">
      <div class="news_heading">
        <router-link :to="'/courseWork_Sem4-front/news/'+item.id">{{item.news_heading}}</router-link>
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
      <CommentForm :newsId="item.id"></CommentForm>


      <div class="comments">
        <div :id="com_data.id" :key="com_data.id" class="comments" v-for="com_data in $store.state.comments">
          <div class="news_comment" v-if="com_data.news_id == item.id">
            <div class="comment_username">
              {{ com_data.comment_username }}
            </div>
            <div class="comment_text">
              {{ com_data.comment_text }}
            </div>
            <div class="comment_date">
              {{ com_data.comment_date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm";

export default {
  name: "NewsPage",
  components: {CommentForm}
}
</script>

<style scoped>

</style>
