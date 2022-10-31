<template>
  <form @submit="addComment">
    <label><span v-bind:key="error.msg" v-for="error in errors"><span style="color: red"
                                                                      v-if="error.field==='username'">{{ error.msg }}</span></span>
      <span>Имя пользователя</span> <input type="text" name="comment_username" v-model="username"></label><br>
    <label><span v-bind:key="error.msg" v-for="error in errors"><span style="color: red"
                                                                      v-if="error.field==='text'">{{ error.msg }}</span></span>
      <textarea placeholder="Ваш комментарий" name="comment_text" v-model="text"></textarea></label><br>
    <label>
      <button>Отправить</button>
    </label>
    <input type="hidden" name="news_id" :value="newsId">
  </form>
</template>

<!--
Домашка "ПРОВЕРКИ"
1. Написать валидацию полей для этой формы
2. Для всех других форм
__________________________
3. есть 1 логическая ошибка, которая будет мешать пользователю. Нужно найти и поправить.

-->

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      errors: [],
      username: "",
      text: "",
      news_id: 0
    }
  },

  props: {
    newsId: Number
  },

  methods: {
    addComment(event) {
      this.errors = [];

      if (this.username.length === 0) {
        this.errors.push({"field": "username", "msg": "Поле с именем должно быть заполнено."});
      } else if (this.username.length <= 5) {
        this.errors.push({"field": "username", "msg": "Имя пользователя слишком короткое!"});
      }

      // console.log(this.username.match(/^[A-ZА-Я][-a-z0-9а-я]+$/))
      // if (!this.username.match(/^[A-ZА-Я][-a-z0-9а-я]+$/)) {
      //   this.errors.push({
      //     "field": "username",
      //     "msg": "При написании имени допускается использование русских и латинских наименований, а также использование некоторых доп. символов, например, дефиса. Имя должно начинаться с заглавной буквы!"
      //   });
      // }

      if (this.text.length === 0) {
        this.errors.push({"field": "text", "msg": "Введите комментарий."});
      } else if (this.text.length <= 5) {
        this.errors.push({"field": "text", "msg": "Мы советуем написать более длинный комментарий."});
      }

      if (this.errors.length === 0) {
        event.preventDefault();
        let date = new Date();
        this.$store.dispatch("SAVE_COMMENT", {
          "id": 999,
          "news_id": this.newsId,
          "comment_username": this.username,
          "comment_text": this.text,
          "comment_date": date.getFullYear() + "." + (date.getMonth() + 1) + "." +  date.getDate()
          // "comment_date": date.getFullYear() + "." + date.getMonth() + "." + date.getDay()
        })
      }
      event.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>