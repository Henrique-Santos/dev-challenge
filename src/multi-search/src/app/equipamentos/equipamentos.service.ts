import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipamentos } from './equipamentos';

const URL = 'http://localhost:3001/equipments'

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(private http: HttpClient) { }

  getEquipments() {
    return this.http.get<Equipamentos[]>(URL)
  }

}
