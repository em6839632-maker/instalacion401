window.onload=function(){
    var datosGuardados=localStorage.getItem("datosPedido");
    var pedidoRecuperado=JSON.parse(datosGuardados);

    document.getElementById("salidaCliente").innerText=pedidoRecuperado.cliente;
    document.getElementById("salidaRFC").innerText=pedidoRecuperado.RFC;
    document.getElementById("salidaSubtotal").innerText="$"+pedidoRecuperado.subtotal.toFixed(2);
    document.getElementById("salidaIVA").innerText="$"+pedidoRecuperado.iva.toFixed(2);
    document.getElementById("salidaTotal").innerText="$"+pedidoRecuperado.totalPagar.toFixed(2);

    var listaSol=document.getElementById("listaSol");
    listaSol.innerHTML='';
    for(let i=0;i<pedidoRecuperado.listaSol.length;i++){
        var solLi=document.createElement("li");
        solLi.innerText=pedidoRecuperado.listaSol[i];
        listaSol.appendChild(solLi);
    }

    var listaSombra=document.getElementById("listaSombra");
    listaSombra.innerHTML='';
    for(let i=0;i<pedidoRecuperado.listaSombra.length;i++){
        var sombraLi=document.createElement("li");
        sombraLi.innerText=pedidoRecuperado.listaSombra[i];
        listaSombra.appendChild(sombraLi);
    }
}
 