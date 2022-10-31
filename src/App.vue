<template>
<!--  <p :class="className">-->
<!--    Привет, {{ world }} мир!-->
<!--  </p>-->
<!--  <button @click="changeWorld">-->
<!--    Нажми меня!-->
<!--  </button>-->

<!--  <button @click="changeTextColor">-->
<!--    Нажми меня, произойдет розовое чудо!-->
<!--  </button>-->

  <button @click="changeWorld2">
<!--    Нажми, чтобы изменить мир!-->
    Перейти на главную
  </button>


<!--  <br/>-->
<!--  <button @click="plusOne">-->
<!--    +1-->
<!--  </button>-->
<!--  <button @click="minusOne">-->
<!--    -1-->
<!--  </button>-->
<!--  <button @click="add10">-->
<!--    *10-->
<!--  </button>-->

<!--  <input type="number" v-model="defaultNumber">-->

<!--  <div :key="i" class="stars" v-for="i in parseInt(defaultNumber)">-->
<!--    *-->
<!--  </div>-->

<!--  <p>-->
<!--    {{numberOne}}-->
<!--  </p>-->


  <div class="events" v-if="currentPath === '/'">
    <div :id="item.id" :key="item.id" class="event" v-for="item in eventsData">
      <div class="events_heading">
        {{ item.event_heading }}
      </div>
      <div class="events_text">
        {{ item.event_text }}
      </div>
      <div class="events_date">
        {{ item.event_date }}
      </div>
      <div class="events_time">
        {{ item.event_time }}
      </div>
      <div class="events_location">
        {{ item.event_location }}
      </div>
      <div class="events_author">
        {{ item.event_author }}
      </div>
      <div v-if="item.event_photo" class="photo">
        <img :src="item.event_photo" alt="photo" class="event_photo"/>
      </div>
    </div>
  </div>

  <div class="news" v-if="currentPath === '/'">
    <div :id="item.id" :key="item.id" class="news" v-for="item in newsData">
      <div class="news_heading">
        <router-link :to="'/news/'+item.id">{{item.news_heading}}</router-link>
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
  {{currentPath}}
  <router-view></router-view>

  <NewsEventForm></NewsEventForm>
</template>

<script>
import CommentForm from "@/components/CommentForm";
import NewsEventForm from "@/components/NewsEventForm"; // было newsEventForm

export default {
  data() {
    return {
      world: "весь",
      className: "",
      eventsData: [],
      newsData: [],
      commentsData: [],

      // defaultNumber: 17
    }
  },

  components: {
    CommentForm,
    NewsEventForm
  },

  computed: {
    currentPath() {
      return this.$router.currentRoute._value.path;
    }
  },

  methods: {
    // changeWorld() {
    //   this.world = "вообще " + this.world
    // },

    // changeTextColor() {
    //   this.className = "pinkText"
    // },

    // currentPath() {
    //   return this.$router.currentRoute._value.path;
    // },

    changeWorld2() {
      console.log(this.$router)

      let that = this;
      this.$store.dispatch("INIT_COMMENT").then(() => {
        that.commentsData = this.$store.state.comments;
      })
      this.$store.dispatch("INIT_EVENTS").then(() => {
        that.eventsData = this.$store.state.events;
      })
      this.$store.dispatch("INIT_NEWS").then(() => {
        that.newsData = this.$store.state.news;
      })
    },

    // plusOne() {
    //   this.defaultNumber = this.defaultNumber + 1
    // },
    //
    // minusOne() {
    //   this.defaultNumber = this.defaultNumber - 1
    // },
    //
    // add10() {
    //   this.defaultNumber = this.defaultNumber * 10
    // },
    //
    // counterPlusOne() {
    //   this.$store.state.counter = this.$store.state.counter + 1
    // }
  },
}
</script>

<style>
.pinkText {
  color: pink;
}

.news_heading, .events_heading {
  font-weight: bold;
}

.news_source, .events_author {
  font-style: italic;
}

.event, .news {
  width: 380px;
  border: 1px solid;
}

.comments {
  border-top: 1px solid;
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