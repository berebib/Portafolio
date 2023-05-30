var btnEncriptar = document.querySelector(".btn-encript");
var btnDesencriptar = document.querySelector(".btn-desencript");
var imagenMuneco = document.querySelector(".container-muneco");
var contmensaje = document.querySelector(".container-mensaje");
var resultado = document.querySelector(".resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarInfo();
    var cajaText = recuperarTexto()
    resultado.textContent = encriptarTexto(cajaText);
}

function desencriptar() {
    ocultarInfo();
    var cajaTexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    var cajaTexto = document.querySelector(".caja-txt")
    return cajaTexto.value
}
function ocultarInfo() {
    imagenMuneco.classList.add("ocultar");
    contmensaje.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    
    var textFinal = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                textFinal += "ai"
                break;
            case 'e':
                textFinal += "enter"
                break;
            case 'i':
                textFinal += "imes"
                break;
            case 'o':
                textFinal += "ober"
                break;
            case 'u':
                textFinal += "ufat"
                break;
            default:
                textFinal += texto[i] 
        }
    }
    return textFinal;

}
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    
    var textFinal = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                textFinal += "a";
                i++;
                break;
            case 'e':
                textFinal += "e"
                i+=4;
                break;
            case 'i':
                textFinal += "i"
                i+=3;
                break;
            case 'o':
                textFinal += "o"
                i+=3;
                break;
            case 'u':
                textFinal += "u"
                i+=3;
                break;
            default:
                textFinal += texto[i] 
        }
    }
    return textFinal;

}

const btnCopiar=document.querySelector(".btn-copy")
btnCopiar.addEventListener("click", copiar=() =>{
    var contenido=document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("f");
})