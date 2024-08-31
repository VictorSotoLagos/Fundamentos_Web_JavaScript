/* --> Propuesta Inicial Sin Let: No funciona 

var todosBotones = ["#botonlike1", "#botonlike2", "#botonlike3"];
var todosDisplay = ["#numerolikes1", "#numerolikes2", "#numerolikes3"];
var likes = 0; //N de likes actuales

for (i=0; i<todosBotones.length; i++) {
    var botonlikes = document.querySelector(todosBotones[i]);
    var displaylikes = document.querySelector(todosDisplay[i]);
    botonlikes.addEventListener("click", function() {
        // Cambiamos los likes utilizando this y innerText
        likes += 1; 
        displaylikes.innerText = likes + " like(s)";
    });

}
*/

//Propuesta Final Con Let: se mantienen variables focalizadas a la función (no se confunden en el bucle)

var todosBotones = ["#botonlike1", "#botonlike2", "#botonlike3"];
var todosDisplay = ["#numerolikes1", "#numerolikes2", "#numerolikes3"];
var likes = [0, 0, 0]; //N de likes actuales

for (let i=0; i<todosBotones.length; i++) {
    let botonlikes = document.querySelector(todosBotones[i]);
    let displaylikes = document.querySelector(todosDisplay[i]);
    botonlikes.addEventListener("click", function() {
        // Cambiamos los likes utilizando this y innerText
        likes[i] += 1; 
        displaylikes.innerText = likes[i] + " like(s)";
    });

}
function darclick(elemento){
console.dir(elemento.innerText);
};
