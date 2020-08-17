import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { CLIENTES } from "./clientes.json";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor() {}

  getClientes(): Observable<Cliente[]> {
    //convertimos - creamos nuestro flujo Observable a partir de los objetos
    return of(CLIENTES);
  }
}
