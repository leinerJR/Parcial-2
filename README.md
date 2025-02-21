# Parcial-2
# Ordenar Libros

Este proyecto implementa un algoritmo de ordenamiento por inserción para ordenar una lista de libros según la cantidad de reservas en orden descendente. El objetivo es proporcionar una solución eficiente para organizar libros en una biblioteca o colección personal.

## Descripción

La función `ordenarLibros` ordena un array de objetos `libros` utilizando el algoritmo de ordenamiento por inserción. Cada libro tiene las siguientes propiedades:

- `titulo`: El título del libro.
- `anio`: El año de publicación.
- `reservas`: La cantidad de reservas que tiene el libro.

### Funcionamiento del Algoritmo

1. **Inicialización**: La función comienza con el segundo elemento del array (índice 1), considerando que el primer elemento ya está ordenado por definición.
2. **Bucle Principal**: Itera a través del array `libros` desde el segundo elemento hasta el final.
3. **Clave y Comparación**: Para cada elemento, se almacena en una variable `clave` y se compara con los elementos anteriores en el array.
4. **Reubicación de Elementos**: Si el número de reservas del elemento anterior es menor que el de la `clave`, se desplaza el elemento una posición hacia adelante.
5. **Inserción**: La `clave` se inserta en su posición correcta.

## Ejemplo de Uso

A continuación, se muestra un ejemplo de cómo utilizar la función `ordenarLibros`:

```javascript
// Definir array de libros
const libros = [
  { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
  { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
  { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
  { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
];

// Llamar a la función de ordenamiento
const librosOrdenados = ordenarLibros(libros);

// Imprimir resultados
console.log("Libros ordenados por cantidad de reservas:");
console.log(librosOrdenados);
