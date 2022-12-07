<template>
  <div>
    <img class="replace" :src="this.imageSrc"/>
  </div>
</template>

<script>
import axios from "axios";

const Base64 = require('js-base64').Base64;

const tokenServiceAPI = (tokenId) => axios(
  `https://0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03.1.w3link.io/tokenURI/${tokenId}`
);

export default {
  name: 'Home',
  computed: {
    tokenId() {
      return this.$route.params.tokenId;
    },
  },
  asyncComputed: {
    imageSrc : {
      async get() {
        if (!this.tokenId) {
          return "";
        }
        const response = await tokenServiceAPI(this.tokenId);
        const dataURI = response.data;
        if (!dataURI) {
          return "";
        }
        const value = Base64.decode(dataURI.substring(29));
        const result = JSON.parse(value);
        return result.image;
      },
      default: "",
      watch: ["tokenId"],
    },
  },
}
</script>
