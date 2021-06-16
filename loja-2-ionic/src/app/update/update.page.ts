import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '../update/update.moduls';
import { ListService } from '../estoques/estoques.services';
import { Estoque } from '../estoques/estoques.moduls';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  index: number = 0;
  produto: Estoque = null;
  // produtoSelected: Estoque;
  quantidade: number = 0;
  valor: number = 0;
  saidabd: number = 0;
  id: number = 0;
  

  constructor(private route:ActivatedRoute, public estoqueService:ListService,private router : Router) {
    
   }

   ngOnInit(): void {
  this.carregar();

  }
carregar(): void{
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.estoqueService.getItemEstoque(this.id).subscribe((produto) => {
    this.produto = produto
  
  });
}

  onSubmit(from:any){

  }

//quantidade
  
  adicionar(): void{

  this.estoqueService.adicionarQuantidade(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.quantidade).subscribe((produto) => {
    this.produto = produto
  });
  this.carregar();
  }

  remover(): void{

    this.estoqueService.removerQuantidade(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.quantidade).subscribe((produto) => {
      this.produto = produto
    });
    this.carregar();
    }

//saida
      adicionar1(): void{

      this.estoqueService.adicionarSaida(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.saidabd).subscribe((produto) => {
        this.produto = produto
      });
      this.carregar();
      }
      remover1(): void{

        this.estoqueService.removerSaida(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.saidabd).subscribe((produto) => {
          this.produto = produto
        });
        this.carregar();
        }

// entrada
      adicionar2(): void{

        this.estoqueService.adicionarEntrada(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.valor).subscribe((produto) => {
          this.produto = produto
        });
        this.carregar();
        }
        remover2(): void{

          this.estoqueService.removerEntrada(this.produto.id,this.produto.cod,this.produto.nome,this.produto.entrada,this.produto.saida,this.produto.qtde, this.valor).subscribe((produto) => {
            this.produto = produto
          });
          this.carregar();
          }

}
