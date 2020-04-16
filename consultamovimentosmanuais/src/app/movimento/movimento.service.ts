import { Injectable } from "@angular/core";
import { Movimento } from './movimento';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  retrieveAll(): Movimento[] {
    return MOVIMENTOS;
  }
}

// tslint:disable-next-line:prefer-const
let MOVIMENTOS: Movimento[] = [
  {
    numeroLancamento: 1,
    mes: 2,
    ano: 2012,
    produto: '1',
    cosif: '',
    valor: 500,
    descrição: 'Teste Movimentos'
  },
  {
    numeroLancamento: 2,
    mes: 2,
    ano: 2012,
    produto: '2',
    cosif: '',
    valor: 10,
    descrição: 'Teste Movimentos 2'
  },
  {
    numeroLancamento: 3,
    mes: 2,
    ano: 2012,
    produto: '1',
    cosif: '',
    valor: 12,
    descrição: 'Teste Movimentos 2'
  },
  {
    numeroLancamento: 4,
    mes: 2,
    ano: 2012,
    produto: '1',
    cosif: '',
    valor: 100,
    descrição: 'Teste Movimentos 4'
  }

];
