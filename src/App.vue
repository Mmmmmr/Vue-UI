<template>
  <div id="app">
    <div class="box">
      <guluButton icon="setting" iconPostion="left" :loading="loading" @x="reserve">设置</guluButton>
      <guluButton icon="down" iconPostion="right">点我启动</guluButton>
      <guluButton icon="down" iconPostion="left">点我启动</guluButton>
    </div>

    <div class="box">
      <guluButtonGroup>
        <guluButton icon="left">前进</guluButton>
        <guluButton>更多</guluButton>
        <guluButton icon="right" iconPostion="right">后退</guluButton>
      </guluButtonGroup>
    </div>
  </div>
</template>

<script>
import guluButton from "../src/components/button/Button";
import guluButtonGroup from "../src/components/button/ButtonGroup";

export default {
  name: "app",
  components: {
    guluButton,
    guluButtonGroup
  },
  data: function() {
    return {
      loading: true
    };
  },
  methods: {
    reserve() {
      this.loading = !this.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin: 10px;
}
</style>
 