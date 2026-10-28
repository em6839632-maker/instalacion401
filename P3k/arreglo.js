let fallecidos = [];
let suma = 0;
let promedio = 0;
let maximo = 0;
let minimo = 0;

function cargar(){
    fallecidos = new Array(7);
    suma = 0;
    promedio = 0;
    for(let i = 0; i < fallecidos.length; i++){
        let valor = prompt("Captura las muertes por dia");
        fallecidos[i] = parseInt(valor);
        suma += fallecidos[i];
        console.log(fallecidos[i]);
    }
    console.log(suma);
    promedio = suma / 7;
    console.log(promedio);
    maximo = fallecidos[0];
    minimo = fallecidos[0];
    for(let i = 1; i < fallecidos.length; i++){
        if(fallecidos[i] > maximo){
            maximo = fallecidos[i];
        }
        if(fallecidos[i] < minimo){
            minimo = fallecidos[i];
        }
    }
}

function mostrar(){
    var kika = '<h1>Reporte de personas muertas</h1>';
    for(let j = 0; j < fallecidos.length; j++){
         kika += 'Día ' + (j + 1) + ': ' + fallecidos[j] + '<br>';
    }
    kika += '<br><strong>Promedio: </strong>' + promedio;
    kika += '<br><strong>Máximo: </strong>' + maximo;
    kika += '<br><strong>Mínimo: </strong>' + minimo;
    document.getElementById("promedio").innerHTML = kika;
}

function calcularSueldo() {
    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let hrs = parseInt(document.getElementById("hrs").value);
    let tarifaPorHora = 0;

    if (puesto == "0") {
        if (nivel == "0") tarifaPorHora = 120;
        else if (nivel == "1") tarifaPorHora = 120;
        else if (nivel == "2") tarifaPorHora = 240;
    } else if (puesto == "1") {
        if (nivel == "0") tarifaPorHora = 180;
        else if (nivel == "1") tarifaPorHora = 280;
        else if (nivel == "2") tarifaPorHora = 520;
    } else if (puesto == "2") {
        if (nivel == "0") tarifaPorHora = 240;
        else if (nivel == "1") tarifaPorHora = 340;
        else if (nivel == "2") tarifaPorHora = 890;
    }
    let total = tarifaPorHora * hrs;
    let mensaje = '<h4>Total a pagar: $' + total + '</h4>';
    mensaje += '<small>Tarifa por hora: $' + tarifaPorHora + ' x ' + hrs + ' hrs</small>';
    
    alert("El sueldo total es: $" + total);
}

let agenda = new Array(7);

for (let i = 0; i < 7; i++) {
    agenda[i] = new Array(3);
}

function guardarAgenda() {
    let dia = document.getElementById("dia").value;
    let hora = document.getElementById("hora").value;
    let evento = document.getElementById("evento").value;
    let descripcion = document.getElementById("descripcion").value;

    if (hora == "" || evento == "" || descripcion == "") {
        alert("Completa todos los campos");
        return;
    }

    agenda[dia][0] = hora;
    agenda[dia][1] = evento;
    agenda[dia][2] = descripcion;

    document.getElementById("hora" + dia).innerHTML = agenda[dia][0];
    document.getElementById("evento" + dia).innerHTML = agenda[dia][1];
    document.getElementById("descripcion" + dia).innerHTML = agenda[dia][2];
}