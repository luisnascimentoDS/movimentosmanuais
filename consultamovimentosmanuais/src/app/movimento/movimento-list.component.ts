import { Component, OnInit } from '@angular/core';
import { MovimentoService } from './movimento.service';
import { Movimento } from './movimento';

@Component({
  selector: 'app-movimento-list',
  templateUrl: './movimento-list.component.html'
})
export class MovimentoListComponent implements OnInit {

  movimentos: Movimento[] = [];
  constructor(private movimentoService: MovimentoService) {}

  ngOnInit(): void {
    this.movimentos = this.movimentoService.retrieveAll();
  }

}