import { onMounted, onUnmounted, ref } from "vue";

export const useTime = () => {
  const now = ref("");
  const hours = ref(0);
  const minutes = ref(0);

  const getCurrentTime = () => {
    const d = new Date();
    now.value = d.toLocaleTimeString("en-GB");
    hours.value = d.getHours();
    minutes.value = d.getMinutes();
  };

  const intervalId = ref(0);
  onMounted(() => {
    getCurrentTime();
    intervalId.value = window.setInterval(getCurrentTime, 1000);
  });
  onUnmounted(() => {
    clearInterval(intervalId.value);
  });

  return {
    now,
    hours,
    minutes,
  };
};
