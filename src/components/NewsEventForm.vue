<template>
  <div class="news_event_form">
    <input name="news_or_event" type="radio" value="showEventForm" v-model="chosenForm" checked="checked">
    <input name="news_or_event" type="radio" value="showNewsForm" v-model="chosenForm">

    <form action="submit" class="form_news" v-if="chosenForm==='showNewsForm'">
      <h2>Форма заполнения новостей</h2>
      <label><input type="text" placeholder="Заголовок новости" required></label><br>
      <label><textarea type="text" placeholder="Текст новости" required></textarea></label><br>
      <label><input type="date" required></label><br>
      <label><input type="text" placeholder="Имя автора / название организации" required></label><br>
      <label><input type="file" required></label>
    </form>

    <form action="submit" class="form_event" v-if="chosenForm==='showEventForm'">
      <h2>Форма заполнения мероприятий</h2>
      <label><input type="text" placeholder="Название мероприятия" required></label><br>
      <label><textarea type="text" placeholder="Описание мероприятия"></textarea></label><br>
      <label><input type="date" required></label><br>
      <label><input type="time" required></label><br>
      <label><input type="text" placeholder="Введите адрес / локацию" required></label><br>
      <label><input type="text" placeholder="Название организации / имя пользователя"></label><br>
      <label><input type="file"></label><br>
      <label><span>Комментарии</span> <input type="checkbox"></label>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsEventForm",
  data(){
    return {
      chosenForm: "showEventForm"
    }
  }
}
</script>

<style scoped>

</style>