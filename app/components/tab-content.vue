<template>
  <div class="tab-content" v-show="tab.selected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['tab']
};
</script>
