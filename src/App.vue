<template>
  <p :class="className">
    Привет, {{ world }} мир!
  </p>
  <button @click="changeWorld">
    Нажми меня!
  </button>

  <button @click="changeTextColor">
    Нажми меня, произойдет розовое чудо!
  </button>

  <button @click="changeWorld2">
    Нажми, чтобы изменить мир!
  </button>

  <div class="events">
    <div :id="item.id" :key="item.id" class="event" v-for="item in eventsData">
      <div class="heading">
        {{ item.event_heading }}
      </div>
      <div class="text">
        {{ item.event_text }}
      </div>
      <div class="date">
        {{ item.event_date }}
      </div>
      <div class="time">
        {{ item.event_time }}
      </div>
      <div class="location">
        {{ item.event_location }}
      </div>
      <div class="author">
        {{ item.event_author }}
      </div>
      <div v-if="item.event_photo" class="photo">
        <img :src="item.event_photo" alt="photo" class="event_photo"/>
      </div>
    </div>
  </div>

  <div class="news">
    <div :id="item.id" :key="item.id" class="news" v-for="item in newsData">
      <div class="news_heading">
        {{ item.news_heading }}
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
        <div :id="com_data.id" :key="com_data.id" class="comments" v-for="com_data in commentsData">
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

  <newsEventForm></newsEventForm>
</template>

<script>
import newsEventForm from "@/components/NewsEventForm";
import CommentForm from "@/components/CommentForm";

export default {
  data() {
    return {
      world: "весь",
      className: "",
      eventsData: [],
      newsData: [],
      commentsData: []
    }
  },

  components: {
    CommentForm,
    newsEventForm
  },

  methods: {
    changeWorld() {
      this.world = "вообще " + this.world
    },

    changeTextColor() {
      this.className = "pinkText"
    },

    // сделать так, чтоб комментарии отображались у каждого ивента / новости

    changeWorld2() {
      let that = this;
      this.axios.get('events.json').then(function (response) {
        that.eventsData = response.data;
      })
      this.axios.get('news.json').then(function (response) {
        that.newsData = response.data;
      })
      this.axios.get('comments.json').then(function (response) {
        that.commentsData = response.data;
      })
    }
  }
}
</script>

<style>
.pinkText {
  color: pink;
}

.event, .news {
  width: 380px;
  border: 1px solid;
}

.event {
  background-color: purple;
}

.news {
  background-color: skyblue;
}

.news_photo {
  width: 380px;
}

.event_photo {
  width: 380px;
}
</style>