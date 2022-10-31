<template>
  <EventsPage></EventsPage>
  <NewsPage></NewsPage>
</template>

<script>
import EventsPage from "@/components/EventsPage";
import NewsPage from "@/components/NewsPage";
export default {
  name: "MainPage",
  components: {NewsPage, EventsPage}
}
</script>

<style scoped>

</style>