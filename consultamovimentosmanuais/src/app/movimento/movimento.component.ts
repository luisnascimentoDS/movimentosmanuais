import { Component, OnInit } from "@angular/core";
import { Movimento } from './movimento';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html'
})

export class MovimentoComponent implements OnInit {

  movimento: Movimento;

  ngOnInit(): void {

  }

}
