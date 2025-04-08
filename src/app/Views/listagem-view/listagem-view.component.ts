import { Component } from '@angular/core';
import { LayoutComponentComponent } from '../../Components/layout-component/layout-component.component';
import { NgFor, NgIf } from '@angular/common';
import { ContatoServiceService } from '../../Services/contato-service.service';
import { Contato } from '../../Models/contatos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'listagemView',
  standalone: true,
  imports: [LayoutComponentComponent, NgFor, NgIf, FormsModule],
  templateUrl: './listagem-view.component.html',
  styleUrl: './listagem-view.component.css'
})
export class ListagemViewComponent {
  contatoEdit : Contato = {id: null, nome: '', telefone: null, email: '', profissao: '' }
  contatos : Contato[] = []
  statusEdit = 0

  constructor(private contatoService : ContatoServiceService){}

  ngOnInit(){
    this.contatos = this.contatoService.getContatos()
  }

  editarContato(id: number | null) {
    if (id != null) {
      this.statusEdit = id;
      const contato = this.contatos.find(c => c.id === id);
      if (contato) {
          this.contatoEdit = { ...contato };
      }
    }
  }

  cancelar(){
    this.contatoEdit = { id: null, nome: '', telefone: null, email: '', profissao: '' };
    this.statusEdit = 0;
  }

  editar(){
    this.contatoService.editContato(this.contatoEdit)
    this.cancelar()
  }
}
