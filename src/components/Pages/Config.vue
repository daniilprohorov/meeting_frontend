<template>
  <div id="config">
      <DayOfWeekTabs></DayOfWeekTabs>
  </div>
</template>

<script>
import DayOfWeekTabs from "@/components/DayOfWeekTabs";

export default {
  name: 'Config',
  components: {
    DayOfWeekTabs,
  },
  data: () => {
      return {
          globalConfig: Object
      }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

