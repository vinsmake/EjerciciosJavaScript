
    let contador = 0;
    let costoTotal = 0;
    let totalEnProductos=0;
    // Arreglo global para almacenar la lista de compras
    let datos = [];

    let element = document.getElementById("totalPrecio");
    element.innerHTML="Total en precio";

    let txtNombre = document.getElementById("Name");
    //txtNombre.value="Leche Semidescremada";
    //console.log(txtNombre.value);
    let txtNumber = document.getElementById("Number");

    let total = document.getElementById("precioTotal");

    // let campos = document.getElementsByClassName("campo");
    // campos[0].value = "Leche descremada deslactosada light=Agua";
    // console.log( campos[0].value);
    // console.log(campos);

    // for (let i=0; i<campos.length; i++) {
    //     campos[i].style.border="red thin solid";
    // }//for i

    // let spans = document.getElementsByTagName("span");
    // for (let i=0; i<spans.length; i++) {
    //     console.log(spans[i].textContent);
    // }//for i

    let tabla = document.getElementById("tablaListaCompras");
    let cuerpoTabla = tabla.getElementsByTagName("tbody");

    // cuerpoTabla[0].innerHTML =  `<tr>
    // <th scope="row">1</th>
    // <td>Leche descremada</td>
    // <td>3</td>
    // <td>$ 23.00</td>
    // </tr> `;

    function validarNombre(){
        if (txtNombre.value.length <3) {
            return false;
        }//if
        return true;
    }// validarNombre

    function validarCantidad(){
        if(txtNumber.value.length==0) {
            return false;
        }// if
         if (isNaN(txtNumber.value)){
            return false;
         }//if

         if (parseFloat(txtNumber.value)<=0) {
            return false;
         }//if
         return true;
    }// validarCantidad

let agregar = document.getElementById("btnAgregar");
agregar.addEventListener ("click", (event)=> {
    event.preventDefault();
    if ( (! validarNombre()) || (! validarCantidad()) ) {
        let lista="";
        if(!validarNombre()) {
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un nombre válido</li>";
        }//
        if(!validarCantidad()) {
            txtNumber.style.border="red thin solid";
            lista+="<li>Se debe escribir una cantidad válida</li>";
        }//
        document.getElementById("alertValidacionesTexto").innerHTML=`
        Los campos deben ser llenados correctamente.
        <ul>${lista} </ul>
        `;
        document.getElementById("alertValidaciones").style.display="block";
        setTimeout (function(){
            document.getElementById("alertValidaciones").style.display="none";
        },
            5000
        );
        return false;
    }//if
    txtNumber.style.border="";
    txtNombre.style.border="";
    document.getElementById("alertValidaciones").style.display="none";
    contador++;
    document.getElementById("contadorProductos").innerHTML=contador;
    localStorage.setItem ("contadorProductos", contador);
    let precio =  (Math.floor( (Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += (cantidad<1)?Math.ceil(cantidad):parseInt(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos; 
    localStorage.setItem ("productosTotal", totalEnProductos);
    costoTotal += (precio * cantidad);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("precioTotal", costoTotal.toFixed(2));
     
    // JSON
    let elemento=`{"id":${contador}, 
        "nombre": "${txtNombre.value}", 
        "cantidad": ${txtNumber.value}, 
        "precio":${precio}
    }`;

    datos.push(JSON.parse(elemento));

    localStorage.setItem("elementosTabla",  JSON.stringify(datos) );

    console.log(datos);

    let tmp = `<tr>
     <th scope="row">${contador}</th>
     <td>${txtNombre.value}</td>
     <td>${txtNumber.value}</td>
     <td>$ ${precio}</td>
     </tr> `;
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value="";
    txtNombre.value="";
    txtNombre.focus();
    }
);
txtNombre.addEventListener("blur", (event)=> {
        event.target.value = event.target.value.trim();
   }
);
txtNumber.addEventListener("blur", (event)=> {
    event.target.value = event.target.value.trim();
    }
);
window.addEventListener("load", function() {
    if (localStorage.getItem ("contadorProductos")!=null)   {
        contador = parseInt(localStorage.getItem ("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML=contador;
    }//if  contadorProductos
     if (localStorage.getItem ("productosTotal")){
        totalEnProductos = parseInt(localStorage.getItem ("productosTotal"));
        document.getElementById("productosTotal").innerHTML = totalEnProductos; 
     } //if productosTotal
      if (localStorage.getItem ("precioTotal")){
        costoTotal = parseFloat(localStorage.getItem ("precioTotal"));
        total.innerHTML = costoTotal;
      }//if precioTotal

      if(localStorage.getItem("elementosTabla")!=null){
            datos= JSON.parse(localStorage.getItem("elementosTabla"));
            datos.forEach(element => {
                cuerpoTabla[0].innerHTML +=  `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.nombre}</td>
                <td>${element.cantidad}</td>
                <td>$ ${element.precio}</td>
                </tr> `;
            });
      }// if elementosTabla

    }
);

