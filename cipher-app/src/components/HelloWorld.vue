<template>
  <div class="div1">
    <h1>Cipher Checker App</h1>
    <h2>Caesar</h2>
    <p>Caesar ciphers apply a uniform shift to all letters in the word(s).</p>
    <h3>Encrypter</h3>
    <label for="caesarInput">Input</label>
    <input id="caesarInput" type="string" v-model="caesarInput" placeholder="input">
    <label for="caesarKey">Key</label>
    <input id="caesarKey" type="number" v-model="caesarKey" placeholder="0" max = 26 min = 0>
    <p>Encryption is: {{ caesarCipherEncrypt }}</p>
    <h3>Decrypter</h3>
    <label for="caesarDecryptInput">Input</label>
    <input id="caesarDecryptInput" type="string" v-model="caesarDecryptInput" placeholder="input">
    <label for="caesarDecryptKey">Key</label>
    <input id="caesarDecryptKey" type="number" v-model="caesarDecryptKey" placeholder="0" max = 26 min = 0>
    <p>Decryption is: {{ caesarCipherDecrypt }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      caesarInput: 'message',
      caesarKey: 0,
      caesarDecryptInput: "ifmmp",
      caesarDecryptKey: 0
    }
  },
  methods: {
    caesarEncrypt: function(message, key){
      var result = '';

      for (let i = 0; i < message.length; i++) {
        let charcode = (message[i].charCodeAt());
        var sum = parseInt(charcode) + parseInt(key);
        result += String.fromCharCode(sum);
      }
      return result;
    },
    caesarDecrypt: function(message, key){
      var result = '';

      for (let i = 0; i < message.length; i++) {
        let charcode = (message[i].charCodeAt());
        var sum = parseInt(charcode) - parseInt(key);
        result += String.fromCharCode(sum);
      }
      return result;
    }
  },
  computed: {
    caesarCipherEncrypt: function(){
      return this.caesarEncrypt(this.caesarInput, this.caesarKey);
    },
    caesarCipherDecrypt: function(){
      return this.caesarDecrypt(this.caesarDecryptInput, this.caesarDecryptKey);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  margin-left: 2em;
  margin-right: 1em;
}

</style>
