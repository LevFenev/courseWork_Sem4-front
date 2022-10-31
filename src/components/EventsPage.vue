<template>
  <div class="events">
    <div :id="item.id" :key="item.id" class="event" v-for="item in $store.state.events">
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
</template>

<script>
export default {
  name: "EventsPage"
}
</script>

<style scoped>

</style>