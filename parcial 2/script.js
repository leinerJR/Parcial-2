// function ordenarLibros(libros) {
//     for (let i = 1; i < libros.length; i++) {
//       let clave = libros[i];
//       let j = i - 1;
//       while (j >= 0 && libros[j].reservas < clave.reservas) {
//         libros[j + 1] = libros[j];
//         j--;
//       }
//       libros[j + 1] = clave;
//     }
//     return libros;
//   }
  
//   const libros = [
//     { titulo: "Algoritmos Avanzados", anio: 2018, reservas: 120 },
//     { titulo: "Introducción a JavaScript", anio: 2020, reservas: 90 },
//     { titulo: "Estructuras de Datos", anio: 2015, reservas: 60 },
//     { titulo: "Sistemas Operativos", anio: 2019, reservas: 110 }
//   ];
  
//   const librosOrdenados = ordenarLibros(libros);
  
//   console.log("Libros ordenados por cantidad de reservas:");
//   console.log(librosOrdenados);
    
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------

// function ordenarBurbuja(libros) {
//     for (let i = 0; i < libros.length - 1; i++) {
//       for (let j = 0; j < libros.length - i - 1; j++) {
//         if (libros[j].reservas < libros[j + 1].reservas) {
//           let temp = libros[j];
//           libros[j] = libros[j + 1];
//           libros[j + 1] = temp;
//         }
//       }
//     }
//     return libros;
//   }
  
//   function ordenarInsercion(libros) {
//     for (let i = 1; i < libros.length; i++) {
//       let clave = libros[i];
//       let j = i - 1;
//       while (j >= 0 && libros[j].reservas < clave.reservas) {
//         libros[j + 1] = libros[j];
//         j--;
//       }
//       libros[j + 1] = clave;
//     }
//     return libros;
//   }
  
//   function ordenarSeleccion(libros) {
//     for (let i = 0; i < libros.length - 1; i++) {
//       let minimo = i;
//       for (let j = i + 1; j < libros.length; j++) {
//         if (libros[j].reservas > libros[minimo].reservas) {
//           minimo = j;
//         }
//       }
//       let temp = libros[i];
//       libros[i] = libros[minimo];
//       libros[minimo] = temp;
//     }
//     return libros;
//   }
  
//   const libros = [];
//   for (let i = 0; i < 1000; i++) {
//     libros.push({ titulo: `Libro ${i}`, anio: 2020, reservas: Math.floor(Math.random() * 1000) });
//   }
  
//   console.time("Burbuja");
//   ordenarBurbuja(libros.slice());
//   console.timeEnd("Burbuja");
  
//   console.time("Insercion");
//   ordenarInsercion(libros.slice());
//   console.timeEnd("Insercion");
  
//   console.time("Seleccion");
//   ordenarSeleccion(libros.slice());
//   console.timeEnd("Seleccion");