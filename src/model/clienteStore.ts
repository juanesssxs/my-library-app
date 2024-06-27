import { cliente } from './cliente';

class clienteStore {
    private clientes: cliente[];

    constructor() {
        this.clientes = [];
    }

    agregarCliente(cliente: cliente): void {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.nombre} agregado.`);
    }

    eliminarCliente(nombre: string): void {
        const index = this.clientes.findIndex(cliente => cliente.nombre === nombre);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`CLiente ${nombre} eliminado.`);
        } else {
            console.log(`CLiente ${nombre} no encontrado.`);
        }
    }

    mostrarCliente(): void {
        if (this.clientes.length === 0) {
            console.log('No hay clientes');
        } else {
            console.log('Clientes registrados:');
            this.clientes.forEach(cliente => {
                console.log(`- Nombre: ${cliente.nombre}, Direccion: ${cliente.direccion}, Telefono: ${cliente.telefono}, Email: ${cliente.email}`);
            });
        }
    }
}

export default clienteStore;
