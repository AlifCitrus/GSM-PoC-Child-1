import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  title = 'GSM-PoC-Child-1';
  constructor() { }

  ngOnInit(): void {
  }

}
