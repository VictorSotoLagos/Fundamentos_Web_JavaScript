/* var botonesAceptar = ["#botonaceptar1", "#botonaceptar2"];
var botonesRechazar = ["#botonrechazar1", "#botonrechazar2",];
var fichaPendiente = ["#pendiente1", "#pendiente2"];
for (let i=0; i<botonesAceptar.length; i++) {
    let aceptar = document.querySelector(botonesAceptar[i]);
    let rechazar = document.querySelector(botonesRechazar[i]);
    let pendienteAutorizacion = document.querySelector(fichaPendiente[i]);
    
    aceptar.addEventListener("click", function() {
  
        pendienteAutorizacion[i].innerText = remove();
    });

    /*
    Rechazar.addEventListener("click", function() {
        
        likes[i] += 1; 
        displaylikes.innerText = likes[i] + " like(s)";
    });
   

}
     */
/*
let botonPendiente = document.querySelector("#botonaceptar1");
let objetoFicha = document.querySelector("#pendiente1");
let nsolicitudesConexion = 2; 


botonPendiente.addEventListener("click", function() {
    objetoFicha.remove();
    nsolicitudesConexion -= 1;
    tituloSolicitudes.innerText = "Solicitudes de Conexion ("+ nsolicitudesConexion + ")"; 

});
*/

let selectorBotonesAceptar = ["#botonaceptar1", "#botonaceptar2"];
let selectorBotonesRechazar = ["#botonrechazar1", "#botonrechazar2"];
let selectorFicha = ["#pendiente1", "#pendiente2"];
let nsolicitudesConexion = 2;
let totalConexiones = 500; 
let tituloSolicitudes = document.querySelector("#solicitudestitulo h3");
let tusConexionesActuales = document.querySelector("#tusconexiones h3");

for (let i=0; i<selectorFicha.length; i++) {
    let botonAceptarPendiente = document.querySelector(selectorBotonesAceptar[i]);
    let botonRechazarPendiente = document.querySelector(selectorBotonesRechazar[i]);
    let fichaElegida = document.querySelector(selectorFicha[i]);

    botonAceptarPendiente.addEventListener("click", function(){
        fichaElegida.remove();
        nsolicitudesConexion -= 1;
        totalConexiones += 1;
        tituloSolicitudes.innerText = "Solicitudes de Conexion ("+ nsolicitudesConexion + ")"; 
        tusConexionesActuales.innerText = "Tus Conexiones ("+ totalConexiones +")";
    })

    botonRechazarPendiente.addEventListener("click", function(){
        fichaElegida.remove();
        nsolicitudesConexion -= 1;
        tituloSolicitudes.innerText = "Solicitudes de Conexion ("+ nsolicitudesConexion + ")"; 

    })
}
