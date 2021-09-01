import { Injectable } from "@angular/core";
import { Movimento } from './movimento';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  retrieveAll() {
    return this.http.get<Array<Movimento>>(`${environment.apiUrl}/movimentos-manuais`);
  }

  saveMovimento(m: Movimento) {
    var body = JSON.stringify(m);
    return this.http.post<Array<Movimento>>(`${environment.apiUrl}/movimentos-manuais`, body, this.httpOptions);
  }

  constructor(private http: HttpClient) {
  }
}

// tslint:disable-next-line:prefer-const
/*let MOVIMENTOS: Movimento[] = [
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

];*/
