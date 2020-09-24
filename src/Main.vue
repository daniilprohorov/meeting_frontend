<template>
  <div id="main" style="max-width: 1400px; margin-left: auto; margin-right: auto">
      <div>
          <md-tabs md-dynamic-height router-link md-alignment="centered">
              <md-tab md-label="Result" to="/result"><Result/></md-tab>
              <md-tab md-label="Config" to="/config"><Config/></md-tab>
          </md-tabs>
      </div>
  </div>
</template>

<script>

import Result from './components/Pages/Result';
import Config from './components/Pages/Config';


export default {
  name: 'Main',
    components: {
        Result,
        Config
    }
}

</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

