import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cotization',
  templateUrl: './cotization.component.html',
  styleUrls: ['./cotization.component.css']
})
export class CotizationComponent implements OnInit {
public list_event: any[];
public type_food: any[];
public leading_events: any[];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $(document).ready(function(){
        $('select').formSelect();
      });
    });

    this.list_event = [
      {name: 'Opción 1', prize: 200 },
      {name: 'Opcion 2',  prize: 400}
  ];

  this.type_food = [
    {name: 'Opción 1 Food', prize: 210 },
    {name: 'Opcion 2 Food', prize: 100}
];
this.leading_events = [
  {name: 'Opción 1 Leading', prize: 10 },
  {name: 'Opcion 2 Leading', prize: 20}
];
  }

}
