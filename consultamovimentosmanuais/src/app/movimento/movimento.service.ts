import { Injectable } from "@angular/core";
import { Movimento } from './movimento';
import { Cosif } from '../cosif/cosif';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  retrieveAll(): Movimento[] {
    return MOVIMENTOS;
  }

  include(movimento: Movimento): void {

    const index = (MOVIMENTOS.length) - 1;
    // tslint:disable-next-line:variable-name
    const _movAux: Movimento = MOVIMENTOS[index];
    movimento.numeroLancamento = _movAux.numeroLancamento + 1;
    MOVIMENTOS.push(movimento);
  }
}

// tslint:disable-next-line:prefer-const
let MOVIMENTOS: Movimento[] = [
  {
    numeroLancamento: 1,
    mes: 2,
    ano: 2012,
    produto: 1,
    cosif: 1,
    valor: 500,
    descricao: 'Teste Movimentos'
  },
  {
    numeroLancamento: 2,
    mes: 2,
    ano: 2012,
    produto: 2,
    cosif: 2,
    valor: 10,
    descricao: 'Teste Movimentos 2'
  },
  {
    numeroLancamento: 3,
    mes: 2,
    ano: 2012,
    produto: 3,
    cosif: 3,
    valor: 12,
    descricao: 'Teste Movimentos 2'
  },
  {
    numeroLancamento: 4,
    mes: 2,
    ano: 2012,
    produto: 4,
    cosif: 4,
    valor: 100,
    descricao: 'Teste Movimentos 4'
  }

];
