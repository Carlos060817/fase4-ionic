import { Injectable } from '@angular/core';
import { Estoque } from '../estoques/estoques.moduls';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private produtos: Estoque[]

  constructor() {
    this.produtos = [
        new Estoque(1,1001,"Volante",300,350,10),
    ]
   }

    getEstoque(){
      return this.produtos
    }
}
