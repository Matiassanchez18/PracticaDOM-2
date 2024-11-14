// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

let personas = [];

class Persona {
  #DNI;
  #Nombre;
  #Sexo;
  #anionacimiento;

  constructor(Nombre, edad, DNI, Sexo, peso, altura, anionacimiento) {
    this.#Nombre = Nombre;
    this.edad = edad;
    this.#DNI = DNI;
    this.#Sexo = Sexo;
    this.peso = peso;
    this.altura = altura;
    this.#anionacimiento = anionacimiento;
  }

  get Nombre() {
    return this.#Nombre;
  }

  get DNI() {
    return this.#DNI;
  }

  get Sexo() {
    return this.#Sexo;
  }

  get anionacimiento() {
    return this.#anionacimiento;
  }

  // Metodos
  MostrarGeneracion() {
    let result = "";

    if (this.#anionacimiento < 1920 || this.#anionacimiento > 2010) {
      result = "Ingrese un valor valido";
    } else if (this.#anionacimiento >= 1920 && this.#anionacimiento <= 1930) {
      result =
        "Su generacion es la Generacion Silenciosa<br>Su Rasgo caracteristico es la Austeridad";
    } else if (this.#anionacimiento >= 1940 && this.#anionacimiento <= 1968) {
      result =
        "Su generacion es Baby Boom<br>Su Rasgo caracteristico es la Ambicion";
    } else if (this.#anionacimiento >= 1969 && this.#anionacimiento <= 1980) {
      result =
        "Su generacion es la Generacion X<br>Su Rasgo caracteristico es la Obsesion por el exito";
    } else if (this.#anionacimiento >= 1981 && this.#anionacimiento <= 1993) {
      result =
        "Su generacion es la Generacion Y<br>Su Rasgo caracteristico es la Frustracion";
    } else if (this.#anionacimiento >= 1994 && this.#anionacimiento <= 2010) {
      result =
        "Su generacion es la Generacion Z<br>Su Rasgo caracteristico es la Irrelevancia";
    }

    return result;
  }

  EsMayorDeEdad() {
    let result = "";
    if (this.edad >= 18) {
      result = "Eres mayor de edad";
    } else {
      result = "Eres menor de edad";
    }
    return result; // Asegúrate de retornar el mensaje
  }

  mostrarDatos() {
    document.write(`
    <ul>
        <li>Nombre: ${this.#Nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.#DNI}</li>
        <li>Sexo: ${this.Sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} m</li>
        <li>Año de Nacimiento: ${this.#anionacimiento}</li>
    </ul>
`);
  }
}

function CrearPersona(e) {
  e.preventDefault();

  const nombre = document.getElementById("Nombre").value;
  const edad = parseInt(document.getElementById("Edad").value);
  const dni = document.getElementById("DNI").value;
  const sexo = document.getElementById("Sexo").value;
  const peso = parseFloat(document.getElementById("Peso").value);
  const altura = parseFloat(document.getElementById("Altura").value);
  const anionacimiento = parseInt(
    document.getElementById("anonacimiento").value
  );

  const NPersona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anionacimiento
  );

  personas.push(NPersona);
  return NPersona;
}

function MostrarGeneracion() {
  const Generacion = document.getElementById("Generacion");

  if (personas.length > 0) {
    const Ultimapersona = personas[personas.length - 1];
    Generacion.innerHTML = Ultimapersona.MostrarGeneracion();
  } else {
    Generacion.innerText = "No se ha creado ninguna persona aún.";
  }
}

function MayorEedad() {
  const ME = document.getElementById("mayorEdadResult");
  if (personas.length > 0) {
    const UltimoArray = personas[personas.length - 1];
    ME.innerHTML = UltimoArray.EsMayorDeEdad(); 
  } else {
    ME.innerText = "No se ha creado ninguna persona aún.";
  }
}

const enviar = document.querySelector("#Formulario");
enviar.addEventListener("submit", CrearPersona); 

const Generacion = document.querySelector(".btn-danger");
Generacion.addEventListener("click", MostrarGeneracion);

const MayorEdad = document.querySelector(".btn-warning");
MayorEdad.addEventListener("click", MayorEedad);
