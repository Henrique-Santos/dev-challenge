import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-busca',
  templateUrl: './listar-busca.component.html',
  styleUrls: ['./listar-busca.component.css']
})
export class ListarBuscaComponent implements OnInit {

  filter: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
