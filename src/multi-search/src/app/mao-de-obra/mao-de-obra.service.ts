import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MaoDeObra } from './mao-de-obra';

const URL = 'http://localhost:3002/workforce'

@Injectable({
  providedIn: 'root'
})
export class MaoDeObraService {

  constructor(private http: HttpClient) { }

  getWorkforces() {
    return this.http.get<MaoDeObra[]>(URL)
  }
}
