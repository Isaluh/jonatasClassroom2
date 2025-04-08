import { Component } from '@angular/core';
import { LayoutComponentComponent } from '../../Components/layout-component/layout-component.component';
import { Contato } from '../../Models/contatos';
import { FormsModule } from '@angular/forms';
import { ContatoServiceService } from '../../Services/contato-service.service';

@Component({
  selector: 'cadastroView',
  standalone: true,
  imports: [LayoutComponentComponent, FormsModule],
  templateUrl: './cadastro-view.component.html',
  styleUrl: './cadastro-view.component.css'
})
export class CadastroViewComponent {
  contatoAdd : Contato = {id: null, nome: '', telefone: null, email: '', profissao: '' }

  constructor(private contatoService : ContatoServiceService){}

  cadastrar(){
    if(!this.contatoAdd.nome.trim()){
      alert('Campo obrigatório: "Nome" em branco, não foi possível cadastrar o aluno.')
      return
    }
    if(!this.contatoAdd.email.trim() && !this.contatoAdd.telefone){
      alert('Campo obrigatório: "Telefone" ou "E-mail" em branco, não foi possível cadastrar o aluno.')
      return
    }

    this.contatoService.addContato(this.contatoAdd);
    
    this.contatoAdd = { id: null, nome: '', telefone: null, email: '', profissao: '' };
  }
}
