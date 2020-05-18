import { Component, OnInit } from '@angular/core';
import { Dia} from './dia';
import { AGENDA } from './agenda';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  objeto: Dia[]; 
  constructor() { }

  ngOnInit(): void {
    this.objeto = AGENDA;
  }
}
