import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Materiais } from './materiais';

const URL = 'http://localhost:3001/materials'

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  constructor(private http: HttpClient) { }

  getMaterials() {
    return this.http.get<Materiais[]>(URL)
  }
}
