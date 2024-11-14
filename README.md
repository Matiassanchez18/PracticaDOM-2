# Proyecto: Clase Persona con Generaciones y Validaciones

Este proyecto permite crear un objeto `Persona` a través de un formulario web. El objeto tiene diversas propiedades, como nombre, edad, DNI, sexo, peso, altura, año de nacimiento y otros datos. Además, incluye métodos para determinar la generación a la que pertenece la persona, si es mayor de edad y para mostrar toda la información del objeto.

## Descripción

En este proyecto, se crea una clase `Persona` que contiene las siguientes propiedades:
- **nombre**: Nombre de la persona.
- **edad**: Edad de la persona.
- **DNI**: Número de identificación.
- **sexo**: Sexo de la persona (H para hombre, M para mujer).
- **peso**: Peso de la persona en kilogramos.
- **altura**: Altura de la persona en metros.
- **año de nacimiento**: Año en que la persona nació.

### Métodos disponibles:

1. **mostrarGeneracion**: 
   - Muestra un mensaje que indica a qué generación pertenece la persona y cuál es el rasgo característico de esa generación.
   - La clasificación de generaciones se basa en los siguientes rangos de años de nacimiento:
     - **Generación Z** (1995 - 2010): "Rasgo característico: Uso de tecnología digital".
     - **Generación Y (Millennials)** (1981 - 1994): "Rasgo característico: Adaptación a la tecnología y redes sociales".
     - **Generación X** (1965 - 1980): "Rasgo característico: Independencia y autodidactismo".
     - **Baby Boomers** (1946 - 1964): "Rasgo característico: Trabajo y dedicación en tiempos de prosperidad".
     - **Generación Silenciosa** (1928 - 1945): "Rasgo característico: Valores familiares y trabajo duro".
   
2. **esMayorDeEdad**: 
   - Verifica si la persona es mayor de edad (18 años o más) y devuelve un mensaje indicando el estado.
   
3. **mostrarDatos**: 
   - Devuelve toda la información del objeto `Persona`, mostrando todas sus propiedades.

### Interfaz de Usuario

La interfaz permite al usuario crear un objeto `Persona` y mostrar los resultados de las funciones mediante un formulario. El formulario incluye los siguientes campos:

- Nombre
- Edad
- DNI
- Sexo (opciones: Hombre, Mujer)
- Peso
- Altura
- Año de nacimiento

El usuario podrá interactuar con tres botones:
- **Mostrar Generación**: Muestra a qué generación pertenece la persona y su rasgo característico.
- **Es Mayor de Edad**: Muestra un mensaje si la persona es mayor de edad.
- **Mostrar Datos**: Muestra todos los datos de la persona.

## Tecnologías Utilizadas

- **HTML**: Estructura básica del formulario y la interfaz de usuario.
- **CSS**: Estilos para la presentación de la página.
- **JavaScript**: Implementación de la lógica de la clase `Persona` y la interacción con el formulario.
- **DOM**: Manipulación del DOM para mostrar resultados dinámicamente en la interfaz.

## Autor
- **Matias sanchez**
