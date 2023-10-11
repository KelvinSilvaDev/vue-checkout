<template>
  <div>

    <div class="flex flex-col">
      <label for="fullName">Nome Completo:</label>
      <input class="rounded border border-[#B0B0B0] px-4 py-1" id="fullName" type="text" v-model="fullName"
        placeholder="Nome Completo" required @focus="emitInitiateCheckout" @input="handleAddToCart">
    </div>

    <div class="flex flex-col">
      <label for="email">E-mail:</label>
      <input class="rounded border border-[#B0B0B0] px-4 py-1" id="email" type="email" v-model="email"
        placeholder="E-mail" required @input="handleAddToCart">
    </div>

    <div class="flex justify-between">
      <div class="flex flex-col">
        <label for="phone">Telefone:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" id="phone" type="tel" v-model="phone"
          placeholder="Telefone" required @input="handleAddToCart">
      </div>

      <div class="flex flex-col">
        <label for="cep">CEP:</label>
        <input class="rounded border border-[#B0B0B0] px-4 py-1" id="cep" type="text" v-model="cep" placeholder="CEP"
          @blur="fetchAddress" required @input="emitCepInput">
      </div>
    </div>

    
    <address-form v-model="addressFormData"></address-form>



  </div>
</template>
  
<script>
import axios from "axios";
import AddressForm from "@/components/AddressForm.vue";

export default {
  components: {
    AddressForm,
  },
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      cep: "",
      number: "",
      addressFormData: {},
    };
  },
  props: {
    number: String, // Defina a propriedade "number"
  },
  methods: {
    emitInitiateCheckout() {
      // Atualize o estado do Vuex com os dados do cliente
      const customerData = {
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        cep: this.cep,
        // Outros campos de cliente, se houver
      };

      if (customerData.cep) {
        this.fetchAddress();
      }

      // Emitir evento para atualizar o estado do Vuex
      this.$store.commit("SET_CHECKOUT_DATA", customerData);

      // Emitir evento InitiateCheckout com os dados do formulário
      this.$emit("InitiateCheckout", customerData);
    },

    handleAddToCart() {
      if (this.fullName && (this.email || this.phone)) {
        // Emitir o evento "AddToCart" apenas se fullName estiver preenchido
        this.$emit("AddToCart", {
          fullName: this.fullName,
          email: this.email,
          phone: this.phone,
        });
      }
    },


    emitCepInput() {
      // Verifique se ambos os campos (CEP e número) estão preenchidos
      if (this.cep && this.$store.state.addressData.number) { // Acessando o valor do número do Vuex
        // Emita o evento "FillAddress" com os dados relevantes
        this.$emit("FillAddress", {
          ...this.$store.state.addressData,
          cep: this.cep,
        });
        this.$store.commit("SET_ADDRESS_DATA", {
          ...this.$store.state.addressData,
          cep: this.cep,
        });


        console.log("Evento FillAddress emitido com CEP e número:", this.$store.state.addressData);

        console.log("Evento FillAddress emitido com CEP e número:", this.cep, this.$store.state.addressData.number);
      } else {
        console.log("CEP ou número não preenchidos", "FillAddress", this.cep, this.$store.state.addressData.number);
      }
    },



    updateCep() {
      // Verifique se ambos os campos (CEP e número) estão preenchidos
      if (this.cep && this.number) {
        // Emita o evento "FillAddress" com os dados relevantes
        this.$emit("FillAddress", {
          cep: this.cep,
          number: this.number,
        });
        console.log("Evento FillAddress emitido com CEP e número:", this.cep, this.number);
      }
    },

    updateNumber() {
      // Atualize o estado do Vuex com o número quando o campo de número for preenchido
      this.$store.commit("SET_CHECKOUT_DATA", {
        ...this.$store.state.checkoutData,
        number: this.number,
      });

      // Emita o evento FillAddress
      this.$emit("FillAddress");
      console.log("Dados emitidos pelo evento FillAddress:", {
        cep: this.cep,
        number: this.number,
        // Outros dados relevantes que você deseja visualizar
      });
    },

    async fetchAddress() {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
        const data = response.data;

        // Atualize o estado do Vuex com os dados do endereço
        this.$store.commit("SET_CHECKOUT_DATA", {
          ...this.$store.state.checkoutData,
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          state: data.uf || "",
        });

        // Emita o evento FillAddress com os dados do endereço
        this.$emit("FillAddress", {
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          state: data.uf || "",
        });

        this.$store.commit("SET_ADDRESS_DATA", {
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        });

        // Marque os campos preenchidos pela API como "disabled"
        this.streetDisabled = true;
        this.neighborhoodDisabled = true;
        this.cityDisabled = true;
        this.stateDisabled = true;
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
      }
    },

    updateAddress() {
      // Atualize o estado do Vuex com os dados de endereço
      this.$store.commit("SET_CHECKOUT_DATA", {
        street: this.street || "",
        neighborhood: this.neighborhood || "",
        city: this.city || "",
        state: this.state || "",
      });

      // Emita o evento FillAddress com os dados de endereço
      this.$emit("FillAddress", {
        street: this.street || "",
        neighborhood: this.neighborhood || "",
        city: this.city || "",
        state: this.state || "",
      });

    },

  },
  created() {
    // Registrar ouvintes para os eventos
    this.$on("InitiateCheckout", (data) => {
      console.log("InitiateCheckout", data);
      this.formData = data;
      // Execute ações com base nos dados recebidos, se necessário
    });

    this.$on("AddToCart", (data) => {
      console.log("AddToCart", data);
      this.formData = data;
      // Execute ações com base nos dados recebidos, se necessário
    });

    // Registre ouvintes para outros eventos da mesma maneira
  },
};
</script>
  
<style scoped>
/* Estilos CSS específicos para este componente */
</style>
  