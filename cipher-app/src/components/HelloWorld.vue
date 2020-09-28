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

    <h2>Enigma</h2>
    <p>Enigma ciphers use random letter substitution, that does not repeat.</p>
    <p>Decryption is very complicated so this will just check if the plaintext is a possible decryption of the cyphertext</p>
    <label for="enigmaCipherText">Ciphertext</label>
    <input id="enigmaCipherText" type="string" v-model="enigmaCipherText" placeholder="input">
    <br/>
    <label for="enigmaPlaintext">Plaintext</label>
    <input id="enigmaPlaintext" type="string" v-model="enigmaPlaintext" placeholder="input">
    <p>Possible match? {{enigmaMatch}}</p>

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
      caesarDecryptKey: 0,
      enigmaCipherText: 'wassd',
      enigmaPlaintext: 'hello'
    }
  },
  methods: {
    caesarEncrypt: function(message, key){
      var result = '';

      for (let i = 0; i < message.length; i++) {
        let charcode = (message[i].charCodeAt());
        var sum = parseInt(charcode) + parseInt(key);
        if (sum > 122) sum -= 26
        result += String.fromCharCode(sum);
      }
      return result;
    },
    caesarDecrypt: function(message, key){
      var result = '';

      for (let i = 0; i < message.length; i++) {
        let charcode = (message[i].charCodeAt());
        var sum = parseInt(charcode) - parseInt(key);
        if (sum < 97) sum += 26
        result += String.fromCharCode(sum);
      }
      return result;
    },
    enigmaCheck: function(cipherText, plainText) {
      if (plainText.length != cipherText.length){

        return "No. Ciphertext and Plaintext are different lengths";
      }
      for (let i = 0; i < plainText.length; i++) {
        if (plainText[i] == cipherText[i]){
          return ("No. Same letter at index " + i + ".");
        } 
      }
      console.log("No same letters");
      for (let i = 0; i < plainText.length; i++) {
        for (let j = (i+1); j < plainText.length - (1); j++){
          console.log(i);
          if (plainText[i] == plainText[j] && cipherText[i] == cipherText[j]){
            console.log(plainText[i]+plainText[j]+","+cipherText[i]+cipherText[j])
            return ("No. Same letter reused.");
          }
        }
      }
      return true;
    }
  },
  computed: {
    caesarCipherEncrypt: function(){
      return this.caesarEncrypt(this.caesarInput, this.caesarKey);
    },
    caesarCipherDecrypt: function(){
      return this.caesarDecrypt(this.caesarDecryptInput, this.caesarDecryptKey);
    },
    enigmaMatch: function(){
      return this.enigmaCheck(this.enigmaCipherText, this.enigmaPlaintext);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  padding-right: 1em;
}

input {
  margin-left: 2em;
  margin-right: 1em;
}

</style>
