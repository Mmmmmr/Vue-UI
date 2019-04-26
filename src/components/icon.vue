<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name:'guluIcon',
  props: ['name']
};
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>


