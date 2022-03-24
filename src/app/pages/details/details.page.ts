import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/shares/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data : any
  constructor(
    private details: DetailsService,
    private location : Location
    ) {
    
  }

  goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.details.items.subscribe(res =>{
      console.log(res)
      this.data = res;
    })
  }

}
