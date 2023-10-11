<template>
    <div class="w-full">
        <div class="flex w-full justify-between items-start p-4 rounded rounded-b-none border border-[#B0B0B0]">
            <img src="@/assets/IMAGE.png" alt="Img">
            <div class="flex flex-col justify-center items-start w-full h-full pl-8 ">
                <h2 class="font-bold text-base">Nome do Produto</h2>
                <p class=" text-xl font-semibold text-primary ">R$ 50,00 / mês</p>
                <p class=" text-xs ">Plano mensal com renovação automática</p>
            </div>
            <Select />
        </div>
        <div class="bg-primary rounded rounded-t-none">
            <p class="text-white text-xs p-4">contatolivrediet@gmail.com</p>
        </div>
    </div>
</template>
<script>
import Select from "@/components/Select.vue";

export default {
    components: {
        Select,
    },
};
</script>