import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../estoques/estoques.services';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  constructor(private listEstoque : ListService,private router : Router) {
   
  }

 ngOnInit(): void {
 }

 onSubmit(form:any){
 let id : number 
 let cod : number 
 let nome : string = ''
 let entrada : number 
 let saida : number 
 let qtde : number 

 id = form.value.id
 cod = form.value.cod
 nome = form.value.nome
 entrada = form.value.entrada
 saida = form.value.saida
 qtde = form.value.qtde

 this.listEstoque.addProduto(id,cod,nome,entrada,saida,qtde).subscribe(()=>{this.router.navigate(['/estoques'])});

 }
}
