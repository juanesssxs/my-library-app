import * as readline from 'readline';
import BookStore from './model/bookStore';
import { Book } from './model/book';
import { cliente } from './model/cliente';
import clienteStore from './model/clienteStore';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clients = new clienteStore()
const library = new BookStore();

const libro = new Book ("La sirenita","Disney Press",2000,"Fantasia","La historia sigue el viaje de una joven sirena que está dispuesta a renunciar a su vida en el mar como sirena para ganar un alma humana.");
const librodos = new Book ("Bosques Tejidos","LA DILIGENCIA LIBROS S.A.S",3000,"Ecologia","El autor nos recuerda que un bosque no es un bosque sin los movimientos de las plantas trepadoras y las hojas comidas por insectos. Mateo, consumado naturalista nos invita a conservar y restaurar a la naturaleza");

const clienteuno = new cliente ("Juan ESteban Restrepo","B/alaska MZ h4 #7","3116567123","juanes@gmail.com");
const clientedos = new cliente ("Abby Cortes Bolaños","B/alaska MZ f7 #2","3006634178","abbycortes@gmail.com");

    library.agregarBook(libro);
    library.agregarBook(librodos);
    

    clients.agregarCliente(clienteuno);
    clients.agregarCliente(clientedos);
    

function mostrarMenu() {
    console.log(" ------------------ ");
    console.log("   Menú de Biblioteca ");
    console.log("1 - Agregar libro");
    console.log("2 - Mostrar libros");
    console.log("3 - Eliminar libro");
    console.log(" ------------------ ");
    console.log("   Menú de Cliente ");
    console.log("4 - Agregar Cliente");
    console.log("5 - Mostrar Clientes");
    console.log("6 - Eliminar Cliente");
    console.log("7 - Salir del sistema");
    console.log(" ------------------ ");
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
            console.log("Saliendo del sistema."); 
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

function agregarCliente() {
    rl.question("Ingrese el nombre del cliente: ", (nombre) => {
        rl.question("Ingrese la direccion del cliente: ", (direccion) => {
            rl.question("Ingrese el telefono del cliente: ", (telefono) => {
                rl.question("Ingrese el email del cliente: ", (email) => {
                        const nuevoCliente = new cliente(nombre, direccion, telefono, email);
                        clients.agregarCliente(nuevoCliente);
                        continuar();
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
            agregarCliente();
            break;
        case '5':
            clients.mostrarCliente();
            continuar();
            break;
        case '6':
            rl.question("Ingrese el nombre del cliente que desea eliminar: ", (nombre) => {
                clients.eliminarCliente(nombre);
                continuar();
            });
        case '7':
            console.log("Saliendo de la bibilioteca."); 
            break;
    }
}

iniciarPrograma();
