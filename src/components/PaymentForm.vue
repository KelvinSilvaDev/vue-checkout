<template>
  <div>
    <div class="w-full flex justify-center space-x-4">
      <button @click="activeTab = 'card'"
        :class="{ 'bg-[#e67a201a] text-[#8E939A] border-primary border': activeTab === 'card' }"
        class="px-4 py-2 rounded-lg flex items-center max-w-[125px] text-xs font-medium text-left gap-1">
        <svg width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45.1667 12.8333H1.83337M21.3334 21.5H10.5M1.83337 8.93333L1.83337 25.4C1.83337 27.8269 1.83337 29.0403 2.30568 29.9673C2.72113 30.7827 3.38405 31.4456 4.19941 31.861C5.12637 32.3333 6.33981 32.3333 8.76671 32.3333L38.2334 32.3333C40.6603 32.3333 41.8737 32.3333 42.8007 31.861C43.616 31.4456 44.279 30.7827 44.6944 29.9673C45.1667 29.0403 45.1667 27.8269 45.1667 25.4V8.93334C45.1667 6.50644 45.1667 5.293 44.6944 4.36604C44.279 3.55068 43.616 2.88776 42.8007 2.47231C41.8737 2 40.6603 2 38.2334 2L8.76671 2C6.33981 2 5.12637 2 4.19942 2.4723C3.38405 2.88776 2.72113 3.55067 2.30568 4.36604C1.83337 5.29299 1.83337 6.50644 1.83337 8.93333Z"
            stroke="#8E939A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        Cartão de Crédito
      </button>
      <button @click="activeTab = 'pix'"
        :class="{ 'bg-[#e67a201a] text-[#8E939A] border-primary border': activeTab === 'pix' }"
        class="px-4 py-2 rounded-lg flex items-center max-w-[125px] text-xs font-medium text-left gap-1">
        <svg width="62" height="37" viewBox="0 0 62 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_94)">
            <path
              d="M30.9523 27.7955C30.2091 27.798 29.4728 27.6616 28.7858 27.3942C28.0989 27.1268 27.4749 26.7337 26.95 26.2375L21.1687 20.7819C20.9642 20.5975 20.6922 20.4946 20.4093 20.4946C20.1263 20.4946 19.8543 20.5975 19.6498 20.7819L13.849 26.2525C13.3244 26.7494 12.7006 27.1433 12.0136 27.4115C11.3267 27.6797 10.5902 27.8169 9.84668 27.8151H8.71484L16.0406 34.7238C17.1394 35.7578 18.6281 36.3385 20.1803 36.3385C21.7325 36.3385 23.2213 35.7578 24.32 34.7238L31.6605 27.8001L30.9523 27.7955Z"
              fill="#8E939A" />
            <path
              d="M9.8479 8.51539C10.5914 8.51351 11.3279 8.65064 12.0149 8.91884C12.7019 9.18704 13.3257 9.58099 13.8502 10.0779L19.651 15.5497C19.8527 15.7392 20.1258 15.8457 20.4105 15.8457C20.6952 15.8457 20.9683 15.7392 21.1699 15.5497L26.95 10.0986C27.4741 9.60109 28.0978 9.20666 28.7848 8.93823C29.4719 8.66981 30.2086 8.53273 30.9523 8.53496H31.6483L24.3078 1.61238C23.7642 1.09957 23.1189 0.692777 22.4086 0.415237C21.6983 0.137698 20.937 -0.00515175 20.1681 -0.00515175C19.3993 -0.00515175 18.6379 0.137698 17.9276 0.415237C17.2174 0.692777 16.572 1.09957 16.0284 1.61238L8.71484 8.51539H9.8479Z"
              fill="#8E939A" />
            <path
              d="M37.7202 14.2623L33.2844 10.0791C33.1844 10.1176 33.0775 10.1379 32.9694 10.1389H30.9524C29.9028 10.1414 28.8966 10.5345 28.1527 11.2328L22.3726 16.6804C21.8521 17.1704 21.1467 17.4456 20.4112 17.4456C19.6757 17.4456 18.9702 17.1704 18.4497 16.6804L12.6476 11.2121C11.9039 10.5134 10.8978 10.1198 9.84797 10.1171H7.37185C7.26981 10.1149 7.16896 10.0958 7.07394 10.0606L2.61008 14.2623C1.5137 15.2985 0.897949 16.7025 0.897949 18.1664C0.897949 19.6302 1.5137 21.0342 2.61008 22.0704L7.06417 26.2709C7.15899 26.2351 7.25996 26.216 7.36208 26.2145H9.84797C10.8977 26.2116 11.9038 25.8181 12.6476 25.1195L18.4485 19.6489C19.4973 18.6609 21.3251 18.6609 22.3726 19.6489L28.1527 25.0987C28.8966 25.797 29.9028 26.1901 30.9524 26.1926H32.9694C33.0775 26.1933 33.1845 26.2137 33.2844 26.2525L37.7202 22.0692C38.264 21.5566 38.6953 20.948 38.9896 20.2781C39.2839 19.6083 39.4354 18.8903 39.4354 18.1652C39.4354 17.4401 39.2839 16.7221 38.9896 16.0523C38.6953 15.3824 38.264 14.7738 37.7202 14.2612"
              fill="#8E939A" />
            <path
              d="M44.3941 22.6667V13.9394H47.5049C48.1839 13.9394 48.7464 14.063 49.1924 14.3101C49.6384 14.5573 49.9722 14.8954 50.1938 15.3243C50.4154 15.7505 50.5262 16.2306 50.5262 16.7647C50.5262 17.3016 50.414 17.7846 50.1896 18.2135C49.968 18.6397 49.6327 18.9777 49.1839 19.2277C48.7379 19.4749 48.1768 19.5985 47.5006 19.5985H45.3614V18.482H47.3813C47.8103 18.482 48.1583 18.4081 48.4254 18.2604C48.6924 18.1098 48.8884 17.9053 49.0134 17.6468C49.1384 17.3883 49.2009 17.0942 49.2009 16.7647C49.2009 16.4351 49.1384 16.1425 49.0134 15.8868C48.8884 15.6312 48.691 15.4309 48.4211 15.286C48.1541 15.1411 47.8018 15.0687 47.3643 15.0687H45.7109V22.6667H44.3941ZM51.9676 22.6667V16.1212H53.2418V22.6667H51.9676ZM52.6111 15.1113C52.3895 15.1113 52.1992 15.0374 52.0401 14.8897C51.8838 14.7391 51.8057 14.5601 51.8057 14.3527C51.8057 14.1425 51.8838 13.9635 52.0401 13.8158C52.1992 13.6652 52.3895 13.59 52.6111 13.59C52.8327 13.59 53.0216 13.6652 53.1778 13.8158C53.3369 13.9635 53.4165 14.1425 53.4165 14.3527C53.4165 14.5601 53.3369 14.7391 53.1778 14.8897C53.0216 15.0374 52.8327 15.1113 52.6111 15.1113ZM55.9616 16.1212L57.4062 18.6695L58.8636 16.1212H60.257L58.2158 19.3939L60.2741 22.6667H58.8806L57.4062 20.2206L55.936 22.6667H54.5383L56.5752 19.3939L54.5639 16.1212H55.9616Z"
              fill="#8E939A" />
          </g>
          <defs>
            <clipPath id="clip0_1_94">
              <rect width="60.5374" height="36.3436" fill="white" transform="translate(0.897949 -0.00515175)" />
            </clipPath>
          </defs>
        </svg>

      </button>
      <button @click="activeTab = 'boleto'"
        :class="{ 'bg-[#e67a201a] text-[#8E939A] border-primary border': activeTab === 'boleto' }"
        class="px-4 py-2 rounded-lg flex items-center max-w-[125px] text-xs font-medium text-left gap-1">
        <svg width="97" height="39" viewBox="0 0 97 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.16663 4H5.4532V34.3333H4.16663V4ZM6.73977 4H8.02635V34.3333H6.73977V4ZM14.4647 4H15.7512V34.3333H14.4647V4ZM39.5078 4H40.7943V34.3333H39.5078V4ZM47.8801 4H49.1666V34.3333H47.8801V4ZM22.9599 4H24.2465V34.3333H22.9599V4ZM10.086 4H12.4023V34.3333H10.086V4ZM25.3746 4H27.691V34.3333H25.3746V4ZM36.1097 4H38.4261V34.3333H36.1097V4ZM41.6056 4H43.922V34.3333H41.6056V4ZM17.0378 4H21.6706V34.3333H17.0378V4ZM29.0458 4H32.6488V34.3333H29.0458V4Z"
            fill="#8E939A" />
          <path
            d="M56.1254 23.6667V14.9394H59.3215C59.9408 14.9394 60.4536 15.0417 60.8598 15.2462C61.2661 15.4479 61.57 15.7221 61.7717 16.0687C61.9734 16.4124 62.0743 16.8002 62.0743 17.232C62.0743 17.5956 62.0075 17.9025 61.874 18.1525C61.7405 18.3996 61.5615 18.5985 61.3371 18.7491C61.1155 18.8968 60.8712 19.0047 60.6041 19.0729V19.1581C60.8939 19.1723 61.1766 19.2661 61.4521 19.4394C61.7305 19.6098 61.9607 19.8527 62.1425 20.1681C62.3243 20.4834 62.4152 20.867 62.4152 21.3187C62.4152 21.7647 62.3101 22.1652 62.0999 22.5204C61.8925 22.8726 61.5715 23.1525 61.1368 23.3598C60.7021 23.5644 60.1467 23.6667 59.4706 23.6667H56.1254ZM57.4422 22.5374H59.3428C59.9734 22.5374 60.4251 22.4152 60.6979 22.1709C60.9706 21.9266 61.107 21.6212 61.107 21.2547C61.107 20.9792 61.0374 20.7263 60.8982 20.4962C60.759 20.2661 60.5601 20.0829 60.3016 19.9465C60.0459 19.8101 59.7419 19.742 59.3896 19.742H57.4422V22.5374ZM57.4422 18.715H59.2064C59.5019 18.715 59.7675 18.6581 60.0033 18.5445C60.2419 18.4309 60.4308 18.2718 60.57 18.0672C60.7121 17.8598 60.7831 17.6155 60.7831 17.3343C60.7831 16.9735 60.6567 16.6709 60.4038 16.4266C60.151 16.1823 59.7632 16.0601 59.2405 16.0601H57.4422V18.715ZM66.6318 23.7988C66.0182 23.7988 65.4827 23.6581 65.0253 23.3769C64.5679 23.0956 64.2128 22.7022 63.9599 22.1965C63.7071 21.6908 63.5807 21.0999 63.5807 20.4238C63.5807 19.7448 63.7071 19.151 63.9599 18.6425C64.2128 18.134 64.5679 17.7391 65.0253 17.4579C65.4827 17.1766 66.0182 17.036 66.6318 17.036C67.2455 17.036 67.781 17.1766 68.2384 17.4579C68.6957 17.7391 69.0509 18.134 69.3037 18.6425C69.5565 19.151 69.683 19.7448 69.683 20.4238C69.683 21.0999 69.5565 21.6908 69.3037 22.1965C69.0509 22.7022 68.6957 23.0956 68.2384 23.3769C67.781 23.6581 67.2455 23.7988 66.6318 23.7988ZM66.6361 22.7292C67.0338 22.7292 67.3634 22.6241 67.6247 22.4138C67.8861 22.2036 68.0793 21.9238 68.2043 21.5743C68.3321 21.2249 68.396 20.84 68.396 20.4195C68.396 20.0019 68.3321 19.6184 68.2043 19.2689C68.0793 18.9167 67.8861 18.634 67.6247 18.4209C67.3634 18.2079 67.0338 18.1013 66.6361 18.1013C66.2355 18.1013 65.9031 18.2079 65.6389 18.4209C65.3776 18.634 65.183 18.9167 65.0551 19.2689C64.9301 19.6184 64.8676 20.0019 64.8676 20.4195C64.8676 20.84 64.9301 21.2249 65.0551 21.5743C65.183 21.9238 65.3776 22.2036 65.6389 22.4138C65.9031 22.6241 66.2355 22.7292 66.6361 22.7292ZM72.3793 14.9394V23.6667H71.1052V14.9394H72.3793ZM76.9145 23.7988C76.2696 23.7988 75.7142 23.661 75.2483 23.3854C74.7852 23.107 74.4273 22.7164 74.1744 22.2135C73.9244 21.7079 73.7994 21.1155 73.7994 20.4366C73.7994 19.7661 73.9244 19.1752 74.1744 18.6638C74.4273 18.1525 74.7796 17.7533 75.2313 17.4664C75.6858 17.1795 76.2171 17.036 76.825 17.036C77.1943 17.036 77.5523 17.0971 77.8989 17.2192C78.2455 17.3414 78.5565 17.5331 78.8321 17.7945C79.1077 18.0559 79.325 18.3954 79.4841 18.813C79.6432 19.2277 79.7227 19.732 79.7227 20.3258V20.7775H74.5196V19.8229H78.4742C78.4742 19.4877 78.406 19.1908 78.2696 18.9323C78.1332 18.6709 77.9415 18.465 77.6943 18.3144C77.45 18.1638 77.1631 18.0885 76.8335 18.0885C76.4756 18.0885 76.1631 18.1766 75.896 18.3527C75.6318 18.526 75.4273 18.7533 75.2824 19.0346C75.1403 19.313 75.0693 19.6155 75.0693 19.9422V20.688C75.0693 21.1255 75.146 21.4976 75.2994 21.8045C75.4557 22.1113 75.673 22.3456 75.9514 22.5076C76.2298 22.6667 76.5551 22.7462 76.9273 22.7462C77.1688 22.7462 77.3889 22.7121 77.5878 22.6439C77.7867 22.5729 77.9585 22.4678 78.1034 22.3286C78.2483 22.1894 78.3591 22.0175 78.4358 21.813L79.6418 22.0303C79.5452 22.3854 79.3719 22.6965 79.1219 22.9635C78.8747 23.2277 78.5636 23.4337 78.1886 23.5814C77.8165 23.7263 77.3918 23.7988 76.9145 23.7988ZM84.1918 17.1212V18.1439H80.6166V17.1212H84.1918ZM81.5754 15.553H82.8495V21.7448C82.8495 21.992 82.8864 22.178 82.9603 22.303C83.0342 22.4252 83.1293 22.509 83.2458 22.5545C83.3651 22.5971 83.4944 22.6184 83.6336 22.6184C83.7359 22.6184 83.8254 22.6113 83.9021 22.5971C83.9788 22.5829 84.0384 22.5715 84.081 22.563L84.3112 23.6155C84.2373 23.6439 84.1322 23.6723 83.9958 23.7008C83.8595 23.732 83.689 23.7491 83.4845 23.7519C83.1492 23.7576 82.8367 23.6979 82.547 23.5729C82.2572 23.4479 82.0228 23.2547 81.8438 22.9934C81.6649 22.732 81.5754 22.4039 81.5754 22.009V15.553ZM88.2881 23.7988C87.6744 23.7988 87.1389 23.6581 86.6815 23.3769C86.2242 23.0956 85.869 22.7022 85.6162 22.1965C85.3634 21.6908 85.2369 21.0999 85.2369 20.4238C85.2369 19.7448 85.3634 19.151 85.6162 18.6425C85.869 18.134 86.2242 17.7391 86.6815 17.4579C87.1389 17.1766 87.6744 17.036 88.2881 17.036C88.9017 17.036 89.4372 17.1766 89.8946 17.4579C90.352 17.7391 90.7071 18.134 90.9599 18.6425C91.2128 19.151 91.3392 19.7448 91.3392 20.4238C91.3392 21.0999 91.2128 21.6908 90.9599 22.1965C90.7071 22.7022 90.352 23.0956 89.8946 23.3769C89.4372 23.6581 88.9017 23.7988 88.2881 23.7988ZM88.2923 22.7292C88.6901 22.7292 89.0196 22.6241 89.281 22.4138C89.5423 22.2036 89.7355 21.9238 89.8605 21.5743C89.9884 21.2249 90.0523 20.84 90.0523 20.4195C90.0523 20.0019 89.9884 19.6184 89.8605 19.2689C89.7355 18.9167 89.5423 18.634 89.281 18.4209C89.0196 18.2079 88.6901 18.1013 88.2923 18.1013C87.8918 18.1013 87.5594 18.2079 87.2952 18.4209C87.0338 18.634 86.8392 18.9167 86.7114 19.2689C86.5864 19.6184 86.5239 20.0019 86.5239 20.4195C86.5239 20.84 86.5864 21.2249 86.7114 21.5743C86.8392 21.9238 87.0338 22.2036 87.2952 22.4138C87.5594 22.6241 87.8918 22.7292 88.2923 22.7292Z"
            fill="#8E939A" />
        </svg>

      </button>
    </div>

    <div v-if="activeTab === 'card'" class="mt-4">

      <div class="flex gap-8">
        <div class="flex flex-col w-1/2">
          <label for="creditCardNumber">Número do Cartão de Crédito</label>
          <input id="creditCardNumber" v-model="paymentData.creditCardNumber" placeholder="Digite somente os números"
            @input="formatCreditCardNumber" required class="rounded border border-[#B0B0B0] px-4 py-1"
            @blur="validateCreditCard">

          <label for="creditCardHolderName">Nome do Titular:</label>
          <input id="creditCardHolderName" type="text" v-model="paymentData.creditCardHolderName"
            placeholder="Digite o nome impresso no cartão" required class="rounded border border-[#B0B0B0] px-4 py-1"
            @input="handlePaymentInput">

          <label for="holderDocument">CPF/CNPJ do Titular:</label>
          <input id="holderDocument" type="text" v-model="paymentData.holderDocument"
            placeholder="Para emissão da nota fiscal" required class="rounded border border-[#B0B0B0] px-4 py-1"
            @input="handlePaymentInput">

          <div class="w-full flex items-center content-center gap-4">
            <div class="flex flex-col justify-between w-full items-start">
              <label for="creditCardExpirationDate">Validade:</label>
              <div class="flex justify-between w-full items-center">
                <select name="creditCardExpirationMonth" id="month" v-model="paymentData.creditCardExpirationMonth"
                  required class="rounded border border-[#B0B0B0] px-4 py-1 max-h-10" @input="handlePaymentInput">
                  <option value="" disabled selected>Mês</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="creditCardExpirationYear" id="year" v-model="paymentData.creditCardExpirationYear" required
                  class="rounded border border-[#B0B0B0] px-4 py-1 max-h-10" @input="handlePaymentInput">
                  <option value="" disabled selected>Ano</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col w-1/3">
              <label for="creditCardCvv">CVV</label>
              <input id="creditCardCvv" type="text" v-model="paymentData.creditCardCvv" placeholder="CVV" required
                class="rounded border border-[#B0B0B0] px-4 py-1" @input="handlePaymentInput">
            </div>
          </div>

          <div class="flex flex-col">
            <label for="instalments">Número de parcelas</label>
            <select name="instalments" id="instalments" class="rounded border border-[#B0B0B0] px-4 py-1"
              @input="handlePaymentInput">
              <option value="1">1x de R$50,00</option>

            </select>
          </div>

          <span class="error-message">{{ paymentData.creditCardError }}</span>
        </div>

        <div class="flex flex-col justify-center relative">
          <img src="@/assets/card.png" alt="Card" class="relative">

          <span v-if="paymentData.creditCardBrand === 'visa'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm">
            <img src="@/assets/visa.png" alt="Card Brand">
          </span>
          <span v-if="paymentData.creditCardBrand === 'visa'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>

          <span v-if="paymentData.creditCardBrand === 'mastercard'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm"><img src="@/assets/mastercard.png"
              alt="Card Brand"></span>
          <span v-if="paymentData.creditCardBrand === 'mastercard'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>

          <span v-if="paymentData.creditCardBrand === 'diners'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm"><img src="@/assets/dinners.png"
              alt="Card Brand"></span>
          <span v-if="paymentData.creditCardBrand === 'diners'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>

          <span v-if="paymentData.creditCardBrand === 'elo'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm"><img src="@/assets/elo.png"
              alt="Card Brand"></span>
          <span v-if="paymentData.creditCardBrand === 'elo'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>

          <span v-if="paymentData.creditCardBrand === 'hipercard'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm"><img src="@/assets/hipercard.png"
              alt="Card Brand"></span>
          <span v-if="paymentData.creditCardBrand === 'hipercard'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>

          <span v-if="paymentData.creditCardBrand === 'amex'"
            class="absolute top-[77px] right-[26px] w-[72px] bg-white p-1 rounded-sm"><img src="@/assets/amex.png"
              alt="Card Brand"></span>
          <span v-if="paymentData.creditCardBrand === 'amex'" class="absolute top-[126px] left-[26px] text-white">{{
            paymentData.creditCardNumber }}</span>
          <span v-if="paymentData.creditCardBrand === 'Desconhecido'">Bandeira Desconhecida</span>
          <span v-if="paymentData.creditCardHolderName !== ''"
            class="absolute left-[26px] bottom-16 text-white max-w-[124px] truncate">{{ paymentData.creditCardHolderName
            }}</span>
          <div>
            <span v-if="paymentData.creditCardExpirationMonth !== ''"
              class="absolute right-20 bottom-16 text-white max-w-[124px]">{{ paymentData.creditCardExpirationMonth }} /
            </span>
            <span v-if="paymentData.creditCardExpirationYear !== ''"
              class="absolute right-16  bottom-16 text-white max-w-[124px]">{{ paymentData.creditCardExpirationYear
              }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'pix'" class="mt-4">

      <PixComponent />
    </div>

    <div v-if="activeTab === 'boleto'" class="mt-4">

      <BoletoComponent />
    </div>
    <div class="w-full flex flex-col py-8 gap-2">
      <p class=" text-sm">Detalhes da compra</p>
      <div class="w-full flex justify-between">
        <h2 class=" text-xs font-bold">Nome do produto</h2>
        <p class="text-xs text-[#303133]">R$ 50,00 / mês</p>
      </div>
      <div class="w-full flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path
            d="M2 10.3333H22V8.53325C22 7.41315 22 6.8531 21.782 6.42527C21.5903 6.04895 21.2843 5.74299 20.908 5.55124C20.4802 5.33325 19.9201 5.33325 18.8 5.33325H5.2C4.0799 5.33325 3.51984 5.33325 3.09202 5.55124C2.7157 5.74299 2.40973 6.04895 2.21799 6.42527C2 6.85309 2 7.41315 2 8.53325V16.1333C2 17.2534 2 17.8134 2.21799 18.2412C2.40973 18.6176 2.71569 18.9235 3.09202 19.1153C3.51984 19.3333 4.0799 19.3333 5.2 19.3333H11M14.5 21.3333L16.525 20.9283C16.7015 20.8929 16.7898 20.8753 16.8721 20.843C16.9452 20.8143 17.0147 20.7772 17.079 20.7323C17.1516 20.6817 17.2152 20.618 17.3426 20.4907L21.5 16.3333C22.0523 15.781 22.0523 14.8855 21.5 14.3333C20.9477 13.781 20.0523 13.781 19.5 14.3333L15.3426 18.4907C15.2152 18.618 15.1516 18.6817 15.101 18.7542C15.0561 18.8186 15.0189 18.888 14.9903 18.9611C14.958 19.0434 14.9403 19.1317 14.905 19.3083L14.5 21.3333Z"
            stroke="#CED4DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class=" text-[10px]">Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto</p>
      </div>
      <div>
        <button class=" py-4 px-8 bg-primary text-white rounded-sm">Comprar</button>
      </div>
    </div>
    <img src="@/assets/secure environment.png" alt="" class="max-w-[210px] mx-auto">
  </div>
</template>

<script>
import cardRegex from "@/utils/cardRegex";
import PixComponent from "./PixComponent.vue";
import BoletoComponent from "./BoletoComponent.vue";

export default {
  components: {
    PixComponent,
    BoletoComponent,
  },
  data() {
    return {
      activeTab: 'card', 
      paymentData: {
        paymentType: "", 
        creditCardNumber: "",
        formattedCreditCardNumber: "",
        creditCardError: "",
        creditCardBrand: "",
        creditCardExpirationMonth: "",
        creditCardExpirationYear: "",
        creditCardExpirationDate: "",
        holderDocument: "",
        creditCardHolderName: "",
        creditCardCvv: "",
        instalments: "",
      },
    };
  },
  methods: {
    handlePaymentInput() {
      
      this.paymentData.paymentType = this.detectPaymentType(this.paymentData.creditCardNumber);

      
      if (this.paymentData.paymentType === 'Cartão de Crédito') {
        this.paymentData.creditCardExpirationDate =
          `${this.paymentData.creditCardExpirationMonth}/${this.paymentData.creditCardExpirationYear}`;
      
      } else if (this.paymentData.paymentType === 'PIX') {
      
        this.paymentData.holderDocument = "";  
        this.paymentData.creditCardExpirationDate = "";  
      } else if (this.paymentData.paymentType === 'Boleto') {
        
        this.paymentData.holderDocument = "";  
        this.paymentData.creditCardExpirationDate = "";  
      }


      this.$root.$emit('AddPaymentInfo', this.paymentData);
    },



    detectPaymentType(paymentInfo) {
      const cleanedNumber = paymentInfo.replace(/\s/g, "");

      const cardRegex = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-9]{2})|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      };

      for (const brand in cardRegex) {
        if (cardRegex[brand].test(cleanedNumber)) {
          this.paymentData.creditCardBrand = brand;
          return 'Cartão de Crédito'; 
        }
      }

      
      

      return 'Desconhecido'; 
    },

    formatCreditCardNumber() {
      
      let formattedNumber = this.paymentData.creditCardNumber.replace(/\D/g, '');

      
      formattedNumber = formattedNumber.slice(0, 16);

      
      formattedNumber = formattedNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

      
      this.paymentData.creditCardNumber = formattedNumber;

      this.handlePaymentInput();
    },

    validateCreditCard() {
      this.paymentData.creditCardError = "";

      const cleanedNumber = this.paymentData.creditCardNumber.replace(/\s/g, "");

      const cardRegex = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        amex: /^3[47][0-9]{13}$/,
        hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      };

      let isValid = false;

      for (const brand in cardRegex) {
        if (cardRegex[brand].test(cleanedNumber)) {
          isValid = true;
          this.paymentData.creditCardBrand = brand;
          break;
        }
      }

      if (!isValid) {
        this.paymentData.creditCardError = "Número de cartão inválido";
      }

      this.handlePaymentInput();
    },
    addPaymentInfo() {
      
      this.$root.$emit('AddPaymentInfo', this.paymentData);
    },
    purchase() {
      
      this.$root.$emit('PurchaseSuccess');
    },
    purchaseFail() {
      
      this.$root.$emit('PurchaseFail');
    },

  },
}
</script>


