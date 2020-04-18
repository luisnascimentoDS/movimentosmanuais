import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  retrieveAll(): Produto [] {

    return PRODUTOS;
  }
}

// tslint:disable-next-line:prefer-const
let PRODUTOS: Produto[] = [

  {
    id: 1,
    descricao: 'Produto 1'
  },
  {
    id: 2,
    descricao: 'Produto 2'
  },
  {
    id: 3,
    descricao: 'Produto 3'
  },
  {
    id: 4,
    descricao: 'Produto 4'
  }
];

