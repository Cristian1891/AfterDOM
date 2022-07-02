import {infoPersonas, products} from "./data.js";

const textoDiv = document.getElementById("caja").innerHTML;
console.log(textoDiv);


document.getElementById("caja").innerHTML += "<h2>Empleados</h2>";



const info = document.getElementById("info");

info.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");

console.log(info);

infoPersonas.forEach(persona =>{
    const row = document.createElement('div');
    row.classList.add("col");
    row.innerHTML = `
    <div class="card h-100">
        <img src="img/${persona.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${persona.nombre}</h5>
        <p class="card-text">${persona.edad}</p>
        <p class="card-text">${persona.direccion}</p>
        <p class="card-text">${persona.oficio}</p>
    </div>
    `

    info.appendChild(row);
})

const navegacion = document.getElementById("lista");
const item = document.querySelector("#lista .nav-item");
navegacion.removeChild(item);

// const listaProductos = document.querySelectorAll("#tabla tbody");
// console.log(listaProductos);

products.map(prod =>{
    const listaProductos = document.querySelector("#tabla tbody");
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${prod.id}</td>
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td class="stock">${prod.stock}</td>
    `
    listaProductos.appendChild(fila);
})

const listaStock = document.querySelectorAll("tbody .stock");


for (let index = 0; index < listaStock.length; index++) {
    listaStock[index].innerHTML = 10;
    
}

const inputs = document.getElementsByTagName("input");
console.log(inputs);

for (let index = 0; index < inputs.length; index++) {
    if(index === 5){
        inputs[index].setAttribute("value", 1836);
    }
    else{
        inputs[index].setAttribute("value", "Hola");
    }
    
}