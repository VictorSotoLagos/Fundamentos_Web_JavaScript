function pizzaOven(masa, salsa, queso, proteína, agregado) {
    var pizzaSalidaDelHorno = {};
    pizzaSalidaDelHorno.masa = masa;
    pizzaSalidaDelHorno.salsa = salsa;
    pizzaSalidaDelHorno.queso = queso;
    pizzaSalidaDelHorno.proteína = proteína;
    pizzaSalidaDelHorno.agregado = agregado;

    return pizzaSalidaDelHorno;
}

var ingresoPizzaAlHorno = pizzaOven("masa biga", "salsa tomate italiana", "queso mantecoso", "carne", "cebolla");
console.log(ingresoPizzaAlHorno);

var estiloChicago = pizzaOven("masa normal", "salsa toamte italiana", "queso mozzarella", "pepperoni", "salchicha");
console.log(estiloChicago);