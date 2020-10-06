<template>
  <p :class="classes">{{ character }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface LetterClasses {
  on: boolean;
}

export default defineComponent({
  name: 'letter',
  props: {
    character: {
      type: String,
      required: true,
    },
    isOn: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    classes(): LetterClasses {
      return {
        on: this.isOn,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  transition: color 0.2s ease;
  margin: 0;
}
.on {
  color: coral;
}
</style>
