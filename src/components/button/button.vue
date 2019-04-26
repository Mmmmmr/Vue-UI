<template>
  <button class="gulu-button">
    <guluIcon :name="icon"></guluIcon>
    <guluIcon name="loading" class="loading" v-if="loading" @click="sonM"></guluIcon>
    <slot></slot>
  </button>
</template>

<script>
import guluIcon from "../icon";
export default {
  name: "guluButton",
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    guluIcon
  },
  methods: {
    sonM: function(){
      this.$emit('fatherMethod')
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.gulu-button {
  font-size: 14px;
  padding: 0 1em;
  line-height: 32px;
  border: 1px solid #999;
  border-radius: 4px;
  background-color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #333;
  &:hover {
    border-color: #666;
  }
  &:active {
    border-color: #eee;
  }
  &:focus {
    outline: none;
  }
  > .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
