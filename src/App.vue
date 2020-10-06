<template>
  <div id="app">
    <div class="container">
      <letter
        v-for="(l, index) in list"
        :key="index"
        :character="l"
        :isOn="indexes.includes(index)"
      />
    </div>
    <div class="time">
      <p>{{ now }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Letter from './components/Letter.vue';
import list from './helpers/letterList';
import { useIndexes } from './helpers/indexes';
import { useTime } from './helpers/time';

export default defineComponent({
  name: 'app',
  components: {
    Letter,
  },
  setup() {
    const { now, hours, minutes } = useTime();

    const roundedMinute = computed(() => {
      return Math.floor(minutes.value / 5) * 5;
    });

    const { indexes } = useIndexes(roundedMinute, hours);

    return {
      now,
      list,
      indexes,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background: #2c3e50;
  }
}

.container {
  display: grid;
  grid-template: repeat(10, 20px) / repeat(11, 20px);
}

.time {
  margin-top: 20px;
  p {
    margin: 0;
  }
}
</style>
