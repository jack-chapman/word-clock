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
import { defineComponent } from 'vue';
import Letter from './components/Letter.vue';
import LetterList from './components/letterList';

export default defineComponent({
  name: 'app',
  components: {
    Letter,
  },
  data() {
    return {
      now: '',
      hours: 0,
      minutes: 0,
      intervalId: 0,
    };
  },
  computed: {
    list(): string[] {
      return LetterList;
    },
    roundedMinute(): number {
      return Math.floor(this.minutes / 5) * 5;
    },
    minuteIndexes(): number[] {
      switch (this.roundedMinute) {
        default:
        case 0:
          return [104, 105, 106, 107, 108, 109];
        case 5:
          return [28, 29, 30, 31, 44, 45, 46, 47];
        case 10:
          return [38, 39, 40, 44, 45, 46, 47];
        case 15:
          return [13, 14, 15, 16, 17, 18, 19, 44, 45, 46, 47];
        case 20:
          return [22, 23, 24, 25, 26, 27, 44, 45, 46, 47];
        case 25:
          return [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 44, 45, 46, 47];
        case 30:
          return [33, 34, 35, 36, 44, 45, 46, 47];
        case 35:
          return [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 42, 43];
        case 40:
          return [22, 23, 24, 25, 26, 27, 42, 43];
        case 45:
          return [13, 14, 15, 16, 17, 18, 19, 42, 43];
        case 50:
          return [38, 39, 40, 42, 43];
        case 55:
          return [28, 29, 30, 31, 42, 43];
      }
    },
    hourIndexes(): number[] {
      let hour =
        this.hours > 12 ? this.hours - 12 : this.hours === 0 ? 12 : this.hours;
      if (this.minutes >= 35) {
        hour < 12 ? hour++ : (hour = 1);
      }
      switch (hour) {
        default:
        case 1:
          return [55, 56, 57];
        case 2:
          return [74, 75, 76];
        case 3:
          return [61, 62, 63, 64, 65];
        case 4:
          return [66, 67, 68, 69];
        case 5:
          return [70, 71, 72, 73];
        case 6:
          return [58, 59, 60];
        case 7:
          return [88, 89, 90, 91, 92];
        case 8:
          return [77, 78, 79, 80, 81];
        case 9:
          return [51, 52, 53, 54];
        case 10:
          return [99, 100, 101];
        case 11:
          return [82, 83, 84, 85, 86, 87];
        case 12:
          return [93, 94, 95, 96, 97, 98];
      }
    },
    indexes(): number[] {
      return [0, 1, 3, 4, ...this.minuteIndexes, ...this.hourIndexes];
    },
  },
  mounted() {
    this.getCurrentTime();
    this.intervalId = setInterval(this.getCurrentTime, 1000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  methods: {
    getCurrentTime(): void {
      const d = new Date();
      this.now = d.toLocaleTimeString('en-GB');
      this.hours = d.getHours();
      this.minutes = d.getMinutes();
    },
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
}
</style>
