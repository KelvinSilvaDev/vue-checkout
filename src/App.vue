<template>
  <div id="app" class=" font-inter w-full  flex flex-col items-center justify-center align-middle content-center">
    <div class="max-w-[680px] flex flex-col justify-center align-middle items-center py-10 gap-4">

      <ProductCard />
      <div class="w-full rounded border border-[#B0B0B0] p-6">
        <CustomerForm />
      </div>
      <div class="w-full rounded border border-[#B0B0B0] p-6">

        <PaymentForm />
      </div>
      <p class=" font-segoe text-xs ">*OBS.: Taxa de 2.99% a.m.</p>
      <footer class=" mt-12">
        <p><a href="#" class="text-[#007BFF] font-segoe">Políticas de Privacidade</a>| Esta compra será processada pela
          PayT</p>
      </footer>
      <router-view />
    </div>
  </div>
</template>
<script>
import ProductCard from "./components/ProductCard.vue";
import PaymentForm from "./components/PaymentForm.vue";
import CustomerForm from "./components/CustomerForm.vue";

export default {
  components: {
    ProductCard,
    PaymentForm,
    CustomerForm,
  },
  created() {

    this.$on("InitiateCheckout", (data) => {
      console.log("InitiateCheckout", data);
      this.formData = data;

    });

    this.$on("AddToCart", (data) => {
      console.log("AddToCart", data);
      this.formData = data;

    });

    this.$on("AddressUpdated", (addressData) => {
      console.log("AddressUpdated", addressData);

      this.$store.commit("SET_ADDRESS_DATA", addressData);
    });


  },

};
</script>
