const senha = document.getElementById("senha");
const mostrar = document.getElementById("mostrar");

mostrar.onchange = function(e){
    senha.type = mostrar.checked ? "text" : "password";
}