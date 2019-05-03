<template>
  <button class="gulu-button" :class="{[`icon-${iconPostion}`]: true}" @click="$emit('x')">
    <guluIcon :name="icon" class="icon" v-if="!loading && icon"></guluIcon>
    <guluIcon name="loading"  class="loading icon" v-if="loading" ></guluIcon>
    <div class="gulu-button-content">
      <slot></slot>
    </div>
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
    },
    iconPostion: {
      type: String,
      default: 'left',
      validator: function(value){
        return value === 'left' || value === 'right'
      }
    }
  },
  components: {
    guluIcon
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
  vertical-align: middle;
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
  > .icon {
    order: 1;
  }
  > .gulu-button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
    }
    > .gulu-button-content {
      order: 1;
    }
  }
}
</style>
