import { Component, OnInit } from '@angular/core';
import { dias } from './agenda';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //objetoDia: Dia[]; 
  constructor() { }

  ngOnInit(): void {
    //this.objetoDia = dias;
  }
}
