let numeroString;
let sumaDigitos;

function ingreso() {
  sumaDigitos = 0;
  let numeroIngresado = parseInt(prompt('Ingrese el número a sumar')); // se usa parseInt para confirmar el dato correcto
  if (numeroIngresado >= 1 && numeroIngresado <= 10000) {
    separarDigito(numeroIngresado);
    console.log(sumaDigitos);
  } else {
    alert('Ha ingresado un número no permitido');
  }
}

function separarDigito(numero) {
  numeroString = numero.toString(); //se usa .toString() para pasar la variable number a string y poder separarlos
  for (let i = 0; i < numeroString.length; i++) {
    let digito = numeroString.charAt(i); // se separa por digito el numero completo
    sumaDigitos = sumaDigitos + parseInt(digito);
  }
}
