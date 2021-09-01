import { Component, OnInit } from '@angular/core';
import { MovimentoService } from './movimento.service';
import { Movimento } from './movimento';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html',
  styleUrls: ['./movimento-list.component.css']
})
export class MovimentoListComponent implements OnInit {

  listaMovimentos: Array<Movimento> = new Array<Movimento>();
  constructor(private movimentoService: MovimentoService) {}

  ngOnInit(): void {
   this.movimentoService.retrieveAll().subscribe(
     m=> {
       this.listaMovimentos = m;
     }
   );
  }

}
