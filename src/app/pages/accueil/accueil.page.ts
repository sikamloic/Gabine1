import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/shares/services/details.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})

export class AccueilPage implements OnInit {
 
  focused : boolean;
  like = false;
  articles = [
    {nom:"fraise", img:"assets/fraise.jpg", prix:1500, like: false},
    {nom:"lemon", img:"assets/lemon.jpg", prix:2000, like: false},
    {nom:"pomme", img:"assets/pomme.jpg", prix:5000, like: false},
    {nom:"banane", img:"assets/banane.jpg", prix:25000, like: false},
    {nom:"orange", img:"assets/orange.jpg", prix:1000, like: false},
    {nom:"citron", img:"assets/citron.jpg", prix:12500, like: false},
    {nom:"mangue", img:"assets/mangue.jpg", prix:500, like: false},
    {nom:"carotte", img:"assets/carotte.jpg", prix:25000, like: false},
    {nom:"oignons", img:"assets/oignons.jpg", prix:1000, like: false},
    {nom:"cocombre", img:"assets/cocombre.jpg", prix:12500, like: false},
    {nom:"pomme de terre", img:"assets/pomme de terre.jpg", prix:500, like: false},
    {nom:"haricot", img:"assets/haricot.jpg", prix:25000, like: false},
    {nom:"poivron", img:"assets/poivron.jpg", prix:1000, like: false},
    {nom:"ail", img:"assets/ail.jpg", prix:12500, like: false},
    {nom:"haricot vert", img:"assets/haricot vert.jpg", prix:500, like: false},
  ]
  categories = [
    {nom:'legumes'},
    {nom:'fruits'},
    {nom:'PRODUITS LAITIERS'},
    {nom:'MATIÈRES GRASSES '},
    {nom:'PRODUITS SUCRÉS'},
    {nom:'poisson'},
    {nom:'viande'},
  ]
  slides = [
    {img: 'assets/slide1.jpg'},
    {img: 'assets/slide2.jpg'},
  ]
  constructor(
    private share : DetailsService,
    private route : Router
  ) { }

  sendInfo(item : any){
    // this.share.setInfo(item)
    this.route.navigate(['details'])
  }

  onBlur(e:any){
    const value = e.target.value;
    if(!value){
      this.focused = false;
    }
  }

  ngOnInit() {
  }

}
