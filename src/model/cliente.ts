export class cliente {
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;

    constructor(nombre: string,
                direccion: string,
                telefono: string,
                email: string) 
                {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}