import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Produto } from "./produto";
import { URL_API } from "../app.api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProdutoService {
  produtos: Produto[];

  private urlCliente: string = URL_API + "produtos";

  constructor(private http: HttpClient) {
    this.produtos = [];
  }

  addProduto (produto: Produto) {
    return this.http.post<Produto>(this.urlCliente, produto);
  }
}
