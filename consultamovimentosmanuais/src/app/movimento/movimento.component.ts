import { Component, OnInit } from "@angular/core";
import { Movimento } from './movimento';
import { ActivatedRoute } from '@angular/router';
import { MovimentoService } from './movimento.service';
import { ProdutoService } from '../produto/produto.service';
import { CosifService } from '../cosif/cosif.service';
import { Produto } from '../produto/produto';
import { Cosif } from '../cosif/cosif';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html'
})

export class MovimentoComponent implements OnInit {

  movimento: Movimento;
  listaProduto: Produto [];
  listaCosif: Cosif [];

  // tslint:disable-next-line:max-line-length
  constructor(private activedRoute: ActivatedRoute, private movimentoServie: MovimentoService,
    // tslint:disable-next-line:align
    private produtoService: ProdutoService, private cosifService: CosifService) {}

  ngOnInit(): void {

    this.movimento = new Movimento();
    this.listaProduto = this.produtoService.retrieveAll();
    this.listaCosif = this.cosifService.retrieveAll();
  }

  include(): void {

    this.movimentoServie.include(this.movimento);
  }

  isEdit(): boolean {

    return false;
  }

  new(): void {

    this.movimento = new Movimento();
  }
}
