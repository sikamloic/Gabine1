import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  articles = [
    {nom:"fraise", img:"assets/fraise.jpg", prix:1500, like: false, qte: 1},
    {nom:"lemon", img:"assets/lemon.jpg", prix:2000, like: false, qte: 1},
    {nom:"pomme", img:"assets/pomme.jpg", prix:5000, like: false, qte: 1},
    {nom:"banane", img:"assets/banane.jpg", prix:25000, like: false, qte: 1},
    {nom:"orange", img:"assets/orange.jpg", prix:1000, like: false, qte: 1},
    {nom:"citron", img:"assets/citron.jpg", prix:12500, like: false, qte: 1},
    {nom:"mangue", img:"assets/mangue.jpg", prix:500, like: false, qte: 1},
  ];
  qte = 1;
  constructor() { }

  test(e: any){
    console.log(e)
  }

  add(){
    this.qte = this.qte + 1;
  }

  remove(){
    if(this.qte > 1){
      this.qte = this.qte - 1;
    }
  }

  ngOnInit() {
  }

}
