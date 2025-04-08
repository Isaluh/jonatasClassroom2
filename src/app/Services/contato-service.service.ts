import { Injectable } from '@angular/core';
import { Contato } from '../Models/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoServiceService {
  contatos : Contato[] = [];
  private contador: number = 1;

  addContato(contato: Contato) {
    if (contato.id === null) {
      contato.id = this.contador++;
    }
    this.contatos.push(contato);
  }

  getContatos(){
    return this.contatos;
  }

  editContato(contato: Contato) {
    if (contato.id !== null) {
      const index = this.contatos.findIndex(c => c.id === contato.id);
      this.contatos[index] = contato; 
    } else {
      alert('Contato não encontrado para edição');
    }
}

  constructor() { }
}
