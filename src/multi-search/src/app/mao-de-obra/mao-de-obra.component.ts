import { Component, Input, OnInit } from '@angular/core';

import { MaoDeObra } from './mao-de-obra';
import { MaoDeObraService } from './mao-de-obra.service';

@Component({
  selector: 'app-mao-de-obra',
  templateUrl: './mao-de-obra.component.html',
  styleUrls: ['./mao-de-obra.component.css']
})
export class MaoDeObraComponent implements OnInit {

  workforces: MaoDeObra[] = []
  @Input() workforcesSearch: string = ''

  constructor(private maoDeObraService: MaoDeObraService) { }

  ngOnInit(): void {
    this.maoDeObraService
      .getWorkforces()
      .subscribe(workforce => this.workforces = workforce)
  }

}
