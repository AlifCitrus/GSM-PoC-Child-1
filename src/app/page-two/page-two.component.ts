import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  title = 'GSM-PoC-Child-1';

  constructor() { }

  ngOnInit(): void {
  }

}
