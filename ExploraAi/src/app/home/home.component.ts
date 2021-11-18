import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public resultadoConvercao = "00";
  public currency: any;
  public value: any;
  public lista2 = new Array();
  public lista1 = new Array();

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.listAllCurrency();
  }

  listAllCurrency() {
    this.api.fetchCoins().subscribe((res: any) => {
      console.log(res, "minhas moedas");

      this.lista2.push(res.USD);
      this.lista2.push(res.BTC);
      this.lista2.push(res.ETH);
      this.lista2.push(res.EUR);
      this.lista2.push(res.GBP);

      console.log(this.lista2);
    })
  }

  fazerConversao() {
    let conta = this.value * this.currency;
    let newConta = conta.toFixed(2).replace(".", ",");
    this.resultadoConvercao = newConta.toString();
    console.log(this.resultadoConvercao)
  }

  askMoedas() {
    this.lista2.forEach((res: any) => {
      this.lista1.push(res.ask);
    })
    console.log(this.lista1);
  }

}
