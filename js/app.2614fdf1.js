(function(e){function t(t){for(var a,s,p=t[0],o=t[1],c=t[2],u=0,v=[];u<p.length;u++)s=p[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,p=1;p<r.length;p++){var o=r[p];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],o=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"1add":function(e,t,r){"use strict";var a=r("d48b"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Cipher Checker App")]),r("div",{staticClass:"div1"},[r("h2",[e._v("Caesar")]),r("p",[e._v("Caesar ciphers apply a uniform shift to all letters in the word(s).")]),r("h3",[e._v("Encrypter")]),r("label",{attrs:{for:"caesarInput"}},[e._v("Input")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.caesarInput,expression:"caesarInput"}],attrs:{id:"caesarInput",type:"string",placeholder:"input"},domProps:{value:e.caesarInput},on:{input:function(t){t.target.composing||(e.caesarInput=t.target.value)}}}),r("label",{attrs:{for:"caesarKey"}},[e._v("Key")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.caesarKey,expression:"caesarKey"}],attrs:{id:"caesarKey",type:"number",placeholder:"0",max:"26",min:"0"},domProps:{value:e.caesarKey},on:{input:function(t){t.target.composing||(e.caesarKey=t.target.value)}}}),r("p",[e._v("Encryption is: "+e._s(e.caesarCipherEncrypt))]),r("h3",[e._v("Decrypter")]),r("label",{attrs:{for:"caesarDecryptInput"}},[e._v("Input")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.caesarDecryptInput,expression:"caesarDecryptInput"}],attrs:{id:"caesarDecryptInput",type:"string",placeholder:"input"},domProps:{value:e.caesarDecryptInput},on:{input:function(t){t.target.composing||(e.caesarDecryptInput=t.target.value)}}}),r("label",{attrs:{for:"caesarDecryptKey"}},[e._v("Key")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.caesarDecryptKey,expression:"caesarDecryptKey"}],attrs:{id:"caesarDecryptKey",type:"number",placeholder:"0",max:"26",min:"0"},domProps:{value:e.caesarDecryptKey},on:{input:function(t){t.target.composing||(e.caesarDecryptKey=t.target.value)}}}),r("p",[e._v("Decryption is: "+e._s(e.caesarCipherDecrypt))])]),r("div",{staticClass:"div1"},[r("h2",[e._v("Enigma")]),r("p",[e._v("Enigma ciphers use random letter substitution, that does not repeat.")]),r("p",[e._v("Decryption is very complicated so this will just check if the plaintext is a possible decryption of the cyphertext")]),r("label",{attrs:{for:"enigmaCipherText"}},[e._v("Ciphertext")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enigmaCipherText,expression:"enigmaCipherText"}],attrs:{id:"enigmaCipherText",type:"string",placeholder:"input"},domProps:{value:e.enigmaCipherText},on:{input:function(t){t.target.composing||(e.enigmaCipherText=t.target.value)}}}),r("br"),r("label",{attrs:{for:"enigmaPlaintext"}},[e._v("Plaintext")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enigmaPlaintext,expression:"enigmaPlaintext"}],attrs:{id:"enigmaPlaintext",type:"string",placeholder:"input"},domProps:{value:e.enigmaPlaintext},on:{input:function(t){t.target.composing||(e.enigmaPlaintext=t.target.value)}}}),r("p",[e._v("Possible match? "+e._s(e.enigmaMatch))])]),r("div",{staticClass:"div1"},[r("h2",[e._v("Vigenère")]),r("p",[e._v("Vigenère ciphers use a passphrase that maps a shift to each letter in the plain text.")]),r("h3",[e._v("Encrypter")]),r("label",{attrs:{for:"vigenerePlaintext"}},[e._v("Plaintext")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vigenerePlaintext,expression:"vigenerePlaintext"}],attrs:{id:"vigenerePlaintext",type:"string",placeholder:"input"},domProps:{value:e.vigenerePlaintext},on:{input:function(t){t.target.composing||(e.vigenerePlaintext=t.target.value)}}}),r("br"),r("label",{attrs:{for:"vigenerePassphrase"}},[e._v("Passphrase")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vigenerePassphrase,expression:"vigenerePassphrase"}],attrs:{id:"vigenerePassphrase",type:"string",placeholder:"input"},domProps:{value:e.vigenerePassphrase},on:{input:function(t){t.target.composing||(e.vigenerePassphrase=t.target.value)}}}),r("p",[e._v("Encryption is: "+e._s(e.vigenereCipherEncrypt))]),r("h3",[e._v("Decrypter")]),r("label",{attrs:{for:"vigenereCipherText1"}},[e._v("Plaintext")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vigenereCipherText1,expression:"vigenereCipherText1"}],attrs:{id:"vigenereCipherText1",type:"string",placeholder:"input"},domProps:{value:e.vigenereCipherText1},on:{input:function(t){t.target.composing||(e.vigenereCipherText1=t.target.value)}}}),r("br"),r("label",{attrs:{for:"vigenerePassphrase1"}},[e._v("Passphrase")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vigenerePassphrase1,expression:"vigenerePassphrase1"}],attrs:{id:"vigenerePassphrase1",type:"string",placeholder:"input"},domProps:{value:e.vigenerePassphrase1},on:{input:function(t){t.target.composing||(e.vigenerePassphrase1=t.target.value)}}}),r("p",[e._v("Plaintext is: "+e._s(e.vigenereCipherDecryptBasic))])])])},p=[],o={name:"HelloWorld",data:function(){return{caesarInput:"message",caesarKey:0,caesarDecryptInput:"ifmmp",caesarDecryptKey:0,enigmaCipherText:"wassd",enigmaPlaintext:"hello",vigenerePlaintext:"access",vigenerePassphrase:"secret",vigenereCipherText:"euzylleuitlvxtouwnfyoajcftzmzcftj",vigenerePassphrase1:"secret",vigenereCipherText1:"euzylleuitlvxtouwnfyoajcftzmzcftj"}},methods:{caesarEncrypt:function(e,t){for(var r="",a=0;a<e.length;a++){var n=e[a].charCodeAt(),i=parseInt(n)+parseInt(t);i>122&&(i-=26),r+=String.fromCharCode(i)}return r},caesarDecrypt:function(e,t){for(var r="",a=0;a<e.length;a++){var n=e[a].charCodeAt(),i=parseInt(n)-parseInt(t);i<97&&(i+=26),r+=String.fromCharCode(i)}return r},enigmaCheck:function(e,t){if(t.length!=e.length)return"No. Ciphertext and Plaintext are different lengths";for(var r=0;r<t.length;r++)if(t[r]==e[r])return"No. Same letter at index "+r+".";for(var a=0;a<t.length;a++)for(var n=a+1;n<t.length-1;n++)if(t[a]==t[n]&&e[a]==e[n])return"No. Same letter reused at index pair "+a+","+n+".";return!0},vigenereEncrypt:function(e,t){for(var r="",a=0;a<e.length;a++){var n=0;n=a>t.length-1?parseInt(e[a].charCodeAt())+parseInt(t[a-t.length].charCodeAt())-97:parseInt(e[a].charCodeAt())+parseInt(t[a].charCodeAt())-97,n<97?n+=26:n>122&&(n-=26),r+=String.fromCharCode(n)}return r},vigenereDecryptBasic:function(e,t){for(var r="",a=0;a<e.length;a++){var n=0,i=a%t.length,s=e[a].charCodeAt(),p=t[i].charCodeAt();n=parseInt(s)-parseInt(p)+97,n<97?n+=26:n>122&&(n-=26),r+=String.fromCharCode(n)}return r}},computed:{caesarCipherEncrypt:function(){return this.caesarEncrypt(this.caesarInput,this.caesarKey)},caesarCipherDecrypt:function(){return this.caesarDecrypt(this.caesarDecryptInput,this.caesarDecryptKey)},enigmaMatch:function(){return this.enigmaCheck(this.enigmaCipherText,this.enigmaPlaintext)},vigenereCipherEncrypt:function(){return this.vigenereEncrypt(this.vigenerePlaintext,this.vigenerePassphrase)},vigenereCipherDecryptBasic:function(){return this.vigenereDecryptBasic(this.vigenereCipherText1,this.vigenerePassphrase1)}}},c=o,l=(r("1add"),r("2877")),u=Object(l["a"])(c,s,p,!1,null,"4ef35f28",null),v=u.exports,h={name:"App",components:{HelloWorld:v}},g=h,d=(r("034f"),Object(l["a"])(g,n,i,!1,null,null,null)),m=d.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},d48b:function(e,t,r){}});
//# sourceMappingURL=app.2614fdf1.js.map