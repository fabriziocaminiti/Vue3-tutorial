<template>
  <div>
    <h1 class="text-center text-2xl mt-5 mb-5">COVID CALENDARIO</h1>
    <section class="mx-3 flex">
      <p class="ml-6 mb-4 font-bold">{{currentMonthName}}</p>
      <p class="ml-6 mb-4 font-bold">{{currentYear}}</p>
    </section>
    <section class="flex">
      <p
        v-for="(giorno) in giorni"
        :key="(giorno)"
        class="text-center mb-4"
        style="width:14.28%"
      >{{giorno}}</p>
    </section>
    <section class="flex flex-wrap">
      <p v-for="num in startDay()" :key="(num)" class="text-center" style="width:14.28%"></p>
      <p
        v-for="num in daysinMonth(currentYear , currentMonth)"
        :key="(num)"
        class="text-center"
        style="width:14.28%"
        :class="currentDateclass(num)"
      >{{num}}</p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded" @click="prev()">Prev</button>
      <button class="px-2 border rounded" @click="next()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      giorni: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
    };
  },
  methods: {
    daysinMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateclass(num) {
      const calendarfullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentfullDate = new Date().toDateString();
      return calendarfullDate === currentfullDate ? "text-red-600" : " ";
    }
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    }
  }
};
</script>

<style>
</style>