<template>
  <div class="m-auto">
    <h1 class="text-2xl text-green-600 font-serif text-center">Vue Calendar</h1>
    <hr />
    <section class="font-bold justify-between flex my-3 mx-4">
      <h1>{{ month }}</h1>
      <h1>{{ year }}</h1>
    </section>
    <section class="flex mt-3">
      <p class="h-10 text-center" style="width: 14.28%" v-for="day of days" :key="day">
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="h-8 text-center"
        style="width: 14.28%"
        v-for="date of startDay()"
        :key="date"
      ></p>

      <p
        class="h-8 text-center"
        style="width: 14.28%"
        v-for="date of daysInMonth()"
        :key="date"
        :class="currentDate(date)"
      >
        {{ date }}
      </p>
    </section>
    <section class="flex justify-between">
      <button class="px-2 border mx-3 my-2" @click="prev">Prev</button>
      <button class="px-2 border mx-3 my-2" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNumber: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
  },

  computed: {
    month: function () {
      return new Date(this.currentYear, this.monthNumber).toLocaleString("default", {
        month: "long",
      });
    },
    year: function () {
      return this.currentYear;
    },
  },

  methods: {
    daysInMonth() {
      let days = new Date(this.currentYear, this.monthNumber + 1, 0).getDate();
      return days;
    },

    startDay() {
      let day = new Date(this.currentYear, this.monthNumber, 1).getDay();
      return day;
    },

    prev() {
      if (this.monthNumber === 0) {
        this.monthNumber = 11;
        return this.currentYear--;
      } else {
        return this.monthNumber--;
      }
    },

    next() {
      if (this.monthNumber === 11) {
        this.monthNumber = 0;
        return this.currentYear++;
      } else {
        return this.monthNumber++;
      }
    },

    currentDate(date) {
      let cd = new Date(this.currentYear, this.monthNumber, date).toDateString();
      let other = new Date().toDateString();
      return cd == other ? "text-red-600 border" : "";
    },
  },
};
</script>
