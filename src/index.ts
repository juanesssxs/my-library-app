import * as readline from 'readline';
import BookStore from './model/bookStore';
import { Book } from './model/book';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const library = new BookStore();

function mostrarMenu() {
    console.log("\n Menú de Biblioteca ");
    console.log("1 - Agregar libro");
    console.log("2 - Mostrar libros");
    console.log("3 - Eliminar libro");
    console.log("4 - Salir de la biblioteca");
}

function iniciarPrograma() {
    mostrarMenu();
    rl.question("Elija una opción: ", (opcion) => {
        manejarOpcion(opcion);
    });
}

function continuar() {
    rl.question("\nQuieres continuar en el la biblioteca (si/no): ", (respuesta) => {
        if (respuesta === 'si') {
            mostrarMenu();
            rl.question("Elija una opción: ", (opcion) => {
                manejarOpcion(opcion);
            });
        } else {
            console.log("Saliendo de la liblioteca."); 
        }
    });
}

function agregarLibro() {
    rl.question("Ingrese el título del libro: ", (titulo) => {
        rl.question("Ingrese la editorial del libro: ", (editorial) => {
            rl.question("Ingrese el precio del libro: ", (precio) => {
                rl.question("Ingrese el género del libro: ", (genero) => {
                    rl.question("Ingrese la descripción del libro: ", (descripcion) => {
                        const nuevoLibro = new Book(titulo, editorial, parseInt(precio), genero, descripcion);
                        library.agregarBook(nuevoLibro);
                        continuar();
                    });
                });
            });
        });
    });
}

function manejarOpcion(opcion: string) {
    switch (opcion) {
        case '1':
            agregarLibro();
            break;
        case '2':
            library.mostrarBook();
            continuar();
            break;
        case '3':
            rl.question("Ingrese el título del libro que desea eliminar: ", (titulo) => {
                library.eliminarBook(titulo);
                continuar();
            });
            break;
        case '4':
            console.log("Saliendo de la bibilioteca."); 
            break;
    }
}

iniciarPrograma();
