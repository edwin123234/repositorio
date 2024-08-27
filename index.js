function encriptar(){

let texto = document.getElementById"texto".value;
let tituloMensaje = mentById("titulo-mensaje");document.getEle
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");


let textoCifrado = texto
 .replace( /e/ gi,"enter")
  .replace(/i/ gi,"ime")
.replace(/o / gi,"ai")
 .replace(/a/ gi,"ober")
.replace(/u/ gi,"ufat")

if  ("texto").value.lengh !=0{
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado"
      
parrafo.textContent = "";
muñeco .src = "./img/encriptdo.jpg"
}else{
muñeco.src = "./img/ muñeco.png";
tituloMensaje.textContent=
parrafo.textContent="ingresar el texto que deseo encriptar o desencriptar"
    alert "Debes ingresar algun texto";


}
}