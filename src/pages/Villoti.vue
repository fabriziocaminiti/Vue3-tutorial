<template>
  <section>
    <div class="w-full flex">
      <div class="m-auto">
        <ul>
          <h1 class="text-2xl text-center mb-5">Quelli di Polistena {{pezzotiCount}}</h1>
          <h2 class="mb-5">{{fullname}}</h2>
          <h3 class="mb-5">{{Nome}} {{Cognome}}</h3>
          <li v-for="(Pezzoto,i) in Pezzoti" :key="Pezzoto" class="flex justify-between">
            {{Pezzoto}}
            <input />
            <button v-on:click="remove(i)" class="border rounded-lg bg-red-500">X</button>
          </li>
          <!-- <input v-model.lazy="Campoto" /> -->
          <form @submit.prevent="addFighiolo" class="mt-8">
            <input
              v-model="Pezzoto"
              placeholder="figghiolo di villa"
              class="mr-5"
              ref="newPezzotoRef"
            />
            <button
              type="submit"
              class="bg-gradient-to-t from-yellow-500 to-blue-600 border rounded-lg"
            >Aggiungi villoto</button>
            <button
              @click="setfullname"
              class="ml-5 bg-gradient-to-t from-green-400 to-purple-600 border rounded-lg"
            >Il genio</button>
          </form>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
export default {
  setup() {
    const newPezzotoRef = ref("");
    const Pezzoto = ref("");
    const Pezzoti = ref([
      "Peppe Grio",
      "Fazio",
      "Erica",
      "Marzia",
      "Viki",
      "Simone"
    ]);
    onMounted(() => {
      newPezzotoRef.value.focus();
    });

    const pezzotiCount = computed({ get: () => Pezzoti.value.length });

    function addFighiolo() {
      if (Pezzoto.value !== "") {
        Pezzoti.value.unshift(Pezzoto.value);
        Pezzoto.value = "";
      }
    }
    function remove(index) {
      Pezzoti.value = Pezzoti.value.filter((Pezzoto, i) => i != index);
    }
    return {
      Pezzoti,
      Pezzoto,
      remove,
      addFighiolo,
      newPezzotoRef,
      pezzotiCount
    };
  },
  mounted() {
    this.$refs.newPezzotoRef.focus();
  },
  fullname: {
    get() {
      return `Il primo cittadino di villa è ${this.Nome} ${this.Cognome}`;
    },
    set(fullname) {
      const values = fullname.split(" ");
      this.Nome = values[0];
      this.Cognome = values[1];
    }
  },
  methods: {
    setfullname() {
      return (this.fullname = "Pippo Idone");
    }
  },
  data() {
    return {
      Nome: "Fabrizio",
      Cognome: "Caminiti",
      fullname: ""
    };
  }
};
</script>

<style>
</style>