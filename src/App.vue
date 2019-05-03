<template>
  <div id="app">
    <guluButton icon="setting" iconPostion="left" :loading="loading" @x="reserve">设置</guluButton>
    <guluButton icon="down" iconPostion="right">点我启动</guluButton>
    <guluButton icon="down" iconPostion="asdasdsad">点我启动</guluButton>

  </div>
</template>

<script>
import guluButton from "../src/components/button/button";

export default {
  name: "app",
  components: {
    guluButton
  },
  data: function(){
    return {
      loading: true
    }
  },
  methods: {
    reserve() {
      this.loading = !this.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
