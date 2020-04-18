import { Produto } from '../produto/produto';
import { Cosif } from '../cosif/cosif';
import { ProdutoService } from '../produto/produto.service';
import { CosifService } from '../cosif/cosif.service';

export class Movimento {

  numeroLancamento: number;
  mes: number;
  ano: number;
  produto: number;
  cosif: number;
  valor: number;
  descricao: string;
}
