<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <label for="number">Número:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" id="number" type="text" v-model="number"
          placeholder="Número" required @input="handleNumberInput">
      </div>

      <div class="flex flex-col">
        <label for="complement">Complemento:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" id="cep" type="text" v-model="complement"
          placeholder="Complement" required>
      </div>
    </div>
    <div class="flex flex-col">
      <label for="fullName">Endereço</label>
      <input v-model="street" :disabled="streetDisabled" class="rounded border border-[#B0B0B0] px-4 py-1">
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <label for="fullName">Cidade:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" v-model="city" :disabled="cityDisabled">
      </div>
      <div class="flex flex-col">
        <label for="fullName">Estado:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" v-model="state" :disabled="stateDisabled">
      </div>
    </div>
    <label for="fullName">Bairro:</label>
    <input class="rounded border border-[#B0B0B0] px-4 py-1" v-model="neighborhood" :disabled="neighborhoodDisabled">
  </div>
</template>

    
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  props: ["formData"],
  computed: {
    ...mapState(["checkoutData", "addressData"]),
  },
  data() {
    return {
      number: "",
      complement: "",
      street: "",
      streetDisabled: true,
      neighborhood: "",
      neighborhoodDisabled: true,
      city: "",
      cityDisabled: true,
      state: "",
      stateDisabled: true,
    };
  },
  watch: {
    formData: {
      handler(newData) {

        this.number = newData.number || "";
        this.complement = newData.complement || "";
        this.street = newData.street || "";
        this.neighborhood = newData.neighborhood || "";
        this.city = newData.city || "";
        this.state = newData.state || "";


        this.streetDisabled = !!newData.street;
        this.neighborhoodDisabled = !!newData.neighborhood;
        this.cityDisabled = !!newData.city;
        this.stateDisabled = !!newData.state;
      },
      deep: true,
    },
    checkoutData: {
      handler(newData) {

        if (newData.street) {
          this.street = newData.street;
          this.streetDisabled = true;
        } else {
          this.street = "";
          this.streetDisabled = false;
        }

        if (newData.neighborhood) {
          this.neighborhood = newData.neighborhood;
          this.neighborhoodDisabled = true;
        } else {
          this.neighborhood = "";
          this.neighborhoodDisabled = false;
        }

        if (newData.city) {
          this.city = newData.city;
          this.cityDisabled = true;
        } else {
          this.city = "";
          this.cityDisabled = false;
        }

        if (newData.state) {
          this.state = newData.state;
          this.stateDisabled = true;
        } else {
          this.state = "";
          this.stateDisabled = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    async fetchAddress() {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
        const data = response.data;


        this.$store.commit("SET_ADDRESS_DATA", {
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          state: data.uf || "",
        });


        this.$emit("AddressUpdated", {
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          state: data.uf || "",
        });


        this.streetDisabled = true;
        this.neighborhoodDisabled = true;
        this.cityDisabled = true;
        this.stateDisabled = true;
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
      }
    },

    handleNumberInput() {

      this.$store.commit("SET_ADDRESS_DATA", {
        ...this.$store.state.addressData,
        number: this.number,
      });


      this.$emit("FillAddress", {
        number: this.number,
      });


      console.log("Evento FillAddress emitido com CEP e número:", this.$store.state.addressData.cep, this.number);

    }
  },
};
</script>
