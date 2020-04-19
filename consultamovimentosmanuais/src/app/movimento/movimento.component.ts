import { Component, OnInit } from "@angular/core";
import { Movimento } from './movimento';
import { ActivatedRoute } from '@angular/router';
import { MovimentoService } from './movimento.service';
import { ProdutoService } from '../produto/produto.service';
import { CosifService } from '../cosif/cosif.service';
import { Produto } from '../produto/produto';
import { Cosif } from '../cosif/cosif';
import * as $ from 'jquery';

@Component({
  //selector: 'app-movimento',
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


    // tslint:disable-next-line:only-arrow-functions
    $('#btnNovo').click(function (){
      $('#mes').attr("readonly", false);
      $('#ano').attr("readonly", false);
      $('#produto').attr("readonly", false);
      $('#cosif').attr("readonly", false);
      $('#valor').attr("readonly", false);
      $('#descricao').attr("readonly", false);
      $('#btnLimpar').attr("disabled", false);

      });
    this.movimento = new Movimento();
    this.listaProduto = this.produtoService.retrieveAll();
    this.listaCosif = this.cosifService.retrieveAll();
  }

  include(): void {

    this.movimentoServie.include(this.movimento);
    this.ngOnInit();
  }

  reset(): void {

    $('#formMovimento').each (function (){
      this.reset();
    });
    this.movimento = new Movimento();
    this.listaProduto = this.produtoService.retrieveAll();
    this.listaCosif = this.cosifService.retrieveAll();
  }
}
