import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoques.moduls';
import { ListService } from './estoques.services';

@Component({
  selector: 'app-estoques',
  templateUrl: './estoques.page.html',
  styleUrls: ['./estoques.page.scss'],
})
export class EstoquesPage implements OnInit {
  produtos: Estoque[]
  constructor(private estoqueServise:ListService) {
   
   }

  ngOnInit(): void {
  }

ionViewWillEnter(){
  this.estoqueServise.getEstoque().subscribe(produtos => {this.produtos = produtos});
}

}
