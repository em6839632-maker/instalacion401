// Precios (puedes cambiarlos)
var precioNinoSol=280;
var precioAdultoSol=350;
var precioNinoSombra=380;
var precioAdultoSombra=580;

var pedido={
    cliente:'',
    RFC:'',
    listaSol:[],
    listaSombra:[],
    subtotal:0,
    iva:0,
    totalPagar:0,
    calcularTotal:function(){
        this.iva=this.subtotal*0.16;
        this.totalPagar=this.subtotal+this.iva;
    }
}

function agregarBoletos(tipo){
    var zona=document.getElementById("zona").value;
    var cantidad=0;
    var precio=0;
    var texto="";

    if(tipo=="nino"){
        cantidad=document.getElementById("ninos").value;
        texto=cantidad+" niño(s)";
        if(zona=="sol"){
            precio=precioNinoSol;
        }else{
            precio=precioNinoSombra;
        }
    }else{
        cantidad=document.getElementById("adultos").value;
        texto=cantidad+" adulto(s)";
        if(zona=="sol"){
            precio=precioAdultoSol;
        }else{
            precio=precioAdultoSombra;
        }
    }

    if(cantidad<=0){
        alert("Escribe una cantidad válida");
        return;
    }

    texto=texto+" x $"+precio+" = $"+(cantidad*precio);
    pedido.subtotal=pedido.subtotal+cantidad*precio;

    // Guardar en la lista de su zona
    if(zona=="sol"){
        pedido.listaSol.push(texto);
    }else{
        pedido.listaSombra.push(texto);
    }

    // Mostrar en "Boletos agregados"
    var listaB=document.getElementById("listaBoletos");
    var boletoLi=document.createElement("li");
    boletoLi.innerText="Zona "+zona+": "+texto;
    listaB.appendChild(boletoLi);

}

function procesarEnviar(){
    pedido.cliente=document.getElementById("cliente").value;
    pedido.RFC=document.getElementById("rfc").value;
    pedido.calcularTotal();
    localStorage.setItem("datosPedido", JSON.stringify(pedido));
    window.open("ticket.html", "_blank");
}
