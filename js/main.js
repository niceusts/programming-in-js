function clicou() {
    document.getElementById("agradecimento"). innerHTML = "<b>obrigado por clicar</b>"; //injeta o texto
    //console.log( document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}
function redirecionar() {
    //window.open("https://globoplay.globo.com/"); ABRE EM OUTRA JANELA
    //window.location.href = "https://globoplay.globo.com/"; ABRE NA MESMA
}

function trocar(element) {
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui";

}

/*function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("qual sua idade?");
console.log(validarIdade(idade));
*/
/*
var n1 = 10;
var n2 = 15;
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(n1, n2));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace("vai brasil", "só quero", "amem"));
alert(soma(3, 5));
*/
/*var d = new Date();
alert(d.getMinutes());
alert(d.getMonth());
alert(d.getDay());
alert(d.getSeconds());
*/
/*
for(var count = 0; count <=5; count++){
    alert(count);
}
*/
/*var count = 1;
while (count <= 5){
    console.log(count);
    count++;
}
*/
/*var idade = prompt("qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor);

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);

var lista = ["pera", "uva", "maça"];
lista.push("laranja");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var nome = "Niceu Biriba";
var idade = 20;
var idade2 = 18;
alert(idade + idade2);
var frase = "Eu nao tenho carro";
console.log(frase.replace("carro", "moto"));
console.log(idade);
console.log(idade2);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/