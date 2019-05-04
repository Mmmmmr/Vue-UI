<template>
  <div class="gulu-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
 .gulu-button-group {
    > .gulu-button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(first-child){
        margin-left: -1px;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }

    
 }
</style>
