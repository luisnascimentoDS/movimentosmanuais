import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cosif } from './cosif';

@Injectable({
  providedIn: 'root'
})
export class CosifService {

  retrieveAll() {
    return this.http.get<Array<Cosif>>(`${environment.apiUrl}/cosif`);
  }

  constructor(private http: HttpClient) {
  }
}

// tslint:disable-next-line:prefer-const
/*let COSIFS: Cosif[] = [

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
];*/
