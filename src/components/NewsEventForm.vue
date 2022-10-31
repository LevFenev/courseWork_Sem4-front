<template>
  <div class="news_event_form">
    <span>
      Мероприятия
    <input name="news_or_event" type="radio" value="showEventForm" v-model="chosenForm" checked="checked">
    </span>
    <br/>
    <span>
      Новости
    <input name="news_or_event" type="radio" value="showNewsForm" v-model="chosenForm">
    </span>

    <br/>

    <form @submit="publishEvent" class="form_event" v-if="chosenForm==='showEventForm'">
      <h2>Форма заполнения мероприятий</h2>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_heading'">
            {{ error.msg }}
          </span>
        </span>
        <input type="text" placeholder="Название мероприятия" v-model="event_heading">
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_text'">
            {{ error.msg }}
          </span>
        </span>
        <textarea placeholder="Описание мероприятия" v-model="event_text"></textarea>
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_date'">
            {{ error.msg }}
          </span>
        </span>
        <input type="date" v-model="event_date">
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_time'">
            {{ error.msg }}
          </span>
        </span>
        <input type="time" v-model="event_time"></label><br/> <!-- required  -->
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_location'">
            {{ error.msg }}
          </span>
        </span>
        <input type="text" placeholder="Введите адрес / локацию" v-model="event_location">
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='event_author'">
            {{ error.msg }}
          </span>
        </span>
        <input type="text" placeholder="Название организации / имя пользователя" v-model="event_author">
      </label>
      <br/>
      <label><input type="file"></label><br/>
      <label>
        <button>Опубликовать</button>
      </label>
    </form>

    <form @submit="publishNews" class="form_news" v-if="chosenForm==='showNewsForm'">
      <h2>Форма заполнения новостей</h2>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='news_heading'">
            {{ error.msg }}
          </span>
        </span>
        <input type="text" placeholder="Заголовок новости" v-model="news_heading">  <!-- required  -->
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='news_text'">
            {{ error.msg }}
          </span>
        </span>
        <textarea placeholder="Текст новости" v-model="news_text"></textarea> <!-- required  -->
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='news_date'">
            {{ error.msg }}
          </span>
        </span>
        <input type="date" v-model="news_date"> <!-- required  -->
      </label>
      <br/>
      <label>
        <span v-bind:key="error.msg" v-for="error in errors">
          <span style="color: red" v-if="error.field==='news_source'">
            {{ error.msg }}
          </span>
        </span>
        <input type="text" placeholder="Имя автора / название организации" v-model="news_source">
      </label>
      <br/>
      <label>
        <input type="file"></label> <!-- фоточка  -->
      <br/>
      <label>
        <button>Опубликовать</button>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsEventForm",
  data() {
    return {
      chosenForm: "showEventForm",
      errors: [],
      event_heading: "",
      event_text: "",
      event_author: "",
      event_date: "",
      event_time: "",
      event_location: "",
      news_heading: "",
      news_text: "",
      news_date: "",
      news_source: "",

      // numberOne: 1
    }
  },

  methods: {

    // plusOne() {
    //   this.numberOne = this.numberOne + 1
    // },

    publishEvent(event) {
      this.errors = [];
      if (this.event_heading.length === 0) {
        this.errors.push({"field": "event_heading", "msg": "Поле с названием не может пустовать."})
      } else if (this.event_heading.length < 5) {
        this.errors.push({"field": "event_heading", "msg": "Придумайте название длиннее - мин. 5 символов."});
      }

      if (this.event_text.length !== 0 && this.event_text.length < 5) {
        this.errors.push({
          "field": "event_text",
          "msg": "Придумайте описание длиннее - мин. 5 символов, либо не пишите его вообще."
        });
      }

      if (this.event_date.length === 0) {
        this.errors.push({"field": "event_date", "msg": "Поле с датой не может пустовать."})
      }

      if (this.event_time.length === 0) {
        this.errors.push({"field": "event_time", "msg": "Поле со временем не может пустовать."})
      }

      if (this.event_location.length === 0) {
        this.errors.push({"field": "event_location", "msg": "Поле с описанием локации не может пустовать."})
      } else if (this.event_location.length < 5) {
        this.errors.push({"field": "event_location", "msg": "Описание локации должно содержать в себе мин. 5 символов."});
      }

      if (this.event_author.length !== 0 && this.event_author.length <= 5) {
        this.errors.push({
          "field": "event_author",
          "msg": "Имя пользователя и/или название организации должно быть длиннее (мин. 5 символов), либо не занесено вообще."
        });
      }

      if (this.errors.length === 0) {
        event.preventDefault();
        this.$store.dispatch("SAVE_EVENT", {
          "id": 777,
          "event_heading": this.event_heading,
          "event_text": this.event_text,
          "event_date": this.event_date,
          "event_time": this.event_time,
          "event_location": this.event_location,
          "event_author": this.event_author
          // "event_photo": "/photo/event_4.jpg" // заглушка фотки
        })
      }
      event.preventDefault();
    },

    publishNews(event) {
      this.errors = [];
      if (this.news_heading.length === 0) {
        this.errors.push({"field": "news_heading", "msg": "Поле с заголовком не может пустовать."})
      } else if (this.news_heading.length < 5) {
        this.errors.push({"field": "news_heading", "msg": "Придумайте заголовок, содержащий в себе не менее 5 символов."});
      }

      if (this.news_text.length === 0) {
        this.errors.push({"field": "news_text", "msg": "Поле с текстом не может пустовать."})
      } else if (this.news_text.length < 10) {
        this.errors.push({"field": "news_text", "msg": "Минимальный объем текста для новости - 10 символов."});
      }

      if (this.news_date.length === 0) {
        this.errors.push({
          "field": "news_date",
          "msg": "Поле с датой не может пустовать."
        });
      }

      if (this.news_source.length === 0) {
        this.errors.push({"field": "news_source", "msg": "Поле с именем автора / названием источника не может пустовать."})
      } else if (this.news_source.length < 5) {
        this.errors.push({"field": "news_source", "msg": "Имя автора, название источника / газеты, т.д. должно быть длиннее - мин. 5 символов."});
      }

    //   this.$store.dispatch("SAVE_COMMENT", {
    //     "id": 999,
    //     "news_id": this.newsId,
    //     "comment_username": this.username,
    //     "comment_text": this.text,
    //     "comment_date": date.getFullYear() + "." + date.getMonth() + "." + date.getDay()
    //   })
    // }

      if (this.errors.length === 0) {
        event.preventDefault();
        // let date = new Date();
        this.$store.dispatch("SAVE_NEWS", {
          "id": 888,
          "news_heading": this.news_heading,
          "news_text": this.news_text,
          "news_date": this.date,
          "news_source": this.news_source
          // "news_photo": "/photo/news_7.jpg" // заглушка фотки
        })
      }
      event.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>