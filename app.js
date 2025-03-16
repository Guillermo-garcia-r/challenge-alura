let amigos = [];
let indice = [];
let ulLista = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
document.querySelector('#amigo').focus();

function limpiar(){
    document.querySelector('#amigo').value  = '';
    document.querySelector('#amigo').focus();
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo.length == 0){
        alert('Por favor, inserte un nombre.')
        limpiar();
    }else{
        amigos.push(amigo);
        ulLista.innerHTML += `<li>${amigo}</li>`;
        limpiar();
    }    
}

function amigoAleatorio(){
    let Maximo = amigos.length;
    let i = Math.floor(Math.random()*Maximo);
    if(indice.length == Maximo){
        alert('No hay más amigos disponibles');
        document.querySelector('#sorteo').setAttribute('disabled','true');
    }
    else{
        if(indice.includes(i)){
            return amigoAleatorio();
        }
        else{
            indice.push(i);
            return amigos[i];
        }
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('Agrega el nombre de tu amigo');
    }else{
        let nombreAmigo = amigoAleatorio();
        ulResultado.innerHTML+=`<li>${nombreAmigo}</li>`;
    }
}