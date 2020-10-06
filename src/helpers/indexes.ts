import { computed, ComputedRef, Ref } from 'vue';

export const useIndexes = (mins: ComputedRef<number>, hours: Ref<number>) => {
  const minuteIndexes = computed(() => {
    switch (mins.value) {
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
  });

  const hourIndexes = computed(() => {
    let hour =
      hours.value > 12
        ? hours.value - 12
        : hours.value === 0
        ? 12
        : hours.value;
    if (mins.value >= 35) {
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
  });

  const indexes = computed(() => {
    return [0, 1, 3, 4, ...minuteIndexes.value, ...hourIndexes.value];
  });

  return {
    indexes,
  };
};
