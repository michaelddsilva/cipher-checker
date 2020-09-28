<template>
  <div class="div1">
    <h1>Cipher Checker App</h1>
    <h2>Caesar</h2>
    <p>Caesar ciphers apply a uniform shift to all letters in the word(s).</p>
    <label for="caesarInput">Input</label>
    <input id="caesarInput" type="string" v-model="caesarInput" placeholder="input">
    <label for="caesarKey">Key</label>
    <input id="caesarKey" type="number" v-model="caesarKey" placeholder="0" max = 26 min = 0>
    <p>Encryption is: {{ caesarCipherEncrypt }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      caesarInput: 'message',
      caesarKey: 0,
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
    }
  },
  computed: {
    caesarCipherEncrypt: function(){
      return this.caesarEncrypt(this.caesarInput, this.caesarKey);
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
