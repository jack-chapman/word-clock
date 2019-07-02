<template>
  <p :class="classes">{{character}}</p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'letter',
  props: {
    character: {
      type: String,
      required: true
    },
    isOn: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes(): object {
      return {
        on: this.isOn
      };
    }
  }
});
</script>

<style lang="scss" scoped>
p {
  transition: color 0.2s ease;
}
.on {
  color: coral;
}
</style>
