import { Injectable } from '@angular/core';
import { Cosif } from './cosif';

@Injectable({
  providedIn: 'root'
})
export class CosifService {

  retrieveAll(): Cosif [] {

    return COSIFS;
  }
}

// tslint:disable-next-line:prefer-const
let COSIFS: Cosif[] = [

  {
    id: 1,
    descricao: 'Cosif 1'
  },
  {
    id: 2,
    descricao: 'Cosif 2'
  },
  {
    id: 3,
    descricao: 'Cosif 3'
  },
  {
    id: 4,
    descricao: 'Cosif 4'
  }
];
