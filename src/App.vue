<template>
<!--  <p :class="className">
    Привет, {{ world }} мир!
  </p>
  <button @click="changeWorld">
    Нажми меня!
  </button>

  <button @click="changeTextColor">
    Нажми меня, произойдет розовое чудо!
  </button>-->

  <button @click="changeWorld2">
<!--    Нажми, чтобы изменить мир!-->
    Перейти на главную
  </button>


<!--  <br/>
  <button @click="plusOne">
    +1
  </button>
  <button @click="minusOne">
    -1
  </button>
  <button @click="add10">
    *10
  </button>

  <input type="number" v-model="defaultNumber">

  <div :key="i" class="stars" v-for="i in parseInt(defaultNumber)">
    *
  </div>

  <p>
    {{numberOne}}
  </p>-->

  <router-view></router-view>

  <NewsEventForm></NewsEventForm>
</template>

<script>
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
    NewsEventForm
  },

  /*computed: {
    currentPath() {
      return this.$router.currentRoute._value.path;
    }
  },*/

  methods: {
    /*changeWorld() {
      this.world = "вообще " + this.world
    },

    changeTextColor() {
      this.className = "pinkText"
    },

    currentPath() {
      return this.$router.currentRoute._value.path;
    },*/

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

    /*plusOne() {
      this.defaultNumber = this.defaultNumber + 1
    },

    minusOne() {
      this.defaultNumber = this.defaultNumber - 1
    },

    add10() {
      this.defaultNumber = this.defaultNumber * 10
    },

    counterPlusOne() {
      this.$store.state.counter = this.$store.state.counter + 1
    }*/
  },
}
</script>

<style>
/*
.pinkText {
  color: pink;
}
*/

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