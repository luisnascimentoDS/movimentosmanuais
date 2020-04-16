# Consulta Movimentos Manuais

Desafio Técnico, processo seletivo do banco `BNP Paribas`.

Elaborar uma aplicação para `Inserção e Consulta dos Movimentos Manuais` digitados para um determinado mês e ano. Essa
aplicação deverá ser desenvolvida com base no Modelo Entidade Relacionamento na página 3 e de
acordo com os itens discriminados:

1) Criar todas as tabelas conforme MER e dicionário de dados (Páginas 3 e 4).
2) Criar uma stored procedure que retorne como saída as colunas Mês, Ano, Código do Produto,
Descrição do Produto, Número do Lançamento, Descrição e Valor, ordenando os mesmos por
Mês, Ano e Número do Lançamento utilizando as tabelas PRODUTO e MOVIMENTO_MANUAL.
Essa stored procedure deverá ser utilizada no item 3.b.
3) Criar uma tela para manutenção na tabela MOVIMENTO_MANUAL
a) Protótipo:

b) A tela deverá possuir um Grid, que sempre será preenchido com resultado da consulta
realizada através da stored procedure do item 2.
c) Na inclusão de um novo movimento essa tela deverá funcionar da seguinte maneira:
1) Permitir que através de um botão, sejam habilitados os campos da tela para digitação
de um novo lançamento;
2) Permitir que sejam informados o mês e ano do movimento através de digitação;
3) Permitir que sejam escolhidos através de combo os Produtos e seus respectivos Códigos
Cosif. Estes combos deverão ser carregados com valores das tabelas PRODUTO e
PRODUTO_COSIF, respectivamente;
4) O Número do Lançamento será obtido através de consulta na tabela
MOVIMENTO_MANUAL, selecionando o maior Número de Lançamento e somando 1
(um) a esse resultado. Não exibir esse campo na tela;
5) Os campos VAL_VALOR e DES_DESCRICAO deverão ser informados através de digitação;
6) O campo DAT_MOVIMENTO deverá ser informado com a data/hora da gravação do
registro;
7) O campo COD_USUARIO deverá ter o valor fixo “TESTE”;
8) Após a inclusão do movimento o Grid deverá ser atualizado e os campos da tela
desabilitados.