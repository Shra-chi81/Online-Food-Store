import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-collection',
  templateUrl: './food-collection.component.html',
  styleUrls: ['./food-collection.component.scss']
})
export class FoodCollectionComponent implements OnInit {
  serviceData :any;

  constructor() {
    this.serviceData = [
        {
          "id": 1,
          "name":"Modak Hawan",
          "normal_image": "assets/img/dining.png",
        },
        {
          "id": 2,
          "name":"Modak Hawan",
          "normal_image": "assets/img/dining.png",
         },
        {
          "id":3,
          "name":"Modak Hawan",
          "normal_image": "assets/img/dining.png",
        },  {
          "id": 4,
          "name":"Modak Hawan",
          "normal_image": "assets/img/dining.png",
        },
    ]
  }




  ngOnInit(): void {
  }

}
