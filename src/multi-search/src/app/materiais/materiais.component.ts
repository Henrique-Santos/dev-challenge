import { MateriaisService } from './materiais.service';
import { Component, OnInit } from '@angular/core';
import { Materiais } from './materiais';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.css']
})
export class MateriaisComponent implements OnInit {

  materials: Materiais[] = []

  constructor(private materiaisService: MateriaisService) { }

  ngOnInit(): void {
    this.materiaisService
      .getMaterials()
      .subscribe(material => this.materials = material)
  }

}
