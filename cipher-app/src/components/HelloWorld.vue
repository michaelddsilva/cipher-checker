<template>
<div class="container">
  <h1>Cipher Checker App</h1>
  <div class="div1">
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
  <div class="div1">
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
  <div class="div1">
    <h2>Vigenère</h2>
    <p>Vigenère ciphers use a passphrase that maps a shift to each letter in the plain text.</p>
    <h3>Encrypter</h3>
    <label for="vigenerePlaintext">Plaintext</label>
    <input id="vigenerePlaintext" type="string" v-model="vigenerePlaintext" placeholder="input">
    <br/>
    <label for="vigenerePassphrase">Passphrase</label>
    <input id="vigenerePassphrase" type="string" v-model="vigenerePassphrase" placeholder="input">
    <p>Encryption is: {{ vigenereCipherEncrypt }}</p>

    <h3>Decrypter</h3>
    <label for="vigenereCipherText1">Plaintext</label>
    <input id="vigenereCipherText1" type="string" v-model="vigenereCipherText1" placeholder="input">
    <br/>
    <label for="vigenerePassphrase1">Passphrase</label>
    <input id="vigenerePassphrase1" type="string" v-model="vigenerePassphrase1" placeholder="input">
    <p>Plaintext is: {{ vigenereCipherDecryptBasic }}</p>
  </div>
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
      enigmaPlaintext: 'hello',
      vigenerePlaintext: "access",
      vigenerePassphrase: "secret",
      vigenereCipherText: "euzylleuitlvxtouwnfyoajcftzmzcftj",
      vigenerePassphrase1: "secret",
      vigenereCipherText1: "euzylleuitlvxtouwnfyoajcftzmzcftj",
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
      for (let i = 0; i < plainText.length; i++) {
        for (let j = (i+1); j < plainText.length - (1); j++){
          if (plainText[i] == plainText[j] && cipherText[i] == cipherText[j]){
            return ("No. Same letter reused at index pair " + i +"," + j +".");
          }
        }
      }
      return true;
    },
    vigenereEncrypt: function(plainText, passphrase) {
      var result = "";
      for (let i = 0; i < plainText.length; i++) {
        var sum = 0;
        if (i > passphrase.length - 1) {    
          sum = parseInt(plainText[i].charCodeAt()) + parseInt(passphrase[i - passphrase.length].charCodeAt()) - 97;
        } else  {
          sum = parseInt(plainText[i].charCodeAt()) + parseInt(passphrase[i].charCodeAt()) - 97;
        }
        if (sum < 97) sum += 26
        else if (sum > 122) sum -= 26
        result += String.fromCharCode(sum);
      }
      return result;
    },
    vigenereDecryptBasic: function(cipherText, passphrase) {
      var result = "";
      for (let i = 0; i < cipherText.length; i++) {
        var sum = 0;
        var index = i%passphrase.length;
        //console.log(i + ">" + word.length + "; index:" + index + ";")
        var cipherTextLetterCharCode = cipherText[i].charCodeAt();
        //console.log(i + " passphrase letter: " + word[i%word.length] + "; " + word);
        var passphraseLetterCharCode = passphrase[index].charCodeAt();
        //console.log("codes: " + cipherTextLetterCharCode + "," + passphraseLetterCharCode);
        sum = parseInt(cipherTextLetterCharCode) - parseInt(passphraseLetterCharCode) + 97;
        if (sum < 97) sum += 26
        else if (sum > 122) sum -= 26
        result += String.fromCharCode(sum);
      }
      return result;
    },
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
    },
    vigenereCipherEncrypt: function(){
      return this.vigenereEncrypt(this.vigenerePlaintext, this.vigenerePassphrase)
    },
    vigenereCipherDecryptBasic: function() {
      return this.vigenereDecryptBasic(this.vigenereCipherText1, this.vigenerePassphrase1)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  padding-top: 1em;
}

label {
  padding-right: 1em;
}

input {
  margin-left: 2em;
  margin-right: 1em;
}

</style>
