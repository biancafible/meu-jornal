import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-exmplo',
  templateUrl: './primeiro-exmplo.component.html',
  styleUrls: ['./primeiro-exmplo.component.css']
})
export class PrimeiroExmploComponent implements OnInit {

  nome: string = '';



  constructor() { }

  ngOnInit() {
  }

  public atualizaNome(novoNome: Event) {
    this.nome = (<HTMLInputElement>novoNome.target).value;
    
  }

}
