<template>
  <form @submit = "addComment">
    <label><span v-bind:key="error.msg" v-for="error in errors"><span style="color: red" v-if="error.field==='username'">{{error.msg}}</span></span><span>Имя пользователя</span> <input type="text" name="comment_username" v-model="username" required></label>
    <label><textarea type="text" placeholder="Ваш комментарий" name="comment_text" v-model="text" required></textarea></label><br>
    <label><button>Отправить</button></label>
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
  data(){
    return {
      errors: [],
      username: "",
      text: "",
      news_id: 0
    }
  },

  props:{
    newsId: Number
  },

  methods:{
    addComment(event){
      if(this.username.length <= 5){
        this.errors.push({"field": "username", "msg": "Имя пользователя слишком короткое!"});
      }
      if(this.errors.length === 0){
        return true;
      }
      event.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>