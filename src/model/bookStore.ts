import { Book } from './book';

class BookStore {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    agregarBook(book: Book): void {
        this.books.push(book);
        console.log(`Libro '${book.titulo}' agregado a la biblioteca.`);
    }

    eliminarBook(titulo: string): void {
        const index = this.books.findIndex(book => book.titulo === titulo);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Libro '${titulo}' eliminado de la biblioteca.`);
        } else {
            console.log(`Libro '${titulo}' no encontrado en la biblioteca.`);
        }
    }

    mostrarBook(): void {
        if (this.books.length === 0) {
            console.log('La biblioteca está vacía.');
        } else {
            console.log('Libros en la biblioteca:');
            this.books.forEach(book => {
                console.log(`- Título: ${book.titulo}, Editorial: ${book.editorial}, Precio: ${book.precio}, Género: ${book.genero}, Descripción: ${book.descripcion}`);
            });
        }
    }
}

export default BookStore;
