import { Injectable } from '@angular/core';
import { Estoque } from './estoques.moduls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {

   baseUrl = "http://localhost:3000/produtos"
  constructor(private http : HttpClient) {

   }

   getEstoque() : Observable<Estoque[]> {
     return this.http.get<Estoque[]>(this.baseUrl)
   }

   getItemEstoque(id : number) : Observable<Estoque>{
     const url = `${this.baseUrl}/${id}`
     return this.http.get<Estoque>(url)
  }


  adicionarQuantidade(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, quantidade_inserida:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada,saida,qtde+quantidade_inserida)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }
  removerQuantidade(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, quantidade_inserida:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada,saida,qtde-quantidade_inserida)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }

  adicionarSaida(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, saidabd:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada,saida+saidabd,qtde)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }

  removerSaida(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, saidabd:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada,saida-saidabd,qtde)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }
  adicionarEntrada(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, valor:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada+valor,saida,qtde)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }

  removerEntrada(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number, valor:number) : Observable<Estoque>{
    let produto= new Estoque(id,cod,nome,entrada-valor,saida,qtde)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(url,produto)
  }


   addProduto(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number) : Observable<Estoque>{
   let produto = new Estoque(id,cod,nome,entrada,saida,qtde)
    return this.http.post<Estoque>(this.baseUrl,produto)
   }

}
