<template>
  <div class="w-full max-w-[150px] font-medium relative">
    <div @click="toggleDropdown"
      class="bg-white w-full py-1 px-4 flex items-center justify-between rounded gap-3 border border-[#B0B0B0]"
      :class="{ 'text-gray-700': !selected }">
      {{ selected ? (selected.length > 25 ? selected.substring(0, 25) + '...' : selected) : 'Alterar país' }}


      <button class="cursor-pointer transition-all" :class="{ 'rotate-180': open }">v</button>
    </div>
    <ul class=" bg-white mt-2 overflow-y-auto absolute right-0 top-6" :class="{ 'max-h-60': open, 'max-h-0': !open }">
      <div class="flex items-center px-2 sticky top-0 bg-white">
        <input type="text" v-model="inputValue" placeholder="Enter country name"
          class="placeholder:text-gray-700 p-2 outline-none" />
      </div>
      <li v-for="country in filteredCountries" :key="country.name" class="p-2 text-sm" :class="{
        'hover:bg-sky-600 hover:text-white': country.name.toLowerCase() === selected.toLowerCase(),
        'block': country.name.toLowerCase().startsWith(inputValue),
        'hidden': !country.name.toLowerCase().startsWith(inputValue)
      }" @click="selectCountry(country.name)">
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>
  
<script>


export default {

  data() {
    return {
      countries: null,
      inputValue: "",
      selected: "",
      open: false,
    };
  },
  computed: {
    filteredCountries() {
      if (!this.countries) return [];
      return this.countries.filter((country) =>
        country.name.toLowerCase().startsWith(this.inputValue)
      );
    },
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectCountry(name) {
      if (name.toLowerCase() !== this.selected.toLowerCase()) {
        this.selected = name;
        this.open = false;
        this.inputValue = "";
      }
    },
  },
  mounted() {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        this.countries = data;
      });
  },
};
</script>
  