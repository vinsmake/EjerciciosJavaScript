
let btnquote = document.getElementById("btnquote");


btnquote.addEventListener("click", function (e){
    e.preventDefault();
    let hours = parseInt(document.getElementById("inputhours").value);
    let rate = parseFloat(document.getElementById("inputrate").value);
    let cardtext = document.getElementById("cardtext");
    let iva = document.getElementById("checkiva").checked;
    let extras = document.getElementById("inputextras");
/*     console.log(extras.selectedIndex); */ /* funciona por numero de opcion, puedes ver en la consola */
/*     console.log(extras.options[extras.selectedIndex].value);
    console.log(iva); */
   /*  cardtext.innerHTML += "Hours: "  + hours
    + "<br> Rate: $" + rate 
    + "<hr>" 
    + "<br>Mano de obra: $" + price(hours, rate)
    + "<br>" + "hosting: $" + year(extras.selectedIndex)
    + "<hr>" 
    + "<br> IVA: $" + fiva(hours, rate, iva)
    + "<br> Total: $" + quote(hours, rate, iva, extras.selectedIndex).toFixed(2); */
    cardtext.innerHTML += "Hours: "  + hours
    + "<br> Rate: $" + rate 
    + "<hr>" 
    + "<br>Mano de obra: $" + price(hours, rate)
    + "<br>" + "hosting: $" + year(extras)
    + "<hr>" 
    + "<br> IVA: $" + fiva(hours, rate, iva)
    + "<br> Total: $" + quote(hours, rate, iva, extras).toFixed(2);
});



function quote(h, r, iva, ex) {
    let result = h*r;
/*   (inicio; cindicion; incremento/decremento) */
    let inx = 0; /* inicio */
    do{ /* condicion */
        console.log( ex.options[inx].selected);
        if (ex.options[inx].selected) {
            result += parseFloat(ex.options[inx].value);
        }
        inx++; /* incremento/decremento */
    } while(inx < ex.options.length); /* for inx */



    if (iva){
        result *= 1.16;
    }

    return result;
    }



//funcion para cotizar con un while
// function quote(h, r, iva, ex) {
//     let result = h*r;
// /*   (inicio; cindicion; incremento/decremento) */
//     let inx = 0; /* inicio */
//     while(inx < ex.options.length) { /* condicion */
//         console.log( ex.options[inx].selected);
//         if (ex.options[inx].selected) {
//             result += parseFloat(ex.options[inx].value);
//         }
//         inx++; /* incremento/decremento */
//     } /* for inx */



//     if (iva){
//         result *= 1.16;
//     }

//     return result;
//     }


// funcion para cotizar con un for
// function quote(h, r, iva, ex) {
//     let result = h*r;
// /* for  (inicio; cindicion; incremento/decremento) */
//     for (let inx = 0; inx < ex.options.length; inx++) {
//         console.log( ex.options[inx].selected);
//         if (ex.options[inx].selected) {
//             result += parseFloat(ex.options[inx].value);
//         }
//     } /* for inx */



//     if (iva){
//         result *= 1.16;
//     }

//     return result;
//     }

/* function quote(h, r, iva, index) {
    let result = h*r;
    switch (index) {
        case 1:
            result += 1500;
            break;

        case 2:
            result += 2500;
            break;

        case 3:
            result += 5000;
            break;

        default:
            break;
    }


    if (iva){
        result *= 1.16;
    }

    return result;
    } */


/*     if (index==1) {  
        result += 1500; 
    } else if (index==2) {
        result += 2500; 
    } else if (index==3){
        result += 5000;
    }

    if (iva){
        result *= 1.16;
    }


    return result;
    } */

    function price(h, r){
        let hr = h*r
        return hr;
    }

function fiva(h, r, iva) {
    if (iva){
        return h*r*0.16;
    } 
    else {
        return 0;
    }
}

function year(index) {
    let year = 0;
    if (index==1) {  
        year += 1500; 
    } else if (index==2) {
        year += 2500; 
    } else if (index==3){
        year += 5000;
    }

    return year;
}