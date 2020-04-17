import { Component, OnInit } from "@angular/core";
import { Movimento } from './movimento';
import { ActivatedRoute } from '@angular/router';
import { MovimentoService } from './movimento.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html'
})

export class MovimentoComponent implements OnInit {

  movimento: Movimento;

  constructor(private activedRoute: ActivatedRoute, private movimentoServie: MovimentoService) {}

  ngOnInit(): void {
    this.movimento = new Movimento();
  }

  include(): void {

    this.movimentoServie.include(this.movimento);
    this.movimento = new Movimento();
  }

  isEdit(): boolean {

    return false;
  }
}
